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

interface AddPlayersProps {
  modal: boolean;
  setSetupStep: (step: number) => void;
}

export default function AddPlayers({
  modal,
  setSetupStep,
}: AddPlayersProps) {
  const [openId, setOpenId] = useState("1");
  // PlayerForm mutates player objects in place; this forces a re-render so
  // the accordion names and the Next Step gate track what's being typed.
  const [, setFormVersion] = useState(0);
  const onFormChanged = () => setFormVersion((v) => v + 1);
  const toggle = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  const { gameData, addPlayer, removePlayer, updatePlayers } = useGameData();

  if (!modal) return null;

  // Sanity gate: it takes two to tango, and everyone needs a name.
  const enoughPlayers = gameData.players.length >= 2;
  const allNamed = gameData.players.every((p) => p.name && p.name.trim());
  const readyForNextStep = enoughPlayers && allNamed;

  return (
    // Setup can't be dismissed mid-flow: no X, no backdrop click, no Esc.
    // The only exits are the step buttons, so a game can't start half-configured.
    <Modal isOpen={modal} backdrop="static" keyboard={false}>
      <ModalHeader>Players</ModalHeader>
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
                  <PlayerForm
                    player={gameData.players[index]}
                    onChanged={onFormChanged}
                  />
                </AccordionBody>
              </AccordionItem>
            );
          })}
        </Accordion>
      </ModalBody>
      <ModalFooter className="dv-setup-footer">
        {!readyForNextStep && (
          <div className="small text-warning dv-setup-footer-error">
            {enoughPlayers
              ? "Every player needs a name."
              : "You need at least two players."}
          </div>
        )}
        <div className="dv-setup-footer-buttons">
          {gameData.players?.length > 1 ? (
            <Button
              color="danger"
              onClick={() => {
                removePlayer();
                setOpenId((parseInt(openId, 10) - 1).toString());
              }}
            >
              Remove
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
            Add Player
          </Button>
          <Button
            color="secondary"
            disabled={!readyForNextStep}
            onClick={() => {
              console.log("About to update:", gameData.players);
              updatePlayers(gameData.players);
              setSetupStep(2);
            }}
          >
            Next Step
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
}
