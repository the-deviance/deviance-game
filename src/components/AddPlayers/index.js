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
    setOpenId(openId === id ? "" : id);
  };

  const { gameData, addPlayer, removePlayer, updatePlayers } = useGameData();

  if (!modal) return null;

  return (
    <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Players</ModalHeader>
      <ModalBody>
        <Accordion open={openId} toggle={toggle}>
          {gameData.players?.map((player, index) => {
            const itemId = (index + 1).toString();
            return (
              <AccordionItem key={index}>
                <AccordionHeader targetId={itemId}>
                  {`Player ${index + 1}${player.name ? ` - ${player.name}` : ''}`}
                </AccordionHeader>
                <AccordionBody accordionId={itemId}>
                  <PlayerForm player={gameData.players[index]} />
                </AccordionBody>
              </AccordionItem>
            );
          })}
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
            setOpenId((gameData.players.length + 1).toString());
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
