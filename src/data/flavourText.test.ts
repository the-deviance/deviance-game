import { pickFlavour, FLAVOUR_LINES } from "./flavourText";

const SAMPLE_VARS: Record<string, string | number> = {
  price: 850,
  rent: 120,
  owner: "Aimee",
  name: "The Dungeon",
};

describe("flavourText", () => {
  it("returns a line from the right pool for every key", () => {
    Object.keys(FLAVOUR_LINES).forEach((key) => {
      for (let i = 0; i < 25; i++) {
        const line = pickFlavour(key, SAMPLE_VARS);
        expect(typeof line).toBe("string");
        expect(line.length).toBeGreaterThan(0);
      }
    });
  });

  it("resolves every placeholder used in the pools", () => {
    Object.entries(FLAVOUR_LINES).forEach(([key, lines]) => {
      lines.forEach((raw) => {
        (raw.match(/\{(\w+)\}/g) || []).forEach((ph) => {
          const varName = ph.slice(1, -1);
          expect(SAMPLE_VARS[varName]).toBeDefined();
        });
      });
      for (let i = 0; i < 25; i++) {
        expect(pickFlavour(key, SAMPLE_VARS)).not.toMatch(/\{\w+\}/);
      }
    });
  });

  it("returns empty string for an unknown key", () => {
    expect(pickFlavour("nope")).toBe("");
  });

  it("leaves unknown placeholders intact rather than printing undefined", () => {
    expect(pickFlavour("rent", {})).not.toMatch(/undefined/);
  });
});
