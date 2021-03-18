import React, { useEffect, useState } from "react";
import useGameData from "../../utils/useGameData";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
// import { getTaskforTargetAndPlayer } from "../../data/actionCards";
import {
  getStageCardForPlayer,
  getFateCardForPlayer,
  getChamberCardForPlayer,
  getEncounterCardForPlayer,
} from "../../data/cardManager";

export default function SpecialModal({ property, next }) {
  const {
    gameData,
    adjustOptOutFromPlayer,
    removeItemOfClothingForPlayer,
    adjustMoneyForPlayer,
  } = useGameData();
  const [task, setTask] = useState();
  const [run, setRun] = useState();

  const player = gameData.players[gameData.currentPlayer];

  useEffect(() => {
    let task;
    switch (property.name) {
      case "The Theatre":
        console.log('Getting "Theatre" card');
        console.log("Player: ", player);
        task = getStageCardForPlayer({ player, gameData });
        break;
      case "Chance":
        console.log('Getting "Chance" card');
        task = getFateCardForPlayer({ player, gameData });
        break;
      case "The Dungeon":
        console.log('Getting "Dungeon" card');
        task = getChamberCardForPlayer({ player, gameData });
        break;
      case "Random Encounter":
        console.log('Getting "Random Encounter" card');
        task = getEncounterCardForPlayer({ target: player, gameData });
        break;
      default:
        task = null;
    }
    console.log("Got Task: ", task);
    setTask(task);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [property]);

  if (run) {
    if (run > 1) {
      setTimeout(() => {
        setRun(run - 1);
      }, 1000);
    } else {
      if (task && task.lose_dress_level) {
        removeItemOfClothingForPlayer(gameData.currentPlayer);
      }
      if (task && task.delta_optOut) {
        adjustOptOutFromPlayer(
          gameData.players[gameData.currentPlayer],
          task.delta_optOut
        );
      }
      if (task && task.delta_money) {
        adjustMoneyForPlayer({
          player: gameData.players[gameData.currentPlayer],
          delta: task.delta_money,
        });
      }
      setTask(null);
      setRun(null);
      next(false);
    }
  }

  return (
    <Modal isOpen={property}>
      <ModalHeader>{task ? task.name : "No Tasks Found"}</ModalHeader>
      <ModalBody>
        {task ? <div>{task.message}</div> : "Sorry, we've run out of ideas!"}
      </ModalBody>
      <ModalFooter>
        {task ? (
          <Button
            className="ml-3"
            style={{ left: "0px", position: "absolute" }}
            color="secondary"
            onClick={() => {
              adjustOptOutFromPlayer(
                gameData.players[gameData.currentPlayer],
                -1
              );
              next(true);
            }}
          >
            Opt Out
          </Button>
        ) : null}
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
              if (task && task.lose_dress_level) {
                removeItemOfClothingForPlayer(gameData.currentPlayer);
              }
              if (task && task.delta_optOut) {
                adjustOptOutFromPlayer(
                  gameData.players[gameData.currentPlayer],
                  task.delta_optOut
                );
              }
              if (task && task.delta_money) {
                adjustMoneyForPlayer({
                  player: gameData.players[gameData.currentPlayer],
                  delta: task.delta_money,
                });
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
