import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import PlayerDataContext from "./PlayerDataContext";

const numberOfTurns = 16;

export default function useGameData() {
  const [gameData, setGameData] = useContext(PlayerDataContext);
  const [turnCounter, setTurnCounter] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("gameData"));
    if (data) setGameData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveGameData = (gameData) => {
    localStorage.setItem("gameData", JSON.stringify(gameData));
    setGameData(gameData);
  };

  const startNewGame = () => {
    localStorage.clear();
    setGameData({
      players: [
        {
          id: 0,
          money: 2000,
          optOuts: 3,
          pronouns: { he: "he", him: "him", his: "his" },
        },
      ],
      toys: {},
      spiceLevel: 0,
      currentPlayer: 0,
      started: false,
    });
    setTimeout(() => {
      setGameData({
        players: [
          {
            id: 0,
            money: 2000,
            optOuts: 3,
            pronouns: { he: "he", him: "him", his: "his" },
          },
        ],
        toys: {},
        spiceLevel: 0,
        currentPlayer: 0,
        started: true,
      });
    }, 1000);

    // startGame();
  };

  // const startGame = () => {
  //   if (!gameData.players.length) return;
  //   saveGameData({
  //     players: [
  //       //     {
  //       //       id: 0,
  //       //       name: "Rob",
  //       //       position: 0,
  //       //       money: 2000,
  //       //       dress: 0,
  //       //       optOuts: 3,
  //       //       gender: 0,
  //       //       pronouns: { he: "he", him: "him", his: "his" },
  //       //       sexuality: 0, // striaght
  //       //     },
  //       //     {
  //       //       id: 1,
  //       //       name: "Aimee",
  //       //       position: 0,
  //       //       money: 2000,
  //       //       dress: 1,
  //       //       optOuts: 3,
  //       //       gender: 1,
  //       //       pronouns: { he: "she", him: "her", his: "her" },
  //       //       sexuality: 2, // bi
  //       //     },
  //       //     {
  //       //       id: 2,
  //       //       name: "Girl 1",
  //       //       position: 0,
  //       //       money: 2000,
  //       //       dress: 2,
  //       //       optOuts: 3,
  //       //       gender: 1,
  //       //       pronouns: { he: "she", him: "her", his: "her" },
  //       //       sexuality: 1, // gay
  //       //     },
  //       //     {
  //       //       id: 3,
  //       //       name: "Boy 1",
  //       //       position: 0,
  //       //       money: 2000,
  //       //       dress: 3,
  //       //       optOuts: 3,
  //       //       gender: 0,
  //       //       pronouns: { he: "he", him: "him", his: "his" },
  //       //       sexuality: 3, // bi-curious
  //       //     },
  //     ],
  //     currentPlayer: 0,
  //     spiceLevel: 0,
  //     toys: {},
  //   });
  // };

  const addPlayer = () => {
    const index = gameData.players.length;
    saveGameData({
      ...gameData,
      players: [
        ...gameData.players,
        {
          money: 2000,
          optOuts: 3,
          id: index,
          pronouns: { he: "he", him: "him", his: "his" },
        },
      ],
    });
  };

  const removePlayer = () => {
    gameData.players.pop();
    saveGameData({ ...gameData, players: [...gameData.players] });
  };

  const updatePlayers = (players) => {
    saveGameData({ ...gameData, players });
  };

  const updateToyList = (toys) => {
    console.log("Updating toys: ", gameData);
    saveGameData({ ...gameData, toys });
  };

  const movePlayer = (steps) => {
    return new Promise((resolve) => {
      const player = gameData.players[gameData.currentPlayer];
      player.newPosition = player.position + steps;
      if (player.newPosition > 15) {
        player.newPosition = player.newPosition - 16;
      }
      return updatePlayerPostion(player, () => {
        console.log("done");
        resolve();
      });
    });
  };

  const updatePlayerPostion = (player, cb) => {
    if (player.position !== player.newPosition) {
      player.position += 1;
      if (player.position > 15) {
        depositMoney({ playerId: player.id, amount: 200 });
        player.position = 0;
      }
      const players = [...gameData.players];
      players[gameData.currentPlayer] = player;
      saveGameData({ ...gameData, players });
      setTimeout(() => {
        updatePlayerPostion(player, cb);
      }, 300);
    } else {
      cb();
    }
  };

  const deductMoney = ({ playerId, amount }) => {
    const playerObj = gameData.players[playerId];
    playerObj.money -= amount;
    const players = gameData.players;
    players[playerId] = playerObj;
    saveGameData({ ...gameData, players });
  };

  const depositMoney = ({ playerId, amount }) => {
    const playerObj = gameData.players[playerId];
    playerObj.money += amount;
    const players = gameData.players;
    players[playerId] = playerObj;
    saveGameData({ ...gameData, players });
  };

  const adjustMoneyForPlayer = ({ player, delta }) => {
    player.money = player.money + delta;
    const players = gameData.players;
    players[player.id] = player;
    saveGameData({ ...gameData, players });
  };

  const adjustOptOutFromPlayer = (player, delta) => {
    player.optOuts = player.optOuts + delta;
    const players = gameData.players;
    players[player.id] = player;
    saveGameData({ ...gameData, players });
  };

  const removeItemOfClothingForPlayer = (playerId) => {
    const player = gameData.players[playerId];
    player.dress += 1;
    const players = gameData.players;
    players[player.id] = player;
    saveGameData({ ...gameData, players });
  };

  const endTurn = () => {
    // Increment turn counter
    setTurnCounter(turnCounter + 1);

    let shouldIncreaseLevel = turnCounter % numberOfTurns === 0;

    if (shouldIncreaseLevel) {
      if (gameData.spiceLevel === 4) {
        shouldIncreaseLevel = false;
      } else {
        toast.dark("Spice Level Increased", {
          autoClose: 3000,
        });
      }
    }

    // Increment the currentPlayer
    saveGameData({
      ...gameData,
      spiceLevel: shouldIncreaseLevel
        ? gameData.spiceLevel + 1
        : gameData.spiceLevel,
      currentPlayer:
        gameData.currentPlayer === gameData.players.length - 1
          ? 0
          : gameData.currentPlayer + 1,
    });
  };

  return {
    gameData,
    startNewGame,
    addPlayer,
    removePlayer,
    updatePlayers,
    updateToyList,
    // startGame,
    movePlayer,
    deductMoney,
    depositMoney,
    adjustOptOutFromPlayer,
    adjustMoneyForPlayer,
    removeItemOfClothingForPlayer,
    endTurn,
  };
}
