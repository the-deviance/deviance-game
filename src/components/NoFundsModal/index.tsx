import React, { useMemo } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import { pickFlavour } from "../../data/flavourText";
import { OwnedProperty } from "../../types/game";

interface NoFundsModalProps {
  property?: OwnedProperty | false;
  next: () => void;
}

export default function NoFundsModal({ property, next }: NoFundsModalProps) {
  const flavour = useMemo(
    () => ({
      header: pickFlavour("broke_header"),
      line: pickFlavour("broke", { price: (property && property.price) || 0 }),
    }),
    [property]
  );

  return (
    <Modal isOpen={Boolean(property)}>
      <ModalHeader>{flavour.header}</ModalHeader>
      <ModalBody>
        <div>{flavour.line}</div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            next();
          }}
        >
          Ok
        </Button>
      </ModalFooter>
    </Modal>
  );
}
