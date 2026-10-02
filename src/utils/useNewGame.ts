import { useCallback } from 'react';
import useGameData from './useGameData';
import usePropertyData from './usePropertyData';
import { resetUsedCards } from '../data/cardManager';
import { track } from './analytics';

/**
 * The one true way to start a new game: resets all three stores (game state,
 * property board, used-card pile) in memory and in localStorage, then kicks
 * off the setup flow.
 */
export default function useNewGame() {
  const { startNewGame } = useGameData();
  const { resetProperties } = usePropertyData();

  return useCallback(() => {
    track('New Game');
    resetUsedCards();
    resetProperties();
    startNewGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startNewGame]);
}
