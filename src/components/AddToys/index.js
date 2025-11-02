import {useState} from "react";
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

  const [toyList, setToyList] = useState(gameData.toys || {})

  if (!modal) return null;

  const updateToys = (e) => {
      console.log(e.target.id)
    const data = {...toyList};
      if (e.target.id === "all") {
          toys.forEach((toy) => {
              data[toy.toLowerCase()] = e.target.checked;
          });
      } else {
          data[e.target.id] = e.target.checked;
      }
      console.log("Add Toys gamedata:", data);
      setToyList(data);
  };

  return (
    <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Toys</ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            <Col>
              <Label for="limits">Which toys are available?</Label>
                <FormGroup check key={100}>
                    <Input
                        id="all"
                        type="checkbox"
                        onChange={updateToys}
                    />
                    <Label check>
                        Select All
                    </Label>
                </FormGroup>
                <hr/>
              {toys.map((toy, index) => {
                  console.log(toy.toLowerCase())
                if (index % 2 === 0) return null;
                return (
                  <FormGroup check key={index}>
                    <Input
                      id={toy.toLowerCase()}
                      type="checkbox"
                      onChange={updateToys}
                      defaultChecked={toyList[toy.toLowerCase()]}
                    />
                        <Label for={toy.toLowerCase()} check>
                      {toy}
                    </Label>
                  </FormGroup>
                );
              })}
            </Col>
            <Col style={{marginTop: '60px'}}>

              <Label for="limits" className="mb-4"></Label>
              {toys.map((toy, index) => {
                if (index % 2 !== 0) return null;
                return (
                  <FormGroup check key={index}>
                    <Input
                      id={toy.toLowerCase()}
                      type="checkbox"
                      checked={toyList[toy.toLowerCase()]}
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
            updateToyList(toyList);
            setSetupStep(0);
          }}
        >
          Start Game!
        </Button>
      </ModalFooter>
    </Modal>
  );
}
