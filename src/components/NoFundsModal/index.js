import React from "react";
import usePropertyData from "../../utils/usePropertyData";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

export default function NoFundsModal({ property, next }) {
  return (
    <Modal isOpen={property}>
      <ModalHeader>Can't Afford Property</ModalHeader>
      <ModalBody>
        <div>Sorry, you can't afford this property at this time</div>
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
