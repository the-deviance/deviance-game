import {
  canDoAction,
  canPlayersInteract,
  getActionCardforTarget,
  getEncounterCardForPlayer,
  getUsedCardPile,
  resetUsedCards,
} from './cardManager';
import { actionCards } from './actionCards';
import {
  Gender,
  Sexuality,
  TargetSex,
  targetSexMatchesBody,
  migratePlayers,
  PREF_KEYS,
  defaultPrefs,
  Body,
  DressLevel,
  Card,
  GameData,
  Player,
} from '../types/game';

const BODY_PENIS = { penis: true, vulva: false, bra: false };
const BODY_VULVA = { penis: false, vulva: true, bra: true };

const player = (id: number, playsWith?: number[]) => ({ id, playsWith } as Player);

describe('canPlayersInteract', () => {
  it('allows a pair only when BOTH players ticked each other', () => {
    expect(
      canPlayersInteract({ owner: player(0, [1]), player: player(1, [0]) })
    ).toBe(true);
  });

  it('blocks a one-sided tick in either direction', () => {
    expect(
      canPlayersInteract({ owner: player(0, [1]), player: player(1, []) })
    ).toBe(false);
    expect(
      canPlayersInteract({ owner: player(0, []), player: player(1, [0]) })
    ).toBe(false);
  });

  it('fails closed on missing players or missing tick lists', () => {
    expect(canPlayersInteract({ owner: null, player: player(1, [0]) })).toBe(false);
    expect(canPlayersInteract({ owner: player(0, [1]), player: undefined })).toBe(false);
    expect(
      canPlayersInteract({ owner: player(0, undefined), player: player(1, [0]) })
    ).toBe(false);
  });
});

describe('targetSexMatchesBody', () => {
  it('matches anatomy-targeted cards on body facts, not labels', () => {
    expect(targetSexMatchesBody(TargetSex.Male, BODY_PENIS)).toBe(true);
    expect(targetSexMatchesBody(TargetSex.Male, BODY_VULVA)).toBe(false);
    expect(targetSexMatchesBody(TargetSex.Female, BODY_VULVA)).toBe(true);
    expect(targetSexMatchesBody(TargetSex.Female, BODY_PENIS)).toBe(false);
  });

  it('lets Any-targeted cards fit every body, including none ticked', () => {
    expect(targetSexMatchesBody(TargetSex.Any, BODY_PENIS)).toBe(true);
    expect(targetSexMatchesBody(undefined, { penis: false, vulva: false, bra: false })).toBe(true);
  });

  it('fails closed on a missing body for anatomy-targeted cards', () => {
    expect(targetSexMatchesBody(TargetSex.Male, undefined)).toBe(false);
    expect(targetSexMatchesBody(TargetSex.Female, undefined)).toBe(false);
  });
});

describe('migratePlayers (gender/sexuality era saves)', () => {
  const legacy = (id: number, gender?: Gender, sexuality?: Sexuality): Player => ({
    id,
    money: 2000,
    optOuts: 3,
    pronouns: { he: 'he', him: 'him', his: 'his' },
    gender,
    sexuality,
  });

  it('derives body facts and the orgasm rule from the old gender', () => {
    const [man, woman] = migratePlayers([
      legacy(0, Gender.Male, Sexuality.Straight),
      legacy(1, Gender.Female, Sexuality.Straight),
    ]);
    expect(man.body).toEqual({ penis: true, vulva: false, bra: false });
    expect(man.orgasmEndsNight).toBe(true);
    expect(woman.body).toEqual({ penis: false, vulva: true, bra: true });
    expect(woman.orgasmEndsNight).toBe(false);
  });

  it('reproduces the old orientation matrix as mutual ticks', () => {
    const [m1, f1, f2, m2] = migratePlayers([
      legacy(0, Gender.Male, Sexuality.Straight),
      legacy(1, Gender.Female, Sexuality.Bi),
      legacy(2, Gender.Female, Sexuality.Straight),
      legacy(3, Gender.Male, Sexuality.Gay),
    ]);
    // Straight man: up for both women, not the other man.
    expect(m1.playsWith!.sort()).toEqual([1, 2]);
    // Bi woman: up for everyone.
    expect(f1.playsWith!.sort()).toEqual([0, 2, 3]);
    // Straight woman: the men only, and NOT m2 mutually (he's gay).
    expect(f2.playsWith!.sort()).toEqual([0, 3]);
    expect(canPlayersInteract({ owner: f2, player: m2 })).toBe(false);
    expect(canPlayersInteract({ owner: f2, player: m1 })).toBe(true);
    // Same-sex straight pair never interacts.
    expect(canPlayersInteract({ owner: f1, player: f2 })).toBe(false);
  });

  it('passes players that already carry the new fields through untouched', () => {
    const modern = {
      ...legacy(0, undefined, undefined),
      body: BODY_VULVA,
      playsWith: [2],
      orgasmEndsNight: true,
    };
    const [out] = migratePlayers([modern]);
    expect(out.body).toEqual(BODY_VULVA);
    expect(out.playsWith).toEqual([2]);
    expect(out.orgasmEndsNight).toBe(true);
  });
});

describe('canDoAction pref gating', () => {
  it('honours every pref key for both roles, including the newer gates', () => {
    for (const key of PREF_KEYS) {
      const withPref = { prefs: { [key]: true } } as Player;
      const withoutPref = { prefs: defaultPrefs() } as Player;
      const targetGated = { [`target_${key}`]: true } as Partial<Card> as Card;
      const playerGated = { [`player_${key}`]: true } as Partial<Card> as Card;

      expect(canDoAction({ player: withPref, card: targetGated, isTarget: true })).toBe(true);
      expect(canDoAction({ player: withoutPref, card: targetGated, isTarget: true })).toBe(false);
      expect(canDoAction({ player: withPref, card: playerGated, isTarget: false })).toBe(true);
      expect(canDoAction({ player: withoutPref, card: playerGated, isTarget: false })).toBe(false);
    }
  });

  it('passes ungated cards for players with no prefs at all', () => {
    expect(canDoAction({ player: {} as Player, card: { name: 'x' } as Partial<Card> as Card, isTarget: true })).toBe(true);
    expect(canDoAction({ player: {} as Player, card: { name: 'x' } as Partial<Card> as Card, isTarget: false })).toBe(true);
  });

  it('fails closed when a gated pref is missing from the player', () => {
    expect(
      canDoAction({ player: {} as Player, card: { target_will_orgasm: true } as Partial<Card> as Card, isTarget: true })
    ).toBe(false);
  });
});

describe('card drawing and the used pile', () => {
  const fullPrefs = Object.fromEntries(PREF_KEYS.map((key) => [key, true]));

  const makePlayer = (id: number, name: string, body: Body, extra: Partial<Player> = {}): Player => ({
    id,
    name,
    money: 2000,
    optOuts: 3,
    position: 0,
    dress: DressLevel.FullyClothed,
    body,
    // Default: everyone at a 3-seat table is up for everyone else; tests
    // narrow this where pairing rules are the thing under test.
    playsWith: [0, 1, 2].filter((other) => other !== id),
    orgasmEndsNight: Boolean(body.penis),
    pronouns: { he: 'he', him: 'him', his: 'his' },
    prefs: fullPrefs,
    ...extra,
  });

  const alice = makePlayer(0, 'Alice', BODY_VULVA);
  const bob = makePlayer(1, 'Bob', BODY_PENIS);
  const gameData: GameData = {
    players: [alice, bob],
    toys: {},
    spiceLevel: 5,
    currentPlayer: 0,
    started: true,
    totalMoves: 1,
  };

  beforeEach(() => resetUsedCards());
  afterAll(() => resetUsedCards());

  it('records drawn cards and resets cleanly', () => {
    expect(getUsedCardPile()).toHaveLength(0);
    const card = getActionCardforTarget({ target: alice, player: bob, gameData });
    expect(card).toBeTruthy();
    expect(getUsedCardPile().length).toBeGreaterThan(0);
    resetUsedCards();
    expect(getUsedCardPile()).toHaveLength(0);
  });

  it('fills in placeholders without baking names into the shared deck', () => {
    const card = getActionCardforTarget({ target: alice, player: bob, gameData });
    expect(card!.message).not.toContain('%target%');
    expect(card!.message).not.toContain('%player1%');
    expect(
      actionCards.some(
        (c) => c.message.includes('Alice') || c.message.includes('Bob')
      )
    ).toBe(false);
  });

  it('does not repeat a drawn card while unused cards remain', () => {
    const first = getActionCardforTarget({ target: alice, player: bob, gameData });
    const second = getActionCardforTarget({ target: alice, player: bob, gameData });
    expect(second!.name).not.toBe(first!.name);
  });

  it('never leaves a literal %player2% with only two players at the table', () => {
    for (let i = 0; i < 40; i++) {
      const card = getActionCardforTarget({ target: alice, player: bob, gameData });
      if (!card) break;
      expect(card.message).not.toMatch(/%player\d%/);
    }
  });

  it('fills three-person cards with the third player when one exists', () => {
    const carol = makePlayer(2, 'Carol', BODY_VULVA);
    const threeUp = { ...gameData, players: [alice, bob, carol] };
    let found = 0;
    for (let i = 0; i < 150; i++) {
      const card = getActionCardforTarget({ target: alice, player: bob, gameData: threeUp });
      if (!card) break;
      expect(card.message).not.toMatch(/%player\d%/);
      if ((card.number_of_participants || 2) >= 3) {
        // Extras exclude the player and target, so the third slot must be Carol.
        expect(card.message).toContain('Carol');
        found++;
      }
    }
    expect(found).toBeGreaterThan(0);
  });

  it('never deals an orgasm card below spice 5 to a player whose night it would end', () => {
    const bareBob = { ...bob, dress: DressLevel.Naked };
    const bareAlice = { ...alice, dress: DressLevel.Naked };
    const spicy = { ...gameData, players: [bareAlice, bareBob], spiceLevel: 4 };
    for (let i = 0; i < 200; i++) {
      const card = getActionCardforTarget({ target: bareBob, player: bareAlice, gameData: spicy });
      if (!card) break;
      expect(card.target_orgasms).toBeFalsy();
    }
  });

  it('never casts a one-and-done player in the climaxing partner slot below spice 5', () => {
    const bareBob = { ...bob, dress: DressLevel.Naked };
    const bareAlice = { ...alice, dress: DressLevel.Naked };
    const spicy = { ...gameData, players: [bareAlice, bareBob], spiceLevel: 4 };
    for (let i = 0; i < 200; i++) {
      const card = getActionCardforTarget({ target: bareAlice, player: bareBob, gameData: spicy });
      if (!card) break;
      // Bob is the only possible partner, so any player_orgasms card is a leak.
      expect(card.player_orgasms).toBeFalsy();
    }
  });

  it('deals orgasm cards at the printed level when the toggle is off', () => {
    // The rule is per player, not per anatomy: a penis-owner who unticks
    // "one orgasm ends my night" draws orgasm cards like anyone else.
    const multiBob = { ...bob, dress: DressLevel.Naked, orgasmEndsNight: false };
    const bareAlice = { ...alice, dress: DressLevel.Naked };
    const spicy = { ...gameData, players: [bareAlice, multiBob], spiceLevel: 4 };
    let found = false;
    for (let i = 0; i < 400; i++) {
      const card = getActionCardforTarget({ target: multiBob, player: bareAlice, gameData: spicy });
      if (!card) break;
      if (card.target_orgasms) { found = true; break; }
    }
    expect(found).toBe(true);
  });

  it('still deals toggle-off players orgasm cards below spice 5', () => {
    // Orgasm cards mostly want an undressed target, so play these naked.
    const bareAlice = { ...alice, dress: DressLevel.Naked };
    const carol = { ...makePlayer(2, 'Carol', BODY_VULVA), dress: DressLevel.Naked };
    const girls = { ...gameData, players: [bareAlice, carol], spiceLevel: 4 };
    let found = false;
    for (let i = 0; i < 400; i++) {
      const card = getActionCardforTarget({ target: bareAlice, player: carol, gameData: girls });
      if (!card) break;
      if (card.target_orgasms) { found = true; break; }
    }
    expect(found).toBe(true);
  });

  it('deals toggle-on players orgasm cards once the game reaches spice 5', () => {
    const bareBob = { ...bob, dress: DressLevel.Naked };
    const bareAlice = { ...alice, dress: DressLevel.Naked };
    const naked = { ...gameData, players: [bareAlice, bareBob] };
    let found = false;
    for (let i = 0; i < 400; i++) {
      const card = getActionCardforTarget({ target: bareBob, player: bareAlice, gameData: naked });
      if (!card) break;
      if (card.target_orgasms) { found = true; break; }
    }
    expect(found).toBe(true);
  });

  it('returns null (not a stack overflow) when no encounter partner is mutual', () => {
    // Sue ticked Alice, but Alice didn't tick Sue back: no pairing, ever.
    const soloAlice = { ...makePlayer(0, 'Alice', BODY_VULVA), playsWith: [] };
    const sue = { ...makePlayer(1, 'Sue', BODY_VULVA), playsWith: [0] };
    const noMatch = { ...gameData, players: [soloAlice, sue] };
    expect(() => {
      const card = getEncounterCardForPlayer({ target: soloAlice, gameData: noMatch });
      expect(card).toBeNull();
    }).not.toThrow();
  });

  it('enforces encounter consent gates on both the target and the partner', () => {
    const prude = { ...makePlayer(1, 'Bob', BODY_PENIS), prefs: {} };
    const guarded = { ...gameData, players: [alice, prude] };
    for (let i = 0; i < 40; i++) {
      const card = getEncounterCardForPlayer({ target: prude, gameData: guarded });
      if (!card) break;
      PREF_KEYS.forEach((key) => {
        expect(card[`target_${key}`]).toBeFalsy();
      });
    }
  });
});
