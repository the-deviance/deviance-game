/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import useGameData from "../../utils/useGameData";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import { getActionCardforTarget } from "../../data/cardManager";

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

  useEffect(() => {
    const task = getActionCardforTarget({ target, player, gameData });
    console.log("Got Task:", task);
    setTask(task);
  }, [property]);

  console.log("TASK:", task);

  if (run) {
    if (run > 1) {
      setTimeout(() => {
        setRun(run - 1);
      }, 1000);
    } else {
      if (task?.lose_dress_level) {
        removeItemOfClothingForPlayer(target.id);
      }
      setTask(null);
      setRun(null);
      next(false);
    }
  }

  return (
    <Modal isOpen={property}>
      <ModalHeader>{task && task.name}</ModalHeader>
      <ModalBody>{task && <div>{task.message}</div>}</ModalBody>
      <ModalFooter>
        <Button
          className="ml-3"
          style={{ left: "0px", position: "absolute" }}
          color="secondary"
          onClick={() => {
            adjustOptOutFromPlayer(player, -1);
            next(true);
          }}
        >
          Opt Out
        </Button>
        {task?.timer ? (
          <Button
            color="primary"
            disabled={!!run}
            onClick={() => {
              setRun(task.timer + 1);
            }}
          >
            {run ? `${run - 1}` : `Start Timer (${task.timer})`}
          </Button>
        ) : (
          <Button
            color="primary"
            onClick={() => {
              if (task.lose_dress_level) {
                removeItemOfClothingForPlayer(target.id);
              }
              next(false);
            }}
          >
            Let's Do it!
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
}
