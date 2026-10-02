/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import useGameData from "../../utils/useGameData";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import { getActionCardforTarget } from "../../data/cardManager";
import { pickFlavour } from "../../data/flavourText";
import CountdownTimer from "../CountdownTimer";

export default function ActionModal({ property, next }) {
  const {
    gameData,
    adjustOptOutFromPlayer,
    removeItemOfClothingForPlayer,
  } = useGameData();
  const [task, setTask] = useState();
  const [run, setRun] = useState();

  const player = gameData.players[gameData.currentPlayer];
  const target = gameData.players[property?.owner];
  const emptyLine = useMemo(() => pickFlavour("no_cards"), [property]);

  useEffect(() => {
    const task = getActionCardforTarget({ target, player, gameData });
    console.log("Got Task:", task);
    setTask(task);
  }, [property]);

  const completeTask = () => {
    if (task?.lose_dress_level) {
      removeItemOfClothingForPlayer(target.id);
    }
    setTask(null);
    setRun(null);
    next(false);
  };

  useEffect(() => {
    if (!run) return undefined;
    if (run > 1) {
      const tick = setTimeout(() => setRun(run - 1), 1000);
      return () => clearTimeout(tick);
    }
    completeTask();
    return undefined;
  }, [run]);

  return (
    <Modal isOpen={property}>
      <ModalHeader>{task ? task.name : "The Deck Ran Dry"}</ModalHeader>
      <ModalBody>
        {task ? <div>{task.message}</div> : <div>{emptyLine}</div>}
        {run ? <CountdownTimer total={task?.timer} remaining={run - 1} /> : null}
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
            <Button color="success" onClick={completeTask}>
              Finish
            </Button>
          ) : (
            <Button
              color="primary"
              onClick={() => {
                setRun(task.timer + 1);
              }}
            >
              {`Start Timer (${task.timer}s)`}
            </Button>
          )
        ) : (
          <Button
            color="primary"
            onClick={() => {
              if (task?.lose_dress_level) {
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
