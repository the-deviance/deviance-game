import React, { useMemo } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import { pickFlavour } from "../../data/flavourText";

export default function NoFundsModal({ property, next }) {
  const flavour = useMemo(
    () => ({
      header: pickFlavour("broke_header"),
      line: pickFlavour("broke", { price: property?.price }),
    }),
    [property]
  );

  return (
    <Modal isOpen={property}>
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
