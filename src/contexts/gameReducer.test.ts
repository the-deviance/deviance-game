import {
  gameReducer,
  initialGameData,
  createDefaultPlayer,
  BOARD_SIZE,
  PASS_GO_BONUS,
  MAX_SPICE_LEVEL,
  MAX_DRESS_LEVEL,
} from './GameContext';
import { GameData, DressLevel } from '../types/game';

function stateWithPlayers(count: number, overrides: Partial<GameData> = {}): GameData {
  return {
    ...initialGameData,
    started: true,
    players: Array.from({ length: count }, (_, i) => ({
      ...createDefaultPlayer(i),
      name: `Player ${i}`,
    })),
    ...overrides,
  };
}

describe('gameReducer', () => {
  describe('NEW_GAME / START_GAME', () => {
    it('resets to a single default player, not yet started', () => {
      const state = gameReducer(stateWithPlayers(3, { spiceLevel: 2 }), { type: 'NEW_GAME' });
      expect(state.players).toHaveLength(1);
      expect(state.players[0].money).toBe(2000);
      expect(state.spiceLevel).toBe(0);
      expect(state.started).toBe(false);
    });

    it('START_GAME flips started', () => {
      const state = gameReducer(gameReducer(stateWithPlayers(2), { type: 'NEW_GAME' }), {
        type: 'START_GAME',
      });
      expect(state.started).toBe(true);
    });
  });

  describe('players', () => {
    it('ADD_PLAYER appends a default player with the next id', () => {
      const state = gameReducer(stateWithPlayers(2), { type: 'ADD_PLAYER' });
      expect(state.players).toHaveLength(3);
      expect(state.players[2].id).toBe(2);
      expect(state.players[2].optOuts).toBe(3);
    });

    it('REMOVE_LAST_PLAYER drops the last player', () => {
      const state = gameReducer(stateWithPlayers(3), { type: 'REMOVE_LAST_PLAYER' });
      expect(state.players.map(p => p.id)).toEqual([0, 1]);
    });

    it('UPDATE_PLAYER merges updates by id', () => {
      const state = gameReducer(stateWithPlayers(2), {
        type: 'UPDATE_PLAYER',
        payload: { id: 1, updates: { name: 'Aimee', dress: 1 } },
      });
      expect(state.players[1].name).toBe('Aimee');
      expect(state.players[1].dress).toBe(1);
      expect(state.players[0].name).toBe('Player 0');
    });

    it('UPDATE_PLAYERS stores copies so callers cannot mutate state', () => {
      const incoming = stateWithPlayers(2).players;
      const state = gameReducer(stateWithPlayers(2), {
        type: 'UPDATE_PLAYERS',
        payload: incoming,
      });
      expect(state.players).not.toBe(incoming);
      expect(state.players[0]).not.toBe(incoming[0]);
      expect(state.players[0].name).toBe(incoming[0].name);
    });
  });

  describe('movement', () => {
    it('moves the current player forward one square', () => {
      const start = stateWithPlayers(2, { currentPlayer: 1 });
      const state = gameReducer(start, { type: 'MOVE_CURRENT_PLAYER_STEP' });
      expect(state.players[1].position).toBe(1);
      expect(state.players[0].position).toBe(0);
    });

    it('wraps past the last square and pays the GO bonus', () => {
      let state = stateWithPlayers(1);
      state = gameReducer(state, {
        type: 'UPDATE_PLAYER',
        payload: { id: 0, updates: { position: BOARD_SIZE - 1 } },
      });
      state = gameReducer(state, { type: 'MOVE_CURRENT_PLAYER_STEP' });
      expect(state.players[0].position).toBe(0);
      expect(state.players[0].money).toBe(2000 + PASS_GO_BONUS);
    });

    it('does nothing when there is no current player', () => {
      const state = gameReducer(initialGameData, { type: 'MOVE_CURRENT_PLAYER_STEP' });
      expect(state).toBe(initialGameData);
    });
  });

  describe('money and opt-outs', () => {
    it('ADJUST_MONEY applies positive and negative deltas', () => {
      let state = gameReducer(stateWithPlayers(2), {
        type: 'ADJUST_MONEY',
        payload: { playerId: 0, delta: -150 },
      });
      state = gameReducer(state, {
        type: 'ADJUST_MONEY',
        payload: { playerId: 1, delta: 150 },
      });
      expect(state.players[0].money).toBe(1850);
      expect(state.players[1].money).toBe(2150);
    });

    it('ADJUST_OPT_OUTS changes only the target player', () => {
      const state = gameReducer(stateWithPlayers(2), {
        type: 'ADJUST_OPT_OUTS',
        payload: { playerId: 1, delta: -1 },
      });
      expect(state.players[1].optOuts).toBe(2);
      expect(state.players[0].optOuts).toBe(3);
    });
  });

  describe('clothing and spice', () => {
    it('REMOVE_CLOTHING moves dress towards naked and caps at the max', () => {
      let state = stateWithPlayers(1);
      state = gameReducer(state, {
        type: 'UPDATE_PLAYER',
        payload: { id: 0, updates: { dress: DressLevel.Underwear } },
      });
      state = gameReducer(state, { type: 'REMOVE_CLOTHING', payload: { playerId: 0 } });
      expect(state.players[0].dress).toBe(MAX_DRESS_LEVEL);
      state = gameReducer(state, { type: 'REMOVE_CLOTHING', payload: { playerId: 0 } });
      expect(state.players[0].dress).toBe(MAX_DRESS_LEVEL);
    });

    it('INCREASE_SPICE caps at the max spice level', () => {
      let state = stateWithPlayers(2, { spiceLevel: MAX_SPICE_LEVEL - 1 });
      state = gameReducer(state, { type: 'INCREASE_SPICE' });
      expect(state.spiceLevel).toBe(MAX_SPICE_LEVEL);
      state = gameReducer(state, { type: 'INCREASE_SPICE' });
      expect(state.spiceLevel).toBe(MAX_SPICE_LEVEL);
    });
  });

  describe('END_TURN', () => {
    it('advances to the next player and counts the move', () => {
      const state = gameReducer(stateWithPlayers(3), { type: 'END_TURN' });
      expect(state.currentPlayer).toBe(1);
      expect(state.totalMoves).toBe(1);
    });

    it('wraps back to the first player after the last', () => {
      const state = gameReducer(stateWithPlayers(3, { currentPlayer: 2 }), {
        type: 'END_TURN',
      });
      expect(state.currentPlayer).toBe(0);
    });
  });
});
