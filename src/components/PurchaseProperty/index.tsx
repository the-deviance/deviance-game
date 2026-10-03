import React, { useMemo } from "react";
import usePropertyData from "../../utils/usePropertyData";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import { pickFlavour } from "../../data/flavourText";
import { OwnedProperty } from "../../types/game";

interface PurchasePropertyProps {
  property?: OwnedProperty | false;
  next: () => void;
}

export default function PurchaseProperty({ property, next }: PurchasePropertyProps) {
  const { buyProperty } = usePropertyData();
  const line = useMemo(
    () => pickFlavour("purchase", { name: (property && property.name) || "" }),
    [property]
  );
  return (
    <Modal isOpen={Boolean(property)}>
      <ModalHeader>{`${property ? property.name : ""} is for sale`}</ModalHeader>
      <ModalBody>
        <div>{`Sale price: £${property ? property.price : ""}`}</div>
        <div>{line}</div>
      </ModalBody>
      <ModalFooter>
        <Button
          className="ml-3"
          style={{ position: "absolute", left: "0" }}
          color="secondary"
          onClick={() => {
            next();
          }}
        >
          No thanks
        </Button>
        <Button
          color="primary"
          onClick={() => {
            if (property) buyProperty(property);
            next();
          }}
        >
          Yes Please
        </Button>
      </ModalFooter>
    </Modal>
  );
}
