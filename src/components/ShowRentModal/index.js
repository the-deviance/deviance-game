import React from "react";
import useGameData from "../../utils/useGameData";
import { canPlayersInteract } from "../../data/cardManager";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

export default function ShowRentModal({ property, next }) {
  const { gameData, deductMoney, depositMoney } = useGameData();
  const owner = gameData.players[property?.owner];
  const player = gameData.players[gameData.currentPlayer];

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
          disabled={!canPlayersInteract({ owner, player}) }
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
