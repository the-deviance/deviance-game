import React, { createContext, useContext, useEffect, useReducer, ReactNode } from 'react';
import { toast } from 'react-toastify';
import { GameData, Player } from '../types/game';

export const STORAGE_KEY = 'gameData';
export const BOARD_SIZE = 16;
export const PASS_GO_BONUS = 200;
export const MAX_SPICE_LEVEL = 3;
export const MAX_DRESS_LEVEL = 3; // 0 = fully clothed, 3 = naked

export const initialGameData: GameData = {
  players: [],
  toys: {},
  spiceLevel: 0,
  currentPlayer: 0,
  started: false,
  totalMoves: 0,
};

export function createDefaultPlayer(id: number): Player {
  return {
    id,
    money: 2000,
    optOuts: 3,
    pronouns: { he: 'he', him: 'him', his: 'his' },
    position: 0,
    dress: 3,
  };
}

export type GameAction =
  | { type: 'SET_GAME_DATA'; payload: GameData }
  | { type: 'NEW_GAME' }
  | { type: 'START_GAME' }
  | { type: 'ADD_PLAYER' }
  | { type: 'REMOVE_LAST_PLAYER' }
  | { type: 'UPDATE_PLAYERS'; payload: Player[] }
  | { type: 'UPDATE_PLAYER'; payload: { id: number; updates: Partial<Player> } }
  | { type: 'SET_TOYS'; payload: Record<string, boolean> }
  | { type: 'MOVE_CURRENT_PLAYER_STEP' }
  | { type: 'ADJUST_MONEY'; payload: { playerId: number; delta: number } }
  | { type: 'ADJUST_OPT_OUTS'; payload: { playerId: number; delta: number } }
  | { type: 'REMOVE_CLOTHING'; payload: { playerId: number } }
  | { type: 'INCREASE_SPICE' }
  | { type: 'END_TURN' };

function updatePlayerById(
  state: GameData,
  id: number,
  update: (player: Player) => Partial<Player>
): GameData {
  const player = state.players.find(p => p.id === id);
  if (!player) return state;
  return {
    ...state,
    players: state.players.map(p => (p.id === id ? { ...p, ...update(p) } : p)),
  };
}

export function gameReducer(state: GameData, action: GameAction): GameData {
  switch (action.type) {
    case 'SET_GAME_DATA':
      return action.payload;
    case 'NEW_GAME':
      return { ...initialGameData, players: [createDefaultPlayer(0)] };
    case 'START_GAME':
      return { ...state, started: true };
    case 'ADD_PLAYER':
      return {
        ...state,
        players: [...state.players, createDefaultPlayer(state.players.length)],
      };
    case 'REMOVE_LAST_PLAYER':
      return { ...state, players: state.players.slice(0, -1) };
    case 'UPDATE_PLAYERS':
      return { ...state, players: action.payload.map(p => ({ ...p })) };
    case 'UPDATE_PLAYER':
      return updatePlayerById(state, action.payload.id, () => action.payload.updates);
    case 'SET_TOYS':
      return { ...state, toys: action.payload };
    case 'MOVE_CURRENT_PLAYER_STEP': {
      const player = state.players[state.currentPlayer];
      if (!player) return state;
      const from = player.position || 0;
      const passesGo = from + 1 >= BOARD_SIZE;
      return updatePlayerById(state, player.id, p => ({
        position: passesGo ? 0 : from + 1,
        money: passesGo ? p.money + PASS_GO_BONUS : p.money,
      }));
    }
    case 'ADJUST_MONEY':
      return updatePlayerById(state, action.payload.playerId, p => ({
        money: p.money + action.payload.delta,
      }));
    case 'ADJUST_OPT_OUTS':
      return updatePlayerById(state, action.payload.playerId, p => ({
        optOuts: p.optOuts + action.payload.delta,
      }));
    case 'REMOVE_CLOTHING':
      return updatePlayerById(state, action.payload.playerId, p => ({
        dress: Math.min((p.dress || 0) + 1, MAX_DRESS_LEVEL),
      }));
    case 'INCREASE_SPICE':
      return {
        ...state,
        spiceLevel: Math.min(state.spiceLevel + 1, MAX_SPICE_LEVEL),
      };
    case 'END_TURN':
      return {
        ...state,
        totalMoves: state.totalMoves + 1,
        currentPlayer:
          state.currentPlayer >= state.players.length - 1 ? 0 : state.currentPlayer + 1,
      };
    default:
      return state;
  }
}

export function loadGameData(): GameData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...initialGameData, ...JSON.parse(raw) };
  } catch (error) {
    console.error('Failed to load game data:', error);
  }
  return initialGameData;
}

interface GameContextType {
  gameData: GameData;
  dispatch: React.Dispatch<GameAction>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameData, dispatch] = useReducer(gameReducer, undefined, loadGameData);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gameData));
    } catch (error) {
      console.error('Failed to save game data:', error);
      toast.error('Failed to save game data');
    }
  }, [gameData]);

  return (
    <GameContext.Provider value={{ gameData, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
