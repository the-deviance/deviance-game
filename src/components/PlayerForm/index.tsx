import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Row, Col, Table } from "reactstrap";
import {
  Player,
  DressLevel,
  DRESS_LABELS,
  PREF_PAIRS,
  PREF_SINGLES,
  defaultPrefs,
  defaultBody,
} from "../../types/game";

interface PlayerFormProps {
  player: Player;
  // Edits mutate the player object in place, which the parent can't see.
  // This lets the setup modal re-render (live accordion names, the
  // everyone-needs-a-name gate on Next Step).
  onChanged?: () => void;
}

// The slider runs the opposite way to the game scale: slider 0 = Naked,
// slider 3 = Fully Clothed. Game scale is the reverse (DressLevel).
const sliderToDress = (value: number): DressLevel => (3 - value) as DressLevel;

export default function PlayerForm({ player, onChanged }: PlayerFormProps) {
  const [dress, setDress] = useState(3);
  const [body, setBody] = useState(defaultBody());
  const [orgasmEndsNight, setOrgasmEndsNight] = useState(false);
  // Ticking "has a penis" defaults the orgasm rule on, but a manual touch of
  // that toggle wins from then on (not every penis-owner is one-and-done).
  const [orgasmTouched, setOrgasmTouched] = useState(false);

  useEffect(() => {
    // Setup defaults
    player.position = 0;
    player.body = defaultBody();
    player.playsWith = [];
    player.orgasmEndsNight = false;
    player.dress = DressLevel.FullyClothed;
    player.prefs = defaultPrefs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateBody = (key: 'penis' | 'vulva' | 'bra', checked: boolean) => {
    const next = { ...body, [key]: checked };
    setBody(next);
    player.body = next;
    if (key === 'penis' && !orgasmTouched) {
      setOrgasmEndsNight(checked);
      player.orgasmEndsNight = checked;
    }
    onChanged?.();
  };

  const updateOrgasmRule = (checked: boolean) => {
    setOrgasmTouched(true);
    setOrgasmEndsNight(checked);
    player.orgasmEndsNight = checked;
    onChanged?.();
  };

  const getDressLabel = (value: number): string =>
    DRESS_LABELS[sliderToDress(value)] || "";

  const updatePlayer = (e: React.ChangeEvent<HTMLInputElement> | number) => {
    if (typeof e === 'number') {
      player.dress = e as DressLevel;
      console.log(`Setting dress level to ${e}`)
      setDress(3-e);
      onChanged?.();
      return;
    }
    if (!e.target) return;

    let value: any = e.target.value;
      if (e.target.name === "pronouns") {
      switch (e.target.value) {
        case "1":
          player.pronouns = { he: "he", him: "him", his: "his" };
          break;
        case "2":
          player.pronouns = { he: "she", him: "her", his: "her" };
          break;
        case "3":
          player.pronouns = { he: "they", him: "them", his: "their" };
          break;
        default:
          break;
      }
      onChanged?.();
      return;
    }
    if (e.target.type === "checkbox") {
      if (!player.prefs) player.prefs = {};
      player.prefs[e.target.id as keyof typeof player.prefs] = e.target.checked
    }
    (player as Record<string, any>)[e.target.name] = value;
    console.log(`Updated player: ${e.target.name} with ${value}`);
    onChanged?.();
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
        <Label className="prefs-heading">Your body</Label>
        <div className="small text-muted mb-2">
          Cards are matched to what you tick here, not to a gender label.
        </div>
        <FormGroup check>
          <Input
            id={`body-penis-${player.id}`}
            type="checkbox"
            checked={body.penis}
            onChange={(e) => updateBody('penis', e.target.checked)}
          />
          <Label for={`body-penis-${player.id}`} check>Has a penis</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id={`body-vulva-${player.id}`}
            type="checkbox"
            checked={body.vulva}
            onChange={(e) => updateBody('vulva', e.target.checked)}
          />
          <Label for={`body-vulva-${player.id}`} check>Has a vulva</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id={`body-bra-${player.id}`}
            type="checkbox"
            checked={body.bra}
            onChange={(e) => updateBody('bra', e.target.checked)}
          />
          <Label for={`body-bra-${player.id}`} check>Wears a bra</Label>
        </FormGroup>
        <FormGroup check className="mt-2">
          <Input
            id={`orgasm-ends-night-${player.id}`}
            type="checkbox"
            checked={orgasmEndsNight}
            onChange={(e) => updateOrgasmRule(e.target.checked)}
          />
          <Label for={`orgasm-ends-night-${player.id}`} check>
            One orgasm ends my night
          </Label>
          <div className="small text-muted">
            Holds cards that make you come until the top spice level.
          </div>
        </FormGroup>
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
      <div className="prefs-section">
        <Label className="prefs-heading">Into (tick what you consent to)</Label>
        <Table borderless size="sm" className="prefs-table">
          <thead>
            <tr>
              <th />
              <th className="text-center">Give</th>
              <th className="text-center">Receive</th>
            </tr>
          </thead>
          <tbody>
            {PREF_PAIRS.map(({ label, giving, receiving }) => (
              <tr key={giving}>
                <td>{label}</td>
                <td className="text-center">
                  <Input id={giving} type="checkbox" onChange={updatePlayer} />
                </td>
                <td className="text-center">
                  <Input id={receiving} type="checkbox" onChange={updatePlayer} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Row>
          {PREF_SINGLES.map(({ label, key }) => (
            <Col xs={6} key={key}>
              <FormGroup check>
                <Input id={key} type="checkbox" onChange={updatePlayer} />
                <Label for={key} check>
                  {label}
                </Label>
              </FormGroup>
            </Col>
          ))}
        </Row>
        <div className="small text-muted mt-2">
          Nothing ticked is ever asked of you. You can still opt out of any card.
        </div>
      </div>
    </Form>
  );
}