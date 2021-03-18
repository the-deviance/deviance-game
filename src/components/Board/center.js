import React, { useEffect, useState } from "react";
import useGameData from "../../utils/useGameData";
import usePropertyData from "../../utils/usePropertyData";
import { Row, Col } from "reactstrap";
import CuteDice from "react-cute-dice";
import PurchaseProperty from "../../components/PurchaseProperty";
import NoFundsModal from "../../components/NoFundsModal";
import ShowRentModal from "../../components/ShowRentModal";
import ActionModal from "../../components/ActionModal";
import SpecialModal from "../../components/SpecialModal";
import AddPlayers from "../../components/AddPlayers";
import AddToys from "../../components/AddToys";
import { colours } from "../../data/constants";
import Chick from "../../components/Chick";

export default function Card({ id }) {
  const { gameData, movePlayer, endTurn } = useGameData();
  const { propertyData } = usePropertyData();

  const [setupStep, setSetupStep] = useState(false);
  const [value, setValue] = useState(0);
  const [rolling, setRolling] = useState(false);
  const [purchaseModal, setPurchaseModal] = useState(false);
  const [noFundsModal, setNoFundsModal] = useState(false);
  const [showRentModal, setShowRentModal] = useState(false);
  const [actionModal, setActionModal] = useState(false);
  const [specialModal, setSpecialModal] = useState(false);

  const dress = ["Naked", "Underwear", "Topless", "Fully Clothed"];

  useEffect(() => {
    setSetupStep(1);
  }, [gameData.started]);

  const handleOnChange = (value, rolling) => {
    setValue(value);
    setRolling(rolling);
  };

  useEffect(() => {
    if (gameData.currentPlayer !== undefined && !rolling && value) {
      movePlayer(value).then(() => {
        const player = gameData.players[gameData.currentPlayer];
        const property = propertyData[player.position];

        // Is the Property Owned?
        if (property.owner === undefined) {
          // Does it have a price?
          if (!property.price) {
            // No price so must be a special card
            if (property.name === "Go") return endPlayerTurn();
            setSpecialModal(property);
          } else {
            // Not owned - Can player afford it?
            if (player.money >= property.price) {
              // Show purchase modal
              setPurchaseModal(property);
            } else {
              // Show no funds modal
              setNoFundsModal(property);
            }
          }
        } else {
          // Property is owned
          // Is it owned by the player?
          if (property.owner === gameData.currentPlayer) {
            // Property is owned by the player, nothing else to do
            endPlayerTurn();
          } else {
            // Property is owned by someone else
            checkRent(property);
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rolling]);

  const checkRent = (property) => {
    // Make sure other modals are closed
    setPurchaseModal(false);
    setNoFundsModal(false);

    // Charge Rent
    setShowRentModal(property);
  };

  const showAction = (workingItOff) => {
    const player = gameData.players[gameData.currentPlayer];
    const property = propertyData[player.position];
    setShowRentModal(false);
    if (workingItOff) {
      setActionModal(property);
    } else {
      endPlayerTurn();
    }
  };

  const endPlayerTurn = () => {
    console.log("Ending turn");
    setPurchaseModal(false);
    setNoFundsModal(false);
    setShowRentModal(false);
    setActionModal(false);
    setSpecialModal(false);
    endTurn();
  };

  return (
    <div
      className="m-1"
      style={{
        backgroundColor: "#000",
        height: "290px",
        width: "590px",
        color: "#fff",
      }}
    >
      <AddPlayers
        modal={setupStep === 1}
        toggle={() => {
          setSetupStep(0);
        }}
        setSetupStep={setSetupStep}
      ></AddPlayers>
      <AddToys
        modal={setupStep === 2}
        toggle={() => {
          setSetupStep(0);
        }}
        setSetupStep={setSetupStep}
      ></AddToys>
      <PurchaseProperty property={purchaseModal} next={endPlayerTurn} />
      <NoFundsModal property={noFundsModal} next={endPlayerTurn} />
      <ShowRentModal property={showRentModal} next={showAction} />
      <ActionModal property={actionModal} next={endPlayerTurn} />
      <SpecialModal property={specialModal} next={endPlayerTurn} />
      {gameData.players.length ? (
        <div className="p-5 ml-3">
          <Row>
            <Col className="p-0">
              <h5>Player:</h5>
            </Col>
            <Col className="p-0">
              <h5>Bank:</h5>
            </Col>
            <Col className="p-0">
              <h5>Clothes:</h5>
            </Col>
            <Col className="p-0">
              <h5>Opt Outs Remaining:</h5>
            </Col>
          </Row>
          {gameData.players.map((player, index) => {
            const optOuts = Array(player.optOuts || 1).fill(1);
            return (
              <Row className="mt-1">
                <Col className="p-0">
                  <div
                    key={index}
                    style={{
                      backgroundColor: colours[index],
                      height: "16px",
                      width: "16px",
                      borderRadius: "8px",
                      left: "-30px",

                      position: "absolute",
                    }}
                  ></div>
                  <div>{player.name}</div>
                </Col>
                <Col className="p-0">
                  <div>£{player.money}</div>
                </Col>
                <Col className="p-0">
                  <div>{dress[player.dress]}</div>
                </Col>
                <Col
                  style={{
                    marginLeft: "0px",
                    marginTop: "0px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {optOuts.map(() => (
                    <Chick />
                  ))}
                </Col>
              </Row>
            );
          })}
          <Row
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {gameData.players.length ? (
              <>
                {gameData.players[gameData.currentPlayer] && (
                  <div
                    className="m-3 ml-5"
                    style={{
                      position: "absolute",
                      left: "0",
                      bottom: "20px",
                    }}
                  >
                    <h2>{`${
                      gameData.players[gameData.currentPlayer].name
                    }'s Turn`}</h2>
                  </div>
                )}

                <div
                  className="m-3"
                  style={{
                    position: "absolute",
                    right: "0",
                    bottom: "10px",
                  }}
                >
                  <CuteDice
                    onChange={handleOnChange}
                    colors={{
                      1: "#fff",
                      2: "#fff",
                      3: "#fff",
                      4: "#fff",
                      5: "#fff",
                      6: "#fff",
                    }}
                  />
                </div>
                <p
                  className="m-3 mr-3"
                  style={{
                    position: "absolute",
                    right: "0px",
                    bottom: "0",
                  }}
                >
                  Click the Die to roll it.
                </p>
              </>
            ) : null}
          </Row>
        </div>
      ) : null}
    </div>
  );
}
