import React, { useEffect, useState } from "react";
import useGameData from "../../utils/useGameData";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Player } from "../../types/game";

// Setup step 2: each player ticks exactly who they're up for playing with.
// Pairings are explicit and mutual (the engine only matches two players who
// both ticked each other), so nothing is inferred from orientation labels.
interface PartnerPickerProps {
  modal: boolean;
  toggle: () => void;
  setSetupStep: (step: number) => void;
}

export default function PartnerPicker({ modal, toggle: toggleModal, setSetupStep }: PartnerPickerProps) {
  const { gameData, updatePlayers } = useGameData();

  // playerId -> ids they're up for. Initialised when the modal opens so it
  // picks up the players (and any migrated ticks) as they are right now.
  const [matrix, setMatrix] = useState<Record<number, number[]>>({});

  useEffect(() => {
    if (modal) {
      const init: Record<number, number[]> = {};
      gameData.players.forEach((p) => {
        init[p.id] = p.playsWith || [];
      });
      setMatrix(init);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);

  if (!modal) return null;

  const playerName = (player: Player, index: number) => player.name?.trim() || `Player ${index + 1}`;

  const toggleTick = (ownerId: number, otherId: number, checked: boolean) => {
    setMatrix((m) => {
      const current = new Set(m[ownerId] || []);
      if (checked) {
        current.add(otherId);
      } else {
        current.delete(otherId);
      }
      return { ...m, [ownerId]: [...current] };
    });
  };

  const mutualPairs = gameData.players.reduce((count, p, i) => {
    for (let j = i + 1; j < gameData.players.length; j++) {
      const other = gameData.players[j];
      if (matrix[p.id]?.includes(other.id) && matrix[other.id]?.includes(p.id)) {
        count += 1;
      }
    }
    return count;
  }, 0);

  return (
    <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Who plays with whom?</ModalHeader>
      <ModalBody>
        <div className="small text-muted mb-3">
          Tick everyone you're up for playing with tonight. Cards only pair
          two people who have both ticked each other, so nobody is ever
          matched with someone they didn't choose.
        </div>
        <Form>
          {gameData.players.map((player, index) => (
            <FormGroup key={player.id} className="mb-3">
              <Label className="prefs-heading">
                {playerName(player, index)} is up for playing with:
              </Label>
              {gameData.players
                .filter((other) => other.id !== player.id)
                .map((other) => {
                  const otherIndex = gameData.players.indexOf(other);
                  const inputId = `plays-${player.id}-${other.id}`;
                  return (
                    <FormGroup check key={inputId}>
                      <Input
                        id={inputId}
                        type="checkbox"
                        checked={Boolean(matrix[player.id]?.includes(other.id))}
                        onChange={(e) => toggleTick(player.id, other.id, e.target.checked)}
                      />
                      <Label for={inputId} check>
                        {playerName(other, otherIndex)}
                      </Label>
                    </FormGroup>
                  );
                })}
            </FormGroup>
          ))}
        </Form>
        {gameData.players.length > 1 && mutualPairs === 0 ? (
          <div className="small text-warning">
            No mutual pairs yet. Most cards need two people who both ticked
            each other, so the decks will run very thin like this.
          </div>
        ) : null}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={() => setSetupStep(1)}>
          Back
        </Button>
        <Button
          color="primary"
          onClick={() => {
            const players = gameData.players.map((p) => ({
              ...p,
              playsWith: matrix[p.id] || [],
            }));
            updatePlayers(players);
            setSetupStep(3);
          }}
        >
          Next Step
        </Button>
      </ModalFooter>
    </Modal>
  );
}
