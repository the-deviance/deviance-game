import React, { useEffect } from "react";
import useGameData from "../../utils/useGameData";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Form,
  Row,
  Col,
  Label,
  FormGroup,
  Input,
} from "reactstrap";
import toys from "../../data/toys.json";

export default function AddToys({ modal, toggle: toggleModal, setSetupStep }) {
  const { gameData, updateToyList } = useGameData();

  if (!gameData.started) return null;

  const updateToys = (e) => {
    gameData.toys[e.target.id] = e.target.checked;
  };

  console.log("Add Toys gamedata:", gameData);

  return (
    <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Toys</ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            <Col>
              <Label for="limits">Which toys are available?</Label>
              {toys.map((toy, index) => {
                if (index % 2 === 0) return null;
                return (
                  <FormGroup check key={index}>
                    <Input
                      id={toy.toLowerCase()}
                      type="checkbox"
                      onChange={updateToys}
                    />
                    <Label for={toy.toLowerCase()} check>
                      {toy}
                    </Label>
                  </FormGroup>
                );
              })}
            </Col>
            <Col>
              <Label for="limits" className="mb-4"></Label>
              {toys.map((toy, index) => {
                if (index % 2 !== 0) return null;
                return (
                  <FormGroup check key={index}>
                    <Input
                      id={toy.toLowerCase()}
                      type="checkbox"
                      onChange={updateToys}
                    />
                    <Label for={toy.toLowerCase()} check>
                      {toy}
                    </Label>
                  </FormGroup>
                );
              })}
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        {/* <Button
          color="primary"
          disabled={gameData.players.length > 3}
          onClick={() => {
            addPlayer();
            setOpenId((parseInt(openId, 10) + 1).toString());
          }}
        >
          Add Another Player
        </Button> */}
        <Button
          color="secondary"
          onClick={() => {
            updateToyList(gameData.toys);
            setSetupStep(0);
          }}
        >
          Next Step
        </Button>
      </ModalFooter>
    </Modal>
  );
}
