import { useCallback } from 'react';
import {
  useGame,
  BOARD_SIZE,
  PASS_GO_BONUS,
} from '../contexts/GameContext';
import { Player } from '../types/game';
import { track } from './analytics';

const MOVE_ANIMATION_MS = 200;

export default function useGameData() {
  const { gameData, dispatch } = useGame();

  // Resets game state only. The card pile and property board live in their
  // own stores; use useNewGame() for the full reset, not this directly.
  const startNewGame = useCallback(() => {
    dispatch({ type: 'NEW_GAME' });
    // 'started' flips true a beat later so the setup flow re-triggers even
    // when a previous game was already in progress.
    setTimeout(() => dispatch({ type: 'START_GAME' }), 100);
  }, [dispatch]);

  const addPlayer = useCallback(() => {
    dispatch({ type: 'ADD_PLAYER' });
  }, [dispatch]);

  const removePlayer = useCallback(() => {
    dispatch({ type: 'REMOVE_LAST_PLAYER' });
  }, [dispatch]);

  const updatePlayers = useCallback(
    (players: Player[]) => {
      dispatch({ type: 'UPDATE_PLAYERS', payload: players });
    },
    [dispatch]
  );

  const updateToyList = useCallback(
    (toys: Record<string, boolean>) => {
      dispatch({ type: 'SET_TOYS', payload: toys });
    },
    [dispatch]
  );

  const increaseSpiceLevel = useCallback(() => {
    track('Spice Increased');
    dispatch({ type: 'INCREASE_SPICE' });
  }, [dispatch]);

  /**
   * Animates the current player forward one square at a time, then resolves
   * with the player as they are after the move (position and any pass-GO
   * bonus applied), so callers never need to re-read storage for fresh state.
   */
  const movePlayer = useCallback(
    (steps: number): Promise<Player | null> => {
      const player = gameData.players[gameData.currentPlayer];
      if (!player) return Promise.resolve(null);

      const from = player.position || 0;
      const passesGo = from + steps >= BOARD_SIZE;
      const movedPlayer: Player = {
        ...player,
        position: (from + steps) % BOARD_SIZE,
        money: passesGo ? player.money + PASS_GO_BONUS : player.money,
      };

      return new Promise(resolve => {
        let step = 0;
        const tick = () => {
          setTimeout(() => {
            dispatch({ type: 'MOVE_CURRENT_PLAYER_STEP' });
            step += 1;
            if (step < steps) {
              tick();
            } else {
              resolve(movedPlayer);
            }
          }, MOVE_ANIMATION_MS);
        };
        tick();
      });
    },
    [gameData, dispatch]
  );

  const deductMoney = useCallback(
    ({ playerId, amount }: { playerId: number; amount: number }) => {
      dispatch({ type: 'ADJUST_MONEY', payload: { playerId, delta: -amount } });
    },
    [dispatch]
  );

  const depositMoney = useCallback(
    ({ playerId, amount }: { playerId: number; amount: number }) => {
      dispatch({ type: 'ADJUST_MONEY', payload: { playerId, delta: amount } });
    },
    [dispatch]
  );

  const adjustMoneyForPlayer = useCallback(
    ({ player, delta }: { player: Player; delta: number }) => {
      dispatch({ type: 'ADJUST_MONEY', payload: { playerId: player.id, delta } });
    },
    [dispatch]
  );

  const adjustOptOutFromPlayer = useCallback(
    (player: Player, delta: number) => {
      dispatch({ type: 'ADJUST_OPT_OUTS', payload: { playerId: player.id, delta } });
    },
    [dispatch]
  );

  const removeItemOfClothingForPlayer = useCallback(
    (playerId: number) => {
      dispatch({ type: 'REMOVE_CLOTHING', payload: { playerId } });
    },
    [dispatch]
  );

  const endTurn = useCallback(() => {
    dispatch({ type: 'END_TURN' });
  }, [dispatch]);

  return {
    gameData,
    increaseSpiceLevel,
    startNewGame,
    addPlayer,
    removePlayer,
    updatePlayers,
    updateToyList,
    movePlayer,
    deductMoney,
    depositMoney,
    adjustOptOutFromPlayer,
    adjustMoneyForPlayer,
    removeItemOfClothingForPlayer,
    endTurn,
  };
}
