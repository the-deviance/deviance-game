import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

interface Player {
  position?: number;
  gender?:  number;
  sexuality?:  number;
  dress?:  number;
  name?: string;
  prefs?: {
    dominant?: boolean;
    submissive?: boolean;
    humiliation_giving?: boolean;
    humiliation_receiving?: boolean;
    anal_giving?: boolean;
    anal_receiving?: boolean;
    blindfolded?: boolean;
    resisting?: boolean;
  };
  pronouns?: {
    he: string;
    him: string;
    his: string;
  };
  [key: string]: any;
}

interface PlayerFormProps {
  player: Player;
}

export default function PlayerForm({ player }: PlayerFormProps) {
  const [dress, setDress] = useState(3);

  useEffect(() => {
    // Setup defaults
    player.position = 0;
    player.gender = 0;
    player.sexuality = 0;
    player.dress = 0;
    player.prefs = {
      dominant: false,
      submissive: false,
      humiliation_giving: false,
      humiliation_receiving: false,
      anal_giving: false,
      anal_receiving: false,
      blindfolded: false,
      resisting: false,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDressLabel = (value: number): string => {
    switch (value) {
      case 0: return "Naked";
      case 1: return "Underwear only";
      case 2: return "Topless";
      case 3: return "Fully Clothed";
      default: return "";
    }
  };

  const updatePlayer = (e: React.ChangeEvent<HTMLInputElement> | number) => {
    if (typeof e === 'number') {
      player.dress = e;
      console.log(`Setting dress level to ${e}`)
      setDress(3-e);
      return;
    }
    if (!e.target) return;

    let value: any = e.target.value;
      if (e.target.name === "gender" || e.target.name === "sexuality") {
          switch (value) {
              case "0":
                  value = 0;
                  break;
              case "1":
                  value = 1;
                  break;
              case "2":
                  value = 2;
                  break;
              default:
                  return;
          }
      }
      if (e.target.name === "pronouns") {
      switch (e.target.value) {
        case "1":
          return (player.pronouns = { he: "he", him: "him", his: "his" });
        case "2":
          return (player.pronouns = { he: "she", him: "her", his: "her" });
        case "3":
          return (player.pronouns = { he: "they", him: "them", his: "their" });
        default:
          return;
      }
    }
    if (e.target.type === "checkbox") {
      if (!player.prefs) player.prefs = {};
      player.prefs[e.target.id as keyof typeof player.prefs] = e.target.checked
    }
    player[e.target.name] = value;
    console.log(`Updated player: ${e.target.name} with ${value}`);
    console.log(player)
  };

  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Joe Blogs"
          onChange={updatePlayer}
        />
      </FormGroup>
      <FormGroup>
        <Label for="gender">Gender</Label>
        <Input
          type="select"
          name="gender"
          id="gender"
          className="form-control"
          onChange={updatePlayer}
        >
          <option value={0}>Male</option>
          <option value={1}>Female</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="sexuality">Sexuality</Label>
        <Input
          type="select"
          name="sexuality"
          id="sexuality"
          className="form-control"
          onChange={updatePlayer}
        >
          <option value={0}>Straight</option>
            <option value={1}>Bi-Curious</option>
            <option value={2}>Bi</option>
          <option value={3}>Gay</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="pronouns">Pronouns</Label>
        <Input
          type="select"
          name="pronouns"
          id="pronouns"
          className="form-control"
          onChange={updatePlayer}
        >
          <option value="1">He, Him, His</option>
          <option value="2">She, Her, Hers</option>
          <option value="3">They, Them, Theirs</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="dress">Dress Level: {getDressLabel(dress)}</Label>
        <Input
          type="range"
          name="dress"
          id="dress"
          min={0}
          max={3}
          value={dress}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            setDress(value);
            updatePlayer(3-value); // Invert the numbers (3 = naked, 0 = fully dressed)
          }}
        />
        <div className="d-flex justify-content-between small text-muted">
          <span>Naked</span>
          <span>Underwear</span>
          <span>Topless</span>
          <span>Fully Clothed</span>
        </div>
      </FormGroup>
      <Row>
        <Col>
          <Label for="limits">D/S</Label>
          <FormGroup check>
            <Input id="dominant" type="checkbox" onChange={updatePlayer} />
            <Label for="dominant" check>
              Dominant
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input id="submissive" type="checkbox" onChange={updatePlayer} />
            <Label for="submissive" check>
              Submissive
            </Label>
          </FormGroup>
        </Col>

        <Col>
          <Label for="limits">Humiliation</Label>
          <FormGroup check>
            <Input
              id="humiliation_giving"
              type="checkbox"
              onChange={updatePlayer}
            />
            <Label for="humiliation_giving" check>
              Giving
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input
              id="humiliation_receiving"
              type="checkbox"
              onChange={updatePlayer}
            />
            <Label for="humiliation_receiving" check>
              Receiving
            </Label>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label className="mt-3" for="limits">
            Anal
          </Label>
          <FormGroup check>
            <Input id="anal_giving" type="checkbox" onChange={updatePlayer} />
            <Label for="anal_giving" check>
              Giving
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input
              id="anal_receiving"
              type="checkbox"
              onChange={updatePlayer}
            />
            <Label for="anal_receiving" check>
              Receiving
            </Label>
          </FormGroup>
        </Col>
        <Col>
          <Label className="mt-3" for="limits">
            Other
          </Label>
          <FormGroup check>
            <Input id="blindfolded" type="checkbox" onChange={updatePlayer} />
            <Label for="blindfolded" check>
              Blindfolded
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input id="resisting" type="checkbox" onChange={updatePlayer} />
            <Label for="resisting" check>
              Resisting
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
}