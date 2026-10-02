import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import {
  Player,
  DressLevel,
  DRESS_LABELS,
  Gender,
  Sexuality,
} from "../../types/game";

interface PlayerFormProps {
  player: Player;
}

// The slider runs the opposite way to the game scale: slider 0 = Naked,
// slider 3 = Fully Clothed. Game scale is the reverse (DressLevel).
const sliderToDress = (value: number): DressLevel => (3 - value) as DressLevel;

export default function PlayerForm({ player }: PlayerFormProps) {
  const [dress, setDress] = useState(3);

  useEffect(() => {
    // Setup defaults
    player.position = 0;
    player.gender = Gender.Male;
    player.sexuality = Sexuality.Straight;
    player.dress = DressLevel.FullyClothed;
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

  const getDressLabel = (value: number): string =>
    DRESS_LABELS[sliderToDress(value)] || "";

  const updatePlayer = (e: React.ChangeEvent<HTMLInputElement> | number) => {
    if (typeof e === 'number') {
      player.dress = e as DressLevel;
      console.log(`Setting dress level to ${e}`)
      setDress(3-e);
      return;
    }
    if (!e.target) return;

    let value: any = e.target.value;
      if (e.target.name === "gender" || e.target.name === "sexuality") {
          value = parseInt(value, 10);
          if (Number.isNaN(value)) return;
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
    (player as Record<string, any>)[e.target.name] = value;
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
          <option value={Gender.Male}>Male</option>
          <option value={Gender.Female}>Female</option>
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
          <option value={Sexuality.Straight}>Straight</option>
          <option value={Sexuality.BiCurious}>Bi-Curious</option>
          <option value={Sexuality.Bi}>Bi</option>
          <option value={Sexuality.Gay}>Gay</option>
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
            updatePlayer(sliderToDress(value));
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