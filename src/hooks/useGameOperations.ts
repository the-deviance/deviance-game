import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useGame } from '../contexts/GameContext';
import { GameData, Player } from '../types/game';

export function useGameOperations() {
  const { gameData, dispatch } = useGame();

  const saveToLocalStorage = useCallback((data: GameData) => {
    try {
      localStorage.setItem('gameData', JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
      toast.error('Failed to save game data');
    }
  }, []);

  const loadFromLocalStorage = useCallback(() => {
    try {
      const data = localStorage.getItem('gameData');
      if (data) {
        const parsedData = JSON.parse(data);
        dispatch({ type: 'SET_GAME_DATA', payload: parsedData });
        return parsedData;
      }
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
      toast.error('Failed to load saved game');
    }
    return null;
  }, [dispatch]);

  const startNewGame = useCallback(() => {
    const newGameData: GameData = {
      players: [{
        id: 0,
        money: 2000,
        optOuts: 3,
        pronouns: { he: 'he', him: 'him', his: 'his' },
        position: 0,
        dress: 3,
      }],
      toys: {},
      spiceLevel: 0,
      currentPlayer: 0,
      started: false,
        totalMoves: 0,
    };

    dispatch({ type: 'SET_GAME_DATA', payload: newGameData });
    saveToLocalStorage(newGameData);
    
    setTimeout(() => {
      const startedGame = { ...newGameData, started: true };
      dispatch({ type: 'SET_GAME_DATA', payload: startedGame });
      saveToLocalStorage(startedGame);
    }, 1000);
  }, [dispatch, saveToLocalStorage]);

  const addPlayer = useCallback(() => {
    const newPlayer: Player = {
      id: gameData.players.length,
      money: 2000,
      optOuts: 3,
      pronouns: { he: 'he', him: 'him', his: 'his' },
      position: 0,
      dress: 3,
    };
    
    dispatch({ type: 'ADD_PLAYER', payload: newPlayer });
  }, [gameData.players.length, dispatch]);

  const updatePlayer = useCallback((id: number, updates: Partial<Player>) => {
    dispatch({ type: 'UPDATE_PLAYER', payload: { id, updates } });
  }, [dispatch]);

  const movePlayer = useCallback(async (steps: number) => {
    const player = gameData.players[gameData.currentPlayer];
    if (!player) return;

    let newPosition = (player.position || 0) + steps;
    if (newPosition > 15) {
      newPosition = newPosition - 16;
      // Pass GO bonus
      updatePlayer(player.id, { money: player.money + 200 });
    }

    updatePlayer(player.id, { position: newPosition });
  }, [gameData.players, gameData.currentPlayer, updatePlayer]);

  const endTurn = useCallback(() => {
    const nextPlayer = gameData.currentPlayer === gameData.players.length - 1 
      ? 0 
      : gameData.currentPlayer + 1;
    
    dispatch({ type: 'SET_CURRENT_PLAYER', payload: nextPlayer });
  }, [gameData.currentPlayer, gameData.players.length, dispatch]);

  return {
    gameData,
    startNewGame,
    addPlayer,
    updatePlayer,
    movePlayer,
    endTurn,
    loadFromLocalStorage,
    saveToLocalStorage,
  };
}