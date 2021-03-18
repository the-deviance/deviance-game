import React, { useEffect, useState } from "react";
import InputRange from "react-input-range";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

export default function NewGameModal({ player }) {
  const [dress, setDress] = useState(3);

  useEffect(() => {
    // Setup defaults
    player.position = 0;
    player.gender = "Male";
    player.sexuality = "Straight";
    player.dress = "3";
    player.prefs = {
      dominant: false,
      submissive: false,
      humiliation_giving: false,
      humiliation_recieving: false,
      anal_giving: false,
      anal_recieving: false,
      blindfolded: false,
      resisting: false,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatePlayer = (e) => {
    if (!e.target) {
      player.dress = e;
      setDress(e);
      return;
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
      return (player.prefs[e.target.id] = e.target.checked);
    }
    player[e.target.name] = e.target.value;
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
          <option>Male</option>
          <option>Female</option>
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
          <option>Straight</option>
          <option>Bi</option>
          <option>Bi-Curious</option>
          <option>Gay</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="pronouns">pronouns</Label>
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
        <Label for="dress">Dress</Label>
        <InputRange
          maxValue={3}
          minValue={0}
          value={dress}
          formatLabel={(value) => {
            switch (value) {
              case 0:
                return "Naked";
              case 1:
                return "Underwear only";
              case 2:
                return "Topless";
              case 3:
                return "Fully Clothed";
              default:
                return "";
            }
          }}
          onChange={updatePlayer}
        />
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
              id="humiliation_recieving"
              type="checkbox"
              onChange={updatePlayer}
            />
            <Label for="humiliation_recieving" check>
              Recieving
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
              id="anal_recieving"
              type="checkbox"
              onChange={updatePlayer}
            />
            <Label for="anal_recieving" check>
              Recieving
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
