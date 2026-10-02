import React, { useMemo } from "react";
import usePropertyData from "../../utils/usePropertyData";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import { pickFlavour } from "../../data/flavourText";

export default function PurchaseProperty({ property, next }) {
  const { buyProperty } = usePropertyData();
  const line = useMemo(
    () => pickFlavour("purchase", { name: property?.name }),
    [property]
  );
  return (
    <Modal isOpen={property}>
      <ModalHeader>{`${property.name} is for sale`}</ModalHeader>
      <ModalBody>
        <div>{`Sale price: £${property?.price}`}</div>
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
            buyProperty(property);
            next();
          }}
        >
          Yes Please
        </Button>
      </ModalFooter>
    </Modal>
  );
}
