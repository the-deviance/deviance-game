import React from "react";
import useGameData from "../../utils/useGameData";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

export default function ShowRentModal({ property, next }) {
  const { gameData, deductMoney, depositMoney } = useGameData();
  const owner = gameData.players[property?.owner];
  const player = gameData.players[gameData.currentPlayer];

  const canPlayersInteract = () => {
    if (!owner || !player) return false;
    if (player.gender === 0) {
      // Player is male
      if (owner.gender === 0) {
        // Owner is male - both must be gay, bi, or curious
        if (player.sexuality > 0 && owner.sexuality > 0) return true;
      } else if (owner.gender === 1) {
        // Owner is female - both must be not gay
        if (player.sexuality !== 1 && owner.sexuality !== 1) return true;
      } else if (owner.gender === 2) {
        // Owner is neutral - THIS MAKES NO SENSE!!!
      }
    } else if (player.gender === 1) {
      // Player is femail
      if (owner.gender === 1) {
        // Owner is male - both must be gay, bi, or curious
        if (player.sexuality > 0 && owner.sexuality > 0) return true;
      } else if (owner.gender === 0) {
        // Owner is male - both must be not gay
        if (player.sexuality !== 1 && owner.sexuality !== 1) return true;
      }
    }
    return false;
  };

  return (
    <Modal isOpen={property}>
      <ModalHeader>Pay Rent</ModalHeader>
      <ModalBody>
        {owner && (
          <div>{`This property is owned by ${owner?.name}. The rent is £${property?.rent}`}</div>
        )}
      </ModalBody>
      <ModalFooter>
        <Button
          disabled={!canPlayersInteract()}
          color="primary"
          onClick={() => {
            next(true);
          }}
        >
          Work it off
        </Button>
        <Button
          color="primary"
          onClick={() => {
            deductMoney({
              playerId: gameData.currentPlayer,
              amount: property?.rent,
            });
            depositMoney({ playerId: property?.owner, amount: property?.rent });
            next(false);
          }}
        >
          {`Pay £${property?.rent}`}
        </Button>
      </ModalFooter>
    </Modal>
  );
}
