import React, { useMemo } from "react";
import useGameData from "../../utils/useGameData";
import { canPlayersInteract } from "../../data/cardManager";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import { pickFlavour } from "../../data/flavourText";

export default function ShowRentModal({ property, next }) {
  const { gameData, deductMoney, depositMoney } = useGameData();
  const owner = gameData.players[property?.owner];
  const player = gameData.players[gameData.currentPlayer];
  const line = useMemo(
    () => pickFlavour("rent", { owner: owner?.name, rent: property?.rent }),
    [property, owner]
  );

  return (
    <Modal isOpen={property}>
      <ModalHeader>Pay Rent</ModalHeader>
      <ModalBody>{owner && <div>{line}</div>}</ModalBody>
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
