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

    // Spice scale is 1-5; one flame per level.
    const spiceLevel = gameData?.spiceLevel ?? 1;
    const spiceArray = Array(Math.max(spiceLevel, 1)).fill(1);

    return (
        <div className="game-screen">
            <div className="main-header">
                <div className="spice-control">
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span className="spice-label">Spice Level</span>
                        <button className="spice-button" onClick={increaseSpiceLevel}>
                            Increase Spice Level
                        </button>
                    </div>
                    <div className="spice-flames">
                        {spiceArray.map((_, index) => (
                            <Flame key={index}/>
                        ))}
                    </div>
                </div>

                <h1 className="main-title dv-title">Deviance</h1>
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
            <div className="board-footer">
                <button className="dv-new-game-btn" onClick={handleNewGameClick}>
                    Start New Game
                </button>
            </div>
        </div>
    );
}
