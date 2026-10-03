import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddPlayers from "./index";
import {
  GameProvider,
  STORAGE_KEY,
  initialGameData,
  createDefaultPlayer,
} from "../../contexts/GameContext";
import { Player } from "../../types/game";

// Seeds the saved game the provider loads on mount.
function seedGame(players: Player[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...initialGameData, players, started: true })
  );
}

function renderModal() {
  return render(
    <GameProvider>
      <AddPlayers modal={true} toggle={() => {}} setSetupStep={() => {}} />
    </GameProvider>
  );
}

afterEach(() => {
  localStorage.clear();
});

describe("AddPlayers setup sanity checks", () => {
  test("one player: Next Step is blocked", () => {
    seedGame([createDefaultPlayer(0)]);
    renderModal();

    expect(screen.getByRole("button", { name: /next step/i })).toBeDisabled();
    expect(screen.getByText(/at least two players/i)).toBeInTheDocument();
  });

  test("two players without names: still blocked, asks for names", () => {
    seedGame([createDefaultPlayer(0), createDefaultPlayer(1)]);
    renderModal();

    expect(screen.getByRole("button", { name: /next step/i })).toBeDisabled();
    expect(screen.getByText(/every player needs a name/i)).toBeInTheDocument();
  });

  test("two named players: Next Step unlocks as names are typed", () => {
    seedGame([createDefaultPlayer(0), createDefaultPlayer(1)]);
    renderModal();

    const nameInputs = screen.getAllByPlaceholderText("Joe Blogs");
    expect(nameInputs).toHaveLength(2);

    fireEvent.change(nameInputs[0], { target: { value: "Rob" } });
    expect(screen.getByRole("button", { name: /next step/i })).toBeDisabled();

    fireEvent.change(nameInputs[1], { target: { value: "Aimee" } });
    expect(screen.getByRole("button", { name: /next step/i })).toBeEnabled();

    // A name of only spaces doesn't count.
    fireEvent.change(nameInputs[1], { target: { value: "   " } });
    expect(screen.getByRole("button", { name: /next step/i })).toBeDisabled();
  });
});
