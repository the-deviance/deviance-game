import React from "react";
import usePropertyData from "../../utils/usePropertyData";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

export default function PurchaseProperty({ property, next }) {
  const { buyProperty } = usePropertyData();
  return (
    <Modal isOpen={property}>
      <ModalHeader>{`${property.name} is for sale`}</ModalHeader>
      <ModalBody>
        <div>{`Sale price: £${property?.price}`}</div>
        <div>Would you like to purchase this property?</div>
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
