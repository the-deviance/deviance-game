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
import { track } from "../../utils/analytics";

interface AddToysProps {
  modal: boolean;
  setSetupStep: (step: number) => void;
}

export default function AddToys({ modal, setSetupStep }: AddToysProps) {
  const { gameData, updateToyList } = useGameData();

  const [toyList, setToyList] = useState<Record<string, boolean>>(gameData.toys || {})

  if (!modal) return null;

  const updateToys = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    // Setup can't be dismissed mid-flow; Back/Start Game are the only exits.
    <Modal isOpen={modal} backdrop="static" keyboard={false}>
      <ModalHeader>Toys</ModalHeader>
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
        <Button color="secondary" onClick={() => setSetupStep(2)}>
          Back
        </Button>
        <Button
          color="primary"
          onClick={() => {
            updateToyList(toyList);
            track("Game Setup Complete", { players: gameData.players.length });
            setSetupStep(0);
          }}
        >
          Start Game!
        </Button>
      </ModalFooter>
    </Modal>
  );
}
