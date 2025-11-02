import {useContext, useEffect, useState, useCallback} from "react";
import {toast} from "react-toastify";
import PlayerDataContext from "./PlayerDataContext";

const numberOfTurns = 16;

const defaultGameData = {
    players: [],
    toys: {},
    spiceLevel: 0,
    currentPlayer: 0,
    started: false,
    totalMoves: 0
};

export default function useGameData() {
    const [gameData, setGameData] = useContext(PlayerDataContext);
    const [turnCounter, setTurnCounter] = useState(0);

    useEffect(() => {
        try {
            const data = localStorage.getItem("gameData");
            if (data) {
                const parsedData = JSON.parse(data);
                setGameData(parsedData);
            }
        } catch (error) {
            console.error("Failed to load game data:", error);
            toast.error("Failed to load saved game data");
        }
    }, [setGameData]);

    const saveGameData = useCallback((newGameData) => {
        try {
            localStorage.setItem("gameData", JSON.stringify(newGameData));
            setGameData(newGameData);
        } catch (error) {
            console.error("Failed to save game data:", error);
            toast.error("Failed to save game data");
        }
    }, [setGameData]);

    const increaseSpiceLevel = useCallback((freshData) => {
        if (freshData.spiceLevel > 2) {
            console.log('Max spice level reached')
            return
        }

        saveGameData({
            ...freshData,
            spiceLevel: freshData.spiceLevel + 1,
        });
    }, [gameData, saveGameData]);

    const startNewGame = useCallback(() => {
        try {
            localStorage.clear();
            const initialData = {
                ...defaultGameData,
                players: [
                    {
                        id: 0,
                        name: "",
                        money: 2000,
                        optOuts: 3,
                        pronouns: {he: "he", him: "him", his: "his"},
                        position: 0,
                        dress: 3,
                    },
                ],
            };

            saveGameData(initialData);

            setTimeout(() => {
                saveGameData({...initialData, started: true});
            }, 100);
        } catch (error) {
            console.error("Failed to start new game:", error);
            toast.error("Failed to start new game");
        }
    }, [saveGameData]);

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

    const addPlayer = useCallback(() => {
        const index = gameData.players.length;
        saveGameData({
            ...gameData,
            players: [
                ...gameData.players,
                {
                    money: 2000,
                    optOuts: 3,
                    id: index,
                    pronouns: {he: "he", him: "him", his: "his"},
                    position: 0,
                    dress: 3,
                },
            ],
        });
    }, [gameData, saveGameData]);

    const removePlayer = useCallback(() => {
        const players = [...gameData.players];
        players.pop();
        saveGameData({...gameData, players});
    }, [gameData, saveGameData]);

    const updatePlayers = useCallback((players) => {
        saveGameData({...gameData, players});
    }, [gameData, saveGameData]);

    const updateToyList = useCallback((toys) => {
        console.log("Updating toys: ", gameData);
        saveGameData({...gameData, toys});
    }, [gameData, saveGameData]);

    const movePlayer = useCallback((steps) => {
        return new Promise((resolve) => {
            const player = gameData.players[gameData.currentPlayer];
            console.log('movePlayer called with steps:', steps, 'current player:', player);
            if (!player) {
                console.log('No player found');
                resolve();
                return;
            }

            const currentPosition = player.position || 0;
            let newPosition = currentPosition + steps;
            console.log('Moving from position', currentPosition, 'to', newPosition);

            if (newPosition > 15) {
                newPosition = newPosition - 16;
                // Pass GO bonus
                player.money += 200;
                console.log('Passed GO, new position:', newPosition);
            }

            var i = 1;                  //  set your counter to 1

            function myLoop() {         //  create a loop function
                setTimeout(function () {   //  call a 3s setTimeout when the loop is called

                    let tempPosition = currentPosition + i;
                    if (tempPosition > 15) {
                        tempPosition = tempPosition - 16;
                    }

                    const updatedPlayer = {...player, position: tempPosition};
                    const players = [...gameData.players];
                    players[gameData.currentPlayer] = updatedPlayer;

                    console.log('Saving updated player:', updatedPlayer);
                    saveGameData({...gameData, players});

                    i++;                    //  increment the counter
                    if (i <= steps) {           //  if the counter < 10, call the loop function
                        myLoop();             //  ..  again which will trigger another
                    } else {
                        resolve();
                    }                 //  ..  setTimeout()
                }, 200)
            }

            myLoop();                   //  start the loop

        });
    }, [gameData, saveGameData]);

    const deductMoney = useCallback(({playerId, amount}) => {
        const playerObj = gameData.players[playerId];
        if (playerObj) {
            playerObj.money -= amount;
            const players = [...gameData.players];
            players[playerId] = playerObj;
            saveGameData({...gameData, players});
        }
    }, [gameData, saveGameData]);

    const depositMoney = useCallback(({playerId, amount}) => {
        const playerObj = gameData.players[playerId];
        if (playerObj) {
            playerObj.money += amount;
            const players = [...gameData.players];
            players[playerId] = playerObj;
            saveGameData({...gameData, players});
        }
    }, [gameData, saveGameData]);

    const adjustMoneyForPlayer = useCallback(({player, delta}) => {
        player.money = player.money + delta;
        const players = [...gameData.players];
        players[player.id] = player;
        saveGameData({...gameData, players});
    }, [gameData, saveGameData]);

    const adjustOptOutFromPlayer = useCallback((player, delta) => {
        player.optOuts = player.optOuts + delta;
        const players = [...gameData.players];
        players[player.id] = player;
        saveGameData({...gameData, players});
    }, [gameData, saveGameData]);

    const removeItemOfClothingForPlayer = useCallback((playerId) => {
        console.log('Removing clothing...')
        const player = gameData.players[playerId];
        if (player) {
            player.dress = (player.dress || 0) + 1;
            const players = [...gameData.players];
            players[player.id] = player;
            saveGameData({...gameData, players});
        }
    }, [gameData, saveGameData]);

    const endTurn = useCallback(() => {
        console.log('endTurn called');
        setTurnCounter(prev => {
            const newCounter = prev + 1;
            return newCounter;
        });

        // Get fresh gameData from localStorage to avoid stale state
        const freshData = JSON.parse(localStorage.getItem("gameData") || '{}');
        const nextPlayer = freshData.currentPlayer === freshData.players.length - 1
            ? 0
            : freshData.currentPlayer + 1;

        console.log('Switching from player', freshData.currentPlayer, 'to player', nextPlayer);

        saveGameData({
            ...freshData,
            currentPlayer: nextPlayer,
        });
    }, [saveGameData]);

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
