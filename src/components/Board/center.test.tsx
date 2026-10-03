import React from "react";
import { render, screen } from "@testing-library/react";
import CenterCard from "./center";
import {
  GameProvider,
  STORAGE_KEY,
  initialGameData,
  createDefaultPlayer,
} from "../../contexts/GameContext";
import { Player } from "../../types/game";

function seedGame(players: Player[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...initialGameData, players, started: true })
  );
}

function renderCenter() {
  return render(
    <GameProvider>
      <CenterCard />
    </GameProvider>
  );
}

afterEach(() => {
  localStorage.clear();
});

describe("dice sanity checks", () => {
  test("one player: the die is locked with a way back into setup", () => {
    seedGame([{ ...createDefaultPlayer(0), name: "Rob" }]);
    renderCenter();

    expect(
      screen.getByRole("button", { name: /roll the die/i })
    ).toBeDisabled();
    expect(screen.getByText(/at least two to play/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add players/i })
    ).toBeInTheDocument();
  });

  test("two named players: the die rolls", () => {
    seedGame([
      { ...createDefaultPlayer(0), name: "Rob" },
      { ...createDefaultPlayer(1), name: "Aimee" },
    ]);
    renderCenter();

    expect(screen.getByRole("button", { name: /roll the die/i })).toBeEnabled();
    expect(
      screen.queryByRole("button", { name: /add players/i })
    ).not.toBeInTheDocument();
  });
});
