import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { GameData, Player } from '../types/game';

interface GameContextType {
  gameData: GameData;
  dispatch: React.Dispatch<GameAction>;
}

type GameAction =
  | { type: 'SET_GAME_DATA'; payload: GameData }
  | { type: 'ADD_PLAYER'; payload: Player }
  | { type: 'UPDATE_PLAYER'; payload: { id: number; updates: Partial<Player> } }
  | { type: 'REMOVE_PLAYER'; payload: number }
  | { type: 'SET_CURRENT_PLAYER'; payload: number }
  | { type: 'INCREMENT_SPICE_LEVEL' }
  | { type: 'INCREMENT_MOVE_COUNT' }
  | { type: 'UPDATE_TOYS'; payload: Record<string, boolean> };

const initialGameData: GameData = {
  players: [],
  toys: {},
  spiceLevel: 0,
  currentPlayer: 0,
  started: false,
  totalMoves: 0,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

function gameReducer(state: GameData, action: GameAction): GameData {
  switch (action.type) {
    case 'SET_GAME_DATA':
      return action.payload;
    case 'ADD_PLAYER':
      return {
        ...state,
        players: [...state.players, action.payload],
      };
    case 'UPDATE_PLAYER':
      return {
        ...state,
        players: state.players.map(player =>
          player.id === action.payload.id
            ? { ...player, ...action.payload.updates }
            : player
        ),
      };
    case 'REMOVE_PLAYER':
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.payload),
      };
    case 'SET_CURRENT_PLAYER':
      return {
        ...state,
        currentPlayer: action.payload,
      };
    case 'INCREMENT_SPICE_LEVEL':
      return {
        ...state,
        spiceLevel: Math.min(state.spiceLevel + 1, 4),
      };
    case 'INCREMENT_MOVE_COUNT':
        console.log(`Move Count: ${state.totalMoves}`)
      const newMoveCount = state.totalMoves + 1;
      const shouldIncrementSpice = newMoveCount % 10 === 0;
      return {
        ...state,
        totalMoves: newMoveCount,
        spiceLevel: shouldIncrementSpice ? Math.min(state.spiceLevel + 1, 4) : state.spiceLevel,
      };
    case 'UPDATE_TOYS':
      return {
        ...state,
        toys: action.payload,
      };
    default:
      return state;
  }
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameData, dispatch] = useReducer(gameReducer, initialGameData);

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

export function useSpiceLevel() {
  const { dispatch } = useGame();
  
  const incrementMoveAndCheckSpice = () => {
      console.log('Incrementing move count and checking spice level');
    dispatch({ type: 'INCREMENT_MOVE_COUNT' });
  };
  
  return { incrementMoveAndCheckSpice };
}