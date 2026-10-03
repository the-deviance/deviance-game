import React, { useMemo } from "react";
import useGameData from "../../utils/useGameData";
import { canPlayersInteract } from "../../data/cardManager";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import { pickFlavour } from "../../data/flavourText";
import { OwnedProperty } from "../../types/game";

interface ShowRentModalProps {
  property?: OwnedProperty | false;
  next: (workingItOff: boolean) => void;
}

export default function ShowRentModal({ property, next }: ShowRentModalProps) {
  const { gameData, deductMoney, depositMoney } = useGameData();
  const owner =
    property && property.owner !== undefined
      ? gameData.players[property.owner]
      : undefined;
  const player = gameData.players[gameData.currentPlayer];
  const line = useMemo(
    () =>
      pickFlavour("rent", {
        owner: owner?.name ?? "",
        rent: (property && property.rent) || 0,
      }),
    [property, owner]
  );

  return (
    <Modal isOpen={Boolean(property)}>
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
            if (property && property.owner !== undefined) {
              deductMoney({
                playerId: gameData.currentPlayer,
                amount: property.rent ?? 0,
              });
              depositMoney({
                playerId: property.owner,
                amount: property.rent ?? 0,
              });
            }
            next(false);
          }}
        >
          {`Pay £${(property && property.rent) || 0}`}
        </Button>
      </ModalFooter>
    </Modal>
  );
}
