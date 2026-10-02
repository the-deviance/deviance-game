/* eslint-disable @typescript-eslint/no-redeclare */
// Shared enums. Values match what's already persisted in localStorage and
// the card data files, so existing saves keep working.
// Each enum pairs a const object with a same-named type, hence the
// no-redeclare disable above.

// Game scale: 0 = fully clothed, counting UP as clothes come OFF.
// (The setup slider displays the opposite direction; the inversion lives
// only inside PlayerForm.)
export const DressLevel = {
  FullyClothed: 0,
  Topless: 1,
  Underwear: 2,
  Naked: 3,
} as const;
export type DressLevel = (typeof DressLevel)[keyof typeof DressLevel];

export const DRESS_LABELS: Record<DressLevel, string> = {
  [DressLevel.FullyClothed]: 'Fully Clothed',
  [DressLevel.Topless]: 'Topless',
  [DressLevel.Underwear]: 'Underwear',
  [DressLevel.Naked]: 'Naked',
};

export const Gender = {
  Male: 0,
  Female: 1,
} as const;
export type Gender = (typeof Gender)[keyof typeof Gender];

export const Sexuality = {
  Straight: 0,
  BiCurious: 1,
  Bi: 2,
  Gay: 3,
} as const;
export type Sexuality = (typeof Sexuality)[keyof typeof Sexuality];

// Who a card is aimed at. Offset by one from Gender (0 means "anyone"),
// which is what the old `target.gender + 1` comparison encoded.
export const TargetSex = {
  Any: 0,
  Male: 1,
  Female: 2,
} as const;
export type TargetSex = (typeof TargetSex)[keyof typeof TargetSex];

export function genderToTargetSex(gender: Gender): TargetSex {
  return gender === Gender.Male ? TargetSex.Male : TargetSex.Female;
}

export interface PlayerPrefs {
  dominant?: boolean;
  submissive?: boolean;
  humiliation_giving?: boolean;
  humiliation_receiving?: boolean;
  anal_giving?: boolean;
  anal_receiving?: boolean;
  blindfolded?: boolean;
  resisting?: boolean;
}

export interface Player {
  id: number;
  name?: string;
  position?: number;
  money: number;
  dress?: DressLevel;
  optOuts: number;
  gender?: Gender;
  pronouns: {
    he: string;
    him: string;
    his: string;
  };
  sexuality?: Sexuality;
  prefs?: PlayerPrefs;
  newPosition?: number;
}

export interface GameData {
  players: Player[];
  toys: Record<string, boolean>;
  spiceLevel: number;
  currentPlayer: number;
  started: boolean;
  totalMoves: number;
}

export interface Card {
  name: string;
  message: string;
  target_sex?: TargetSex;
  spice_level: number;
  dress_level_from: number;
  dress_level_to: number;
  number_of_participants: number;
  appropriate_for_bi_curious: boolean;
  timer?: number;
  [key: string]: any;
}
