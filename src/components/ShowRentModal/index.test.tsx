import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ShowRentModal from ".";
import {
  GameProvider,
  STORAGE_KEY,
  initialGameData,
  createDefaultPlayer,
} from "../../contexts/GameContext";
import useGameData from "../../utils/useGameData";
import { OwnedProperty, Player } from "../../types/game";

// Reads live game state from inside the provider so the tests can assert
// on money without reaching into localStorage mid-render.
function BankProbe() {
  const { gameData } = useGameData();
  return (
    <div data-testid="bank">
      {gameData.players.map(p => p.money).join("|")}
    </div>
  );
}

function seedGame(players: Player[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...initialGameData, players, currentPlayer: 0, started: true })
  );
}

function couple(): Player[] {
  return [
    { ...createDefaultPlayer(0), name: "Rob", playsWith: [1] },
    { ...createDefaultPlayer(1), name: "Aimee", playsWith: [0] },
  ];
}

const den: OwnedProperty = {
  name: "Temptations",
  price: 400,
  rent: 150,
  owner: 1,
};

function renderModal(property: OwnedProperty | false, next = jest.fn()) {
  render(
    <GameProvider>
      <ShowRentModal property={property} next={next} />
      <BankProbe />
    </GameProvider>
  );
  return next;
}

afterEach(() => {
  localStorage.clear();
});

describe("ShowRentModal", () => {
  it("stays closed without a property", () => {
    seedGame(couple());
    renderModal(false);
    expect(screen.queryByText(/pay rent/i)).not.toBeInTheDocument();
  });

  it("paying rent moves the money from tenant to landlord", () => {
    seedGame(couple());
    const next = renderModal(den);

    fireEvent.click(screen.getByRole("button", { name: "Pay £150" }));

    expect(screen.getByTestId("bank")).toHaveTextContent("1850|2150");
    expect(next).toHaveBeenCalledWith(false);
  });

  it("cash rent is always collectable, even past zero", () => {
    // Current behaviour: there is no can't-pay escape on rent, the tenant
    // just goes into the red. If that ever changes, change this test too.
    const players = couple();
    players[0].money = 100;
    seedGame(players);
    renderModal(den);

    fireEvent.click(screen.getByRole("button", { name: "Pay £150" }));

    expect(screen.getByTestId("bank")).toHaveTextContent("-50|2150");
  });

  it("only offers working it off to players who play together", () => {
    // Default players carry empty playsWith lists: strangers.
    seedGame([
      { ...createDefaultPlayer(0), name: "Rob" },
      { ...createDefaultPlayer(1), name: "Aimee" },
    ]);
    renderModal(den);
    expect(screen.getByRole("button", { name: /work it off/i })).toBeDisabled();
  });

  it("working it off calls next(true) without touching the bank", () => {
    seedGame(couple());
    const next = renderModal(den);

    const workItOff = screen.getByRole("button", { name: /work it off/i });
    expect(workItOff).toBeEnabled();
    fireEvent.click(workItOff);

    expect(screen.getByTestId("bank")).toHaveTextContent("2000|2000");
    expect(next).toHaveBeenCalledWith(true);
  });
});
