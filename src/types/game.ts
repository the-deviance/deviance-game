export interface Player {
  id: number;
  name?: string;
  position?: number;
  money: number;
  dress?: number;
  optOuts: number;
  gender?: string | number;
  pronouns: {
    he: string;
    him: string;
    his: string;
  };
  sexuality?: string;
  prefs?: {
    dominant?: boolean;
    submissive?: boolean;
    humiliation_giving?: boolean;
    humiliation_receiving?: boolean;
    anal_giving?: boolean;
    anal_receiving?: boolean;
    blindfolded?: boolean;
    resisting?: boolean;
  };
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
  target_sex?: number;
  spice_level: number;
  dress_level_from: number;
  dress_level_to: number;
  number_of_participants: number;
  appropriate_for_bi_curious: boolean;
  timer?: number;
  [key: string]: any;
}