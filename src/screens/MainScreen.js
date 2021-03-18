import React, { useState, useEffect } from "react";
import Board from "../components/Board";
import { Button } from "reactstrap";
import useGameData from "../utils/useGameData";
import { Row, Col, Container } from "reactstrap";
import Flame from "../components/Flame";

export default function MainScreen() {
  const [tooSmall, setTooSmall] = useState();

  const { gameData, startNewGame } = useGameData();

  useEffect(() => {
    // startGame();
    checkScreenSize();
  }, []);

  React.useEffect(() => {
    function handleResize() {
      checkScreenSize();
    }
    window.addEventListener("resize", handleResize);
  });

  const checkScreenSize = () => {
    if (window.innerWidth < 1000) {
      return setTooSmall(false);
    }
    setTooSmall(true);
  };

  const spice = Array(gameData.spiceLevel + 1 || 1).fill(1);

  return tooSmall ? (
    <div
      style={{
        backgroundColor: "#282c34",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        style={{
          width: "900px",
        }}
      >
        <Row>
          <Col
            style={{
              height: "100px",
            }}
          >
            <Row>
              <Col xs="8" className="mt-5">
                <div>Current Spice Level:</div>
              </Col>
              <Col
                style={{
                  marginLeft: "-50px",
                  marginTop: "50px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {spice.map((i, index) => {
                  return <Flame key={index} />;
                })}
              </Col>
            </Row>
          </Col>
          <Col>
            <h1
              style={{
                paddingTop: "30px",
                paddingBottom: "20px",
                textAlign: "center",
                color: "#aaa",
              }}
            >
              Deviance
            </h1>
          </Col>
          <Col>
            <Button
              style={{ right: "0px", top: "40px", position: "absolute" }}
              color="secondary"
              onClick={startNewGame}
            >
              Start New Game
            </Button>
          </Col>
        </Row>

        <Row>
          <Board />
        </Row>
      </Container>
    </div>
  ) : (
    <div
      style={{
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "Column",
      }}
    >
      <div>So it seems...</div>
      <h1>Size Does Matter!</h1>
      <p>
        this site is only designed to work on tablets (in landscape) or larger
        screens.
      </p>
    </div>
  );
}
