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
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1605910470315-abac78c52d73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1857&q=80')",
        backgroundColor: "#282c34",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          backgroundColor: "RGBA(40, 44, 52, 0.6)",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            padding: "30px",
            textAlign: "center",
            color: "#aaa",
          }}
        >
          Deviance
        </h1>
        <div style={{ textAlign: "center", padding: "0 16px" }}>
          Welcome to Deviance, the Adult Only board game!
        </div>
        <div className="p-4" style={{ maxWidth: "640px" }}>
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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button
            className="m-3"
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
                className="m-3"
                onClick={() => {
                  track("Resume Game");
                  navigate("/game");
                }}
              >
                Yes, resume our game
              </Button>
              <Button color="danger" className="m-3" onClick={startFresh}>
                Yes, start a new game
              </Button>
            </>
          ) : (
            <Button color="primary" className="m-3" onClick={startFresh}>
              Yes, I'm over 18
            </Button>
          )}
        </div>
        {canResume && (
          <div style={{ color: "#aaa", fontSize: "14px" }}>
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
