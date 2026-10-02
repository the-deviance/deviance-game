import React, {useState} from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import Board from "../components/Board";
import Flame from "../components/Flame";
import useGameData from "../utils/useGameData";
import useNewGame from "../utils/useNewGame";
import {hasGameInProgress} from "../types/game";

export default function MainScreen() {
    const [confirmNewGame, setConfirmNewGame] = useState(false);
    const {gameData, increaseSpiceLevel} = useGameData();
    const newGame = useNewGame();

    const handleNewGameClick = () => {
        if (hasGameInProgress(gameData)) {
            setConfirmNewGame(true);
        } else {
            newGame();
        }
    };

    const handleConfirmNewGame = () => {
        setConfirmNewGame(false);
        newGame();
    };

    const spiceLevel = gameData?.spiceLevel ?? 0;
    const spiceArray = Array(spiceLevel + 1).fill(1);

    return (
        <div className="game-screen">
            <div className="main-header">
                <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span style={{color: "#aaa"}}>Current Spice Level:</span>
                        <button style={{
                            color: "#6363c8",
                            fontSize: '12px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            textAlign: 'left',
                            marginLeft: '-5px'
                        }} onClick={increaseSpiceLevel}>Increase Spice Level
                        </button>
                    </div>
                    <div style={{display: "flex", gap: "5px", marginTop: '-15px'}}>
                        {spiceArray.map((_, index) => (
                            <Flame key={index}/>
                        ))}
                    </div>
                </div>

                <h1 className="main-title">Deviance</h1>

                <Button color="secondary" size="sm" onClick={handleNewGameClick}>
                    Start New Game
                </Button>
            </div>
            <Modal isOpen={confirmNewGame} toggle={() => setConfirmNewGame(false)}>
                <ModalHeader toggle={() => setConfirmNewGame(false)}>
                    Start a new game?
                </ModalHeader>
                <ModalBody>
                    There's a game in progress. Starting a new one wipes the
                    players, money, properties and card history. No take-backs.
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => setConfirmNewGame(false)}>
                        Keep Playing
                    </Button>
                    <Button color="danger" onClick={handleConfirmNewGame}>
                        New Game
                    </Button>
                </ModalFooter>
            </Modal>
            <Board/>
        </div>
    );
}
