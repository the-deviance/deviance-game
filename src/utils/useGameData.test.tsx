import React, { ReactNode } from "react";
import { renderHook, act } from "@testing-library/react";
import useGameData from "./useGameData";
import {
  GameProvider,
  STORAGE_KEY,
  initialGameData,
  createDefaultPlayer,
  BOARD_SIZE,
  PASS_GO_BONUS,
} from "../contexts/GameContext";
import { Player } from "../types/game";

// Must match MOVE_ANIMATION_MS in useGameData.
const STEP_MS = 200;

function seedGame(players: Player[], currentPlayer = 0) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...initialGameData, players, currentPlayer, started: true })
  );
}

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
);

function renderGameData() {
  return renderHook(() => useGameData(), { wrapper });
}

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
  localStorage.clear();
});

describe("movePlayer", () => {
  it("animates one square per tick and resolves with the moved player", async () => {
    seedGame([
      { ...createDefaultPlayer(0), name: "Rob" },
      { ...createDefaultPlayer(1), name: "Aimee" },
    ]);
    const { result } = renderGameData();

    let promise: Promise<Player | null>;
    act(() => {
      promise = result.current.movePlayer(3);
    });

    await act(async () => {
      jest.advanceTimersByTime(STEP_MS);
    });
    expect(result.current.gameData.players[0].position).toBe(1);

    await act(async () => {
      jest.advanceTimersByTime(STEP_MS * 2);
    });
    const moved = await promise!;

    expect(result.current.gameData.players[0].position).toBe(3);
    expect(result.current.gameData.players[0].money).toBe(2000);
    expect(result.current.gameData.players[1].position).toBe(0);
    expect(moved?.position).toBe(3);
    expect(moved?.money).toBe(2000);
  });

  it("wraps past Go and banks the bonus exactly once", async () => {
    seedGame(
      [
        { ...createDefaultPlayer(0), name: "Rob" },
        { ...createDefaultPlayer(1), name: "Aimee", position: BOARD_SIZE - 2 },
      ],
      1
    );
    const { result } = renderGameData();

    let promise: Promise<Player | null>;
    act(() => {
      promise = result.current.movePlayer(5);
    });
    await act(async () => {
      jest.advanceTimersByTime(STEP_MS * 5);
    });
    const moved = await promise!;

    const expectedPosition = (BOARD_SIZE - 2 + 5) % BOARD_SIZE;
    expect(result.current.gameData.players[1].position).toBe(expectedPosition);
    expect(result.current.gameData.players[1].money).toBe(2000 + PASS_GO_BONUS);
    // The resolved player must match the committed state, so callers can
    // settle rent/purchases off it without re-reading storage.
    expect(moved?.position).toBe(expectedPosition);
    expect(moved?.money).toBe(2000 + PASS_GO_BONUS);
    // Bystander untouched.
    expect(result.current.gameData.players[0].money).toBe(2000);
  });

  it("pays the bonus when landing exactly on Go", async () => {
    seedGame([
      { ...createDefaultPlayer(0), name: "Rob", position: BOARD_SIZE - 3 },
      { ...createDefaultPlayer(1), name: "Aimee" },
    ]);
    const { result } = renderGameData();

    let promise: Promise<Player | null>;
    act(() => {
      promise = result.current.movePlayer(3);
    });
    await act(async () => {
      jest.advanceTimersByTime(STEP_MS * 3);
    });
    const moved = await promise!;

    expect(result.current.gameData.players[0].position).toBe(0);
    expect(result.current.gameData.players[0].money).toBe(2000 + PASS_GO_BONUS);
    expect(moved?.position).toBe(0);
  });

  it("resolves null when there is no current player", async () => {
    const { result } = renderGameData();

    let moved: Player | null = {} as Player;
    await act(async () => {
      moved = await result.current.movePlayer(4);
    });

    expect(moved).toBeNull();
  });
});
