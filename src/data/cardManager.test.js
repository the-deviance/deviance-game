import {
  canPlayersInteract,
  getActionCardforTarget,
  getUsedCardPile,
  resetUsedCards,
} from './cardManager';
import { actionCards } from './actionCards';
import { Gender, Sexuality, TargetSex, genderToTargetSex } from '../types/game';

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

describe('card drawing and the used pile', () => {
  const fullPrefs = {
    dominant: true,
    submissive: true,
    humiliation_giving: true,
    humiliation_receiving: true,
    anal_giving: true,
    anal_receiving: true,
    blindfolded: true,
    resisting: true,
  };

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
    spiceLevel: 0,
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
});
