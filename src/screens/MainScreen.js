import React, {useState, useEffect, useCallback} from "react";
import {Button} from "reactstrap";
import Board from "../components/Board";
import Flame from "../components/Flame";
import useGameData from "../utils/useGameData";

const MIN_SCREEN_WIDTH = 1000;

export default function MainScreen() {
    const [isScreenLargeEnough, setIsScreenLargeEnough] = useState(true);
    const {gameData, startNewGame, increaseSpiceLevel} = useGameData();

    const checkScreenSize = useCallback(() => {
        setIsScreenLargeEnough(window.innerWidth >= MIN_SCREEN_WIDTH);
    }, []);

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, [checkScreenSize]);

    const spiceLevel = gameData?.spiceLevel ?? 0;
    const spiceArray = Array(spiceLevel + 1).fill(1);

    if (!isScreenLargeEnough) {
        return (
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#282c34",
                    color: "white",
                }}
            >
                <div>So it seems...</div>
                <h1>Size Does Matter!</h1>
                <p>
                    This site is only designed to work on tablets (in landscape) or larger screens.
                </p>
            </div>
        );
    }

    return (
        <div
            style={{
                backgroundColor: "#282c34",
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "900px",
                    marginBottom: "20px",
                }}
            >
                <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span style={{color: "#aaa"}}>Current Spice Level:</span>
                        <button style={{
                            color: "#6363c8",
                            fontSize: '12px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            textAlign: 'left',
                            marginLeft:'-5px'
                        }} onClick={increaseSpiceLevel}>Increase Spice Level
                        </button>
                    </div>
                    <div style={{display: "flex", gap: "5px", marginTop: '-15px'}}>
                        {spiceArray.map((_, index) => (
                            <Flame key={index}/>
                        ))}
                    </div>
                </div>

                <h1 style={{color: "#aaa", margin: 0}}>Deviance</h1>

                <Button color="secondary" onClick={startNewGame}>
                    Start New Game
                </Button>
            </div>
            <Board/>
        </div>
    );
}