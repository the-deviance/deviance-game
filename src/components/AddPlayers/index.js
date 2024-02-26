import React, { useState } from "react";
import PlayerForm from "../PlayerForm";
import useGameData from "../../utils/useGameData";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

export default function AddPlayers({
  modal,
  toggle: toggleModal,
  setSetupStep,
}) {
  const [openId, setOpenId] = useState("1");
  const toggle = (id) => {
    openId === id ? setOpenId(undefined) : setOpenId(id);
  };

  const { gameData, addPlayer, removePlayer, updatePlayers } = useGameData();

  if (!gameData.started) return null;

  return (
    <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Players</ModalHeader>
      <ModalBody>
        <Accordion open={openId} toggle={toggle}>
          {gameData.players?.map((player, index) => (
            <AccordionItem key={index}>
              <AccordionHeader targetId={(index + 1).toString()}>{`Player ${index + 1
                }`}</AccordionHeader>
              <AccordionBody accordionId={(index + 1).toString()}>
                <PlayerForm player={gameData.players[index]} />
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </ModalBody>
      <ModalFooter>
        {gameData.players?.length > 1 ? (
          <Button
            color="danger"
            onClick={() => {
              removePlayer();
              setOpenId((parseInt(openId, 10) - 1).toString());
            }}
          >
            Remove Player
          </Button>
        ) : null}
        <Button
          color="primary"
          disabled={gameData.players.length > 3}
          onClick={() => {
            addPlayer();
            setOpenId((parseInt(openId, 10) + 1).toString());
          }}
        >
          Add Another Player
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            console.log("About to update:", gameData.players);
            updatePlayers(gameData.players);
            setSetupStep(2);
          }}
        >
          Next Step
        </Button>
      </ModalFooter>
    </Modal>
  );
}
