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
  genderToTargetSex,
  PREF_KEYS,
  defaultPrefs,
} from '../types/game';

const player = (gender, sexuality) => ({ gender, sexuality });

describe('canPlayersInteract', () => {
  it('allows opposite-sex pairs when neither is gay', () => {
    expect(
      canPlayersInteract({
        owner: player(Gender.Male, Sexuality.Straight),
        player: player(Gender.Female, Sexuality.Straight),
      })
    ).toBe(true);
    expect(
      canPlayersInteract({
        owner: player(Gender.Female, Sexuality.Bi),
        player: player(Gender.Male, Sexuality.BiCurious),
      })
    ).toBe(true);
  });

  it('blocks opposite-sex pairs when either is gay', () => {
    expect(
      canPlayersInteract({
        owner: player(Gender.Male, Sexuality.Gay),
        player: player(Gender.Female, Sexuality.Straight),
      })
    ).toBe(false);
    expect(
      canPlayersInteract({
        owner: player(Gender.Female, Sexuality.Straight),
        player: player(Gender.Male, Sexuality.Gay),
      })
    ).toBe(false);
  });

  it('allows same-sex pairs when neither is straight', () => {
    expect(
      canPlayersInteract({
        owner: player(Gender.Male, Sexuality.Gay),
        player: player(Gender.Male, Sexuality.Bi),
      })
    ).toBe(true);
    expect(
      canPlayersInteract({
        owner: player(Gender.Female, Sexuality.BiCurious),
        player: player(Gender.Female, Sexuality.Bi),
      })
    ).toBe(true);
  });

  it('blocks same-sex pairs when either is straight', () => {
    expect(
      canPlayersInteract({
        owner: player(Gender.Male, Sexuality.Straight),
        player: player(Gender.Male, Sexuality.Gay),
      })
    ).toBe(false);
    expect(
      canPlayersInteract({
        owner: player(Gender.Female, Sexuality.Bi),
        player: player(Gender.Female, Sexuality.Straight),
      })
    ).toBe(false);
  });

  it('fails closed on missing players or unknown genders', () => {
    expect(canPlayersInteract({ owner: null, player: player(Gender.Male, Sexuality.Bi) })).toBe(false);
    expect(canPlayersInteract({ owner: player(Gender.Male, Sexuality.Bi), player: undefined })).toBe(false);
    expect(
      canPlayersInteract({
        owner: player(undefined, Sexuality.Bi),
        player: player(Gender.Female, Sexuality.Bi),
      })
    ).toBe(false);
  });
});

describe('genderToTargetSex', () => {
  it('maps the gender scale onto the card target_sex scale', () => {
    expect(genderToTargetSex(Gender.Male)).toBe(TargetSex.Male);
    expect(genderToTargetSex(Gender.Female)).toBe(TargetSex.Female);
  });
});

describe('canDoAction pref gating', () => {
  it('honours every pref key for both roles, including the newer gates', () => {
    for (const key of PREF_KEYS) {
      const withPref = { prefs: { [key]: true } };
      const withoutPref = { prefs: defaultPrefs() };
      const targetGated = { [`target_${key}`]: true };
      const playerGated = { [`player_${key}`]: true };

      expect(canDoAction({ player: withPref, card: targetGated, isTarget: true })).toBe(true);
      expect(canDoAction({ player: withoutPref, card: targetGated, isTarget: true })).toBe(false);
      expect(canDoAction({ player: withPref, card: playerGated, isTarget: false })).toBe(true);
      expect(canDoAction({ player: withoutPref, card: playerGated, isTarget: false })).toBe(false);
    }
  });

  it('passes ungated cards for players with no prefs at all', () => {
    expect(canDoAction({ player: {}, card: { name: 'x' }, isTarget: true })).toBe(true);
    expect(canDoAction({ player: {}, card: { name: 'x' }, isTarget: false })).toBe(true);
  });

  it('fails closed when a gated pref is missing from the player', () => {
    expect(
      canDoAction({ player: {}, card: { target_will_orgasm: true }, isTarget: true })
    ).toBe(false);
  });
});

describe('card drawing and the used pile', () => {
  const fullPrefs = Object.fromEntries(PREF_KEYS.map((key) => [key, true]));

  const makePlayer = (id, name, gender) => ({
    id,
    name,
    money: 2000,
    optOuts: 3,
    position: 0,
    dress: 0,
    gender,
    sexuality: Sexuality.Bi,
    pronouns: { he: 'he', him: 'him', his: 'his' },
    prefs: fullPrefs,
  });

  const alice = makePlayer(0, 'Alice', Gender.Female);
  const bob = makePlayer(1, 'Bob', Gender.Male);
  const gameData = {
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
    expect(card.message).not.toContain('%target%');
    expect(card.message).not.toContain('%player1%');
    expect(
      actionCards.some(
        (c) => c.message.includes('Alice') || c.message.includes('Bob')
      )
    ).toBe(false);
  });

  it('does not repeat a drawn card while unused cards remain', () => {
    const first = getActionCardforTarget({ target: alice, player: bob, gameData });
    const second = getActionCardforTarget({ target: alice, player: bob, gameData });
    expect(second.name).not.toBe(first.name);
  });

  it('never leaves a literal %player2% with only two players at the table', () => {
    for (let i = 0; i < 40; i++) {
      const card = getActionCardforTarget({ target: alice, player: bob, gameData });
      if (!card) break;
      expect(card.message).not.toMatch(/%player\d%/);
    }
  });

  it('fills three-person cards with the third player when one exists', () => {
    const carol = makePlayer(2, 'Carol', Gender.Female);
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

  it('never deals a man an orgasm card below spice 5', () => {
    const bareBob = { ...bob, dress: 3 };
    const bareAlice = { ...alice, dress: 3 };
    const spicy = { ...gameData, players: [bareAlice, bareBob], spiceLevel: 4 };
    for (let i = 0; i < 200; i++) {
      const card = getActionCardforTarget({ target: bareBob, player: bareAlice, gameData: spicy });
      if (!card) break;
      expect(card.target_orgasms).toBeFalsy();
    }
  });

  it('never casts a man in the climaxing partner slot below spice 5', () => {
    const bareBob = { ...bob, dress: 3 };
    const bareAlice = { ...alice, dress: 3 };
    const spicy = { ...gameData, players: [bareAlice, bareBob], spiceLevel: 4 };
    for (let i = 0; i < 200; i++) {
      const card = getActionCardforTarget({ target: bareAlice, player: bareBob, gameData: spicy });
      if (!card) break;
      // Bob is the only possible partner, so any player_orgasms card is a leak.
      expect(card.player_orgasms).toBeFalsy();
    }
  });

  it('still deals women orgasm cards at the printed level', () => {
    // Orgasm cards mostly want an undressed target, so play these naked.
    const bareAlice = { ...alice, dress: 3 };
    const carol = { ...makePlayer(2, 'Carol', Gender.Female), dress: 3 };
    const girls = { ...gameData, players: [bareAlice, carol], spiceLevel: 4 };
    let found = false;
    for (let i = 0; i < 400; i++) {
      const card = getActionCardforTarget({ target: bareAlice, player: carol, gameData: girls });
      if (!card) break;
      if (card.target_orgasms) { found = true; break; }
    }
    expect(found).toBe(true);
  });

  it('deals men orgasm cards once the game reaches spice 5', () => {
    const bareBob = { ...bob, dress: 3 };
    const bareAlice = { ...alice, dress: 3 };
    const naked = { ...gameData, players: [bareAlice, bareBob] };
    let found = false;
    for (let i = 0; i < 400; i++) {
      const card = getActionCardforTarget({ target: bareBob, player: bareAlice, gameData: naked });
      if (!card) break;
      if (card.target_orgasms) { found = true; break; }
    }
    expect(found).toBe(true);
  });

  it('returns null (not a stack overflow) when no encounter partner is compatible', () => {
    const straightAlice = { ...makePlayer(0, 'Alice', Gender.Female), sexuality: Sexuality.Straight };
    const straightSue = { ...makePlayer(1, 'Sue', Gender.Female), sexuality: Sexuality.Straight };
    const noMatch = { ...gameData, players: [straightAlice, straightSue] };
    expect(() => {
      const card = getEncounterCardForPlayer({ target: straightAlice, gameData: noMatch });
      expect(card).toBeNull();
    }).not.toThrow();
  });

  it('enforces encounter consent gates on both the target and the partner', () => {
    const prude = { ...makePlayer(1, 'Bob', Gender.Male), prefs: {} };
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
