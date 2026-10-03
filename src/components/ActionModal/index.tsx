/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import useGameData from "../../utils/useGameData";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import { getActionCardforTarget } from "../../data/cardManager";
import { pickFlavour } from "../../data/flavourText";
import CountdownTimer from "../CountdownTimer";
import useCountdown from "../CountdownTimer/useCountdown";
import { Card, OwnedProperty } from "../../types/game";

interface ActionModalProps {
  property?: OwnedProperty | false;
  next: (optedOut: boolean) => void;
}

export default function ActionModal({ property, next }: ActionModalProps) {
  const {
    gameData,
    adjustOptOutFromPlayer,
    removeItemOfClothingForPlayer,
  } = useGameData();
  const [task, setTask] = useState<Card | null | undefined>();

  const player = gameData.players[gameData.currentPlayer];
  const target =
    property && property.owner !== undefined
      ? gameData.players[property.owner]
      : undefined;
  const emptyLine = useMemo(() => pickFlavour("no_cards"), [property]);

  useEffect(() => {
    if (!target) {
      setTask(null);
      return;
    }
    const task = getActionCardforTarget({ target, player, gameData });
    console.log("Got Task:", task);
    setTask(task);
  }, [property]);

  const completeTask = () => {
    if (task?.lose_dress_level && target) {
      removeItemOfClothingForPlayer(target.id);
    }
    setTask(null);
    timer.reset();
    next(false);
  };

  const timer = useCountdown(completeTask);
  const { run, paused } = timer;

  return (
    <Modal isOpen={Boolean(property)}>
      <ModalHeader>{task ? task.name : "The Deck Ran Dry"}</ModalHeader>
      <ModalBody>
        {task ? <div>{task.message}</div> : <div>{emptyLine}</div>}
        {run ? <CountdownTimer total={task?.timer} remaining={run - 1} paused={paused} /> : null}
      </ModalBody>
      <ModalFooter>
          {task && <Button
          className="ml-3"
          style={{ left: "0px", position: "absolute" }}
          color="secondary"
          disabled={(player?.optOuts ?? 0) <= 0}
          onClick={() => {
            adjustOptOutFromPlayer(player, -1);
            next(true);
          }}
        >
          Opt Out
        </Button>}
        {task?.timer ? (
          run ? (
            <>
              <Button color="warning" outline onClick={timer.reset}>
                Reset
              </Button>
              <Button color="info" outline onClick={timer.togglePause}>
                {paused ? "Resume" : "Pause"}
              </Button>
              <Button color="success" onClick={completeTask}>
                Finish
              </Button>
            </>
          ) : (
            <Button
              color="primary"
              onClick={() => {
                timer.start(task!.timer!);
              }}
            >
              {`Start Timer (${task!.timer}s)`}
            </Button>
          )
        ) : (
          <Button
            color="primary"
            onClick={() => {
              if (task?.lose_dress_level && target) {
                removeItemOfClothingForPlayer(target.id);
              }
              next(false);
            }}
          >
              {task ? "Let's Do it!" : "Close"}
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
}
