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

// Every consent toggle a player can set during setup. Cards gate on these via
// `player_<key>` / `target_<key>` fields; canDoAction checks this list, so a
// key missing here is a gate that never opens.
export const PREF_KEYS = [
  'dominant',
  'submissive',
  'humiliation_giving',
  'humiliation_receiving',
  'anal_giving',
  'anal_receiving',
  'oral_giving',
  'oral_receiving',
  'pain_giving',
  'pain_receiving',
  'restraining',
  'restrained',
  'blindfolded',
  'forceful',
  'resisting',
  'will_orgasm',
  'exhibitionism',
  'feet',
  'roleplay',
] as const;
export type PrefKey = (typeof PREF_KEYS)[number];

export type PlayerPrefs = Partial<Record<PrefKey, boolean>>;

export const defaultPrefs = (): PlayerPrefs =>
  Object.fromEntries(PREF_KEYS.map((key) => [key, false]));

// Give/receive pairs rendered as grid rows in setup; singles as a checklist.
export const PREF_PAIRS: {
  label: string;
  giving: PrefKey;
  receiving: PrefKey;
}[] = [
  { label: 'Pain (spanking, pinching)', giving: 'pain_giving', receiving: 'pain_receiving' },
  { label: 'Humiliation', giving: 'humiliation_giving', receiving: 'humiliation_receiving' },
  { label: 'Oral', giving: 'oral_giving', receiving: 'oral_receiving' },
  { label: 'Anal', giving: 'anal_giving', receiving: 'anal_receiving' },
  { label: 'Bondage (tying / being tied)', giving: 'restraining', receiving: 'restrained' },
];

export const PREF_SINGLES: { label: string; key: PrefKey }[] = [
  { label: 'Dominant', key: 'dominant' },
  { label: 'Submissive', key: 'submissive' },
  { label: 'Being blindfolded', key: 'blindfolded' },
  { label: 'Being forceful with others', key: 'forceful' },
  { label: 'Resisting / being overpowered (play)', key: 'resisting' },
  { label: 'Orgasm in front of the group', key: 'will_orgasm' },
  { label: 'Performing / showing off', key: 'exhibitionism' },
  { label: 'Foot play', key: 'feet' },
  { label: 'Roleplay scenarios', key: 'roleplay' },
];

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

// A game counts as "in progress" once setup has produced named players; a
// freshly reset game has one anonymous placeholder player and doesn't count.
export function hasGameInProgress(gameData?: GameData | null): boolean {
  if (!gameData || !gameData.started) return false;
  return gameData.players.some(p => Boolean(p.name && p.name.trim()));
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
