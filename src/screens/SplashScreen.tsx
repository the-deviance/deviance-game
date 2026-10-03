import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import useGameData from "../utils/useGameData";
import useNewGame from "../utils/useNewGame";
import { hasGameInProgress } from "../types/game";
import { track } from "../utils/analytics";

export default function SplashScreen() {
  const { gameData } = useGameData();
  const newGame = useNewGame();
  const navigate = useNavigate();
  const canResume = hasGameInProgress(gameData);

  const startFresh = () => {
    newGame();
    navigate("/game");
  };

  return (
    <div className="splash-screen">
      <div className="splash-overlay">
        <h1 className="splash-title dv-title">Deviance</h1>
        <div className="splash-strap">
          Welcome to Deviance, the Adult Only board game!
        </div>
        <div className="splash-disclaimer">
          <p>
            This website is for adults only. Whilst the game contains no
            pornographic images, it does contain material of an adult nature.
            Some of the actions describe explicit sexual acts. If you are
            offended by such acts, behaviours or descriptions, please do not
            view this site.
          </p>
          <p>
            By playing Deviance, you certify that you are an adult, age 18 or
            over, and that you consent to see materials of a sexual nature.
          </p>
        </div>
        <div className="splash-actions">
          <Button
            onClick={() => {
              track("Under 18");
              window.location.href = "https://theuselessweb.com/";
            }}
          >
            No, i'm under 18
          </Button>

          {canResume ? (
            <>
              <Button
                color="primary"
                onClick={() => {
                  track("Resume Game");
                  navigate("/game");
                }}
              >
                Yes, resume our game
              </Button>
              <Button color="danger" onClick={startFresh}>
                Yes, start a new game
              </Button>
            </>
          ) : (
            <Button color="primary" onClick={startFresh}>
              Yes, I'm over 18
            </Button>
          )}
        </div>
        {canResume && (
          <div className="splash-resume-note">
            You have a game in progress with{" "}
            {gameData.players
              .filter((p) => p.name)
              .map((p) => p.name)
              .join(", ")}
            .
          </div>
        )}
      </div>
    </div>
  );
}
