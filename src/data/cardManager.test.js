import { canPlayersInteract } from './cardManager';
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
