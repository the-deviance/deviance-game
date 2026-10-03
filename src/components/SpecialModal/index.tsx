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
import { pickFlavour } from "../../data/flavourText";
import CountdownTimer from "../CountdownTimer";
import useCountdown from "../CountdownTimer/useCountdown";
import { Card, OwnedProperty } from "../../types/game";

interface SpecialModalProps {
  property?: OwnedProperty | false;
  next: (optedOut: boolean) => void;
}

export default function SpecialModal({ property, next }: SpecialModalProps) {
  const {
    gameData,
    adjustOptOutFromPlayer,
    removeItemOfClothingForPlayer,
    adjustMoneyForPlayer,
  } = useGameData();
  const [task, setTask] = useState<Card | null | undefined>();
  const [emptyLine, setEmptyLine] = useState("");

  const player = gameData.players[gameData.currentPlayer];

  useEffect(() => {
    let task: Card | null;
    switch (property ? property.name : "") {
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
    setEmptyLine(pickFlavour("no_cards"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [property]);

  const completeTask = () => {
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
    timer.reset();
    next(false);
  };

  const timer = useCountdown(completeTask);
  const { run, paused } = timer;

  return (
    <Modal isOpen={Boolean(property)}>
      <ModalHeader>{task ? task.name : "The Deck Ran Dry"}</ModalHeader>
      <ModalBody>
        {task ? <div>{task.message}</div> : emptyLine}
        {run ? <CountdownTimer total={task?.timer} remaining={run - 1} paused={paused} /> : null}
      </ModalBody>
      <ModalFooter>
        {task ? (
          <Button
            className="ml-3"
            style={{ left: "0px", position: "absolute" }}
            color="secondary"
            disabled={(gameData.players[gameData.currentPlayer]?.optOuts ?? 0) <= 0}
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
