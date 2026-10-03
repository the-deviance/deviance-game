import React, { ReactNode, useState } from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import CenterCard from "./center";
import {
  GameProvider,
  STORAGE_KEY,
  initialGameData,
  createDefaultPlayer,
} from "../../contexts/GameContext";
import PropertyDataContext, {
  PropertyDataState,
} from "../../utils/PropertyDataContext";
import properties from "../../data/properties";
import { OwnedProperty, Player } from "../../types/game";

/* The real die animates for 1.4s and rolls a random number; these tests
   need a chosen value, so the mock exposes the two onChange calls the real
   die makes (roll start, then landing) as separate buttons. */
let mockRoll = 1;
jest.mock("../Dice", () => {
  const mockReact = require("react");
  return {
    __esModule: true,
    default: ({
      onChange,
      disabled,
    }: {
      onChange: (value: number, rolling: boolean) => void;
      disabled?: boolean;
    }) =>
      mockReact.createElement(
        "div",
        null,
        mockReact.createElement(
          "button",
          { disabled, onClick: () => onChange(mockRoll, true) },
          "mock-throw"
        ),
        mockReact.createElement(
          "button",
          { onClick: () => onChange(mockRoll, false) },
          "mock-land"
        )
      ),
  };
});

// Must match MOVE_ANIMATION_MS in useGameData.
const STEP_MS = 200;

function seedGame(players: Player[], currentPlayer = 0) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...initialGameData, players, currentPlayer, started: true })
  );
}

// The board is the real one from properties.ts; owners get written in per
// test, exactly as a live game stores it.
function seedBoard(owners: Record<number, number> = {}) {
  const board: OwnedProperty[] = properties.map((property, index) =>
    owners[index] !== undefined ? { ...property, owner: owners[index] } : { ...property }
  );
  localStorage.setItem("propertyData", JSON.stringify(board));
}

function couple(overrides: Partial<Player> = {}): Player[] {
  return [
    { ...createDefaultPlayer(0), name: "Rob", playsWith: [1], ...overrides },
    { ...createDefaultPlayer(1), name: "Aimee", playsWith: [0] },
  ];
}

function Providers({ children }: { children: ReactNode }) {
  const state = useState<OwnedProperty[] | undefined>(undefined);
  return (
    <GameProvider>
      <PropertyDataContext.Provider value={state as PropertyDataState}>
        {children}
      </PropertyDataContext.Provider>
    </GameProvider>
  );
}

function renderBoard() {
  return render(
    <Providers>
      <CenterCard />
    </Providers>
  );
}

async function rollDie(steps: number) {
  mockRoll = steps;
  fireEvent.click(screen.getByText("mock-throw"));
  fireEvent.click(screen.getByText("mock-land"));
  await act(async () => {
    jest.advanceTimersByTime(steps * STEP_MS);
  });
}

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
  localStorage.clear();
});

/* Square 1 on the real board is Temptations: price 400, rent 150. */
describe("landing on a square", () => {
  it("offers the purchase when the square is unowned and affordable", async () => {
    seedGame(couple());
    seedBoard();
    renderBoard();

    await rollDie(1);

    expect(screen.getByText("Temptations is for sale")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /yes please/i })).toBeInTheDocument();
  });

  it("shows the broke modal when the square is unowned but unaffordable", async () => {
    seedGame(couple({ money: 100 }));
    seedBoard();
    renderBoard();

    await rollDie(1);

    expect(screen.queryByText(/is for sale/i)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^ok$/i })).toBeInTheDocument();
  });

  it("demands rent when someone else owns the square", async () => {
    seedGame(couple());
    seedBoard({ 1: 1 });
    renderBoard();

    await rollDie(1);

    expect(screen.getByText("Pay Rent")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Pay £150" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /work it off/i })).toBeEnabled();
  });

  it("just ends the turn on your own property", async () => {
    seedGame(couple());
    seedBoard({ 1: 0 });
    renderBoard();

    expect(screen.getByText(/Rob's Turn/)).toBeInTheDocument();
    await rollDie(1);

    expect(screen.getByText(/Aimee's Turn/)).toBeInTheDocument();
    expect(screen.queryByText("Pay Rent")).not.toBeInTheDocument();
    expect(screen.queryByText(/is for sale/i)).not.toBeInTheDocument();
  });

  it("ends the turn on Go with nothing to buy", async () => {
    seedGame(couple({ position: 15 }));
    seedBoard();
    renderBoard();

    await rollDie(1);

    expect(screen.getByText(/Aimee's Turn/)).toBeInTheDocument();
    expect(screen.queryByText(/is for sale/i)).not.toBeInTheDocument();
  });
});
