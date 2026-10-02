#!/usr/bin/env node
/*
 * Validates every card in every deck (originals + expansion) against
 * docs/card-spec.md: required fields, value ranges, unique names across all
 * decks, placeholder/participant consistency, and known toy / pref gate keys.
 *
 * Usage: node scripts/validate-cards.cjs
 * Exits non-zero with a report if anything is off.
 */
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "src", "data");

// The data files are ES modules; do a crude import by rewriting to CJS in-memory.
function loadDeck(relPath, exportName) {
  const code = fs.readFileSync(path.join(SRC, relPath), "utf8");
  const rewritten = code
    .replace(/^import[^;]*;$/gm, "")
    .replace(new RegExp(`export const ${exportName}`), `const ${exportName}`)
    + `\nmodule.exports = ${exportName};`;
  const mod = { exports: {} };
  new Function("module", "exports", "require", rewritten)(mod, mod.exports, require);
  return mod.exports;
}

const TOYS = JSON.parse(fs.readFileSync(path.join(SRC, "toys.json"), "utf8"));
const PREF_KEYS = [
  "dominant", "submissive", "humiliation_giving", "humiliation_receiving",
  "anal_giving", "anal_receiving", "oral_giving", "oral_receiving",
  "pain_giving", "pain_receiving", "restraining", "restrained",
  "blindfolded", "forceful", "resisting", "will_orgasm", "exhibitionism",
  "feet", "roleplay",
];
const KNOWN_FIELDS = new Set([
  "name", "message", "target_sex", "spice_level", "dress_level_from",
  "dress_level_to", "number_of_participants", "appropriate_for_bi_curious",
  "lose_dress_level", "delta_money", "delta_optOut", "can_opt_out", "timer",
  ...TOYS,
  ...TOYS.map((t) => t.toLowerCase()),
  ...PREF_KEYS.flatMap((k) => [`target_${k}`, `player_${k}`]),
]);
const TIMER_TOKENS = ["%d10%", "%d20%", "%d30%", "%d45%", "%d60%", "%d90%", "%m1%", "%m2%", "%m3%"];

const decks = {
  action: [
    ...loadDeck("actionCards.js", "actionCards"),
    ...loadDeck("expansion/actionExpansionLow.js", "actionExpansionLow"),
    ...loadDeck("expansion/actionExpansionHigh.js", "actionExpansionHigh"),
  ],
  chamber: [
    ...loadDeck("chamberCards.js", "chamberCards"),
    ...loadDeck("expansion/chamberExpansion.js", "chamberExpansion"),
  ],
  stage: [
    ...loadDeck("stageCards.js", "stageCards"),
    ...loadDeck("expansion/stageExpansion.js", "stageExpansion"),
  ],
  fate: [
    ...loadDeck("fateCards.js", "fateCards"),
    ...loadDeck("expansion/fateExpansion.js", "fateExpansion"),
  ],
};

const errors = [];
const warnings = [];
const seenNames = new Map();

for (const [deckName, deck] of Object.entries(decks)) {
  deck.forEach((card, i) => {
    const where = `${deckName}[${i}] "${card.name || "?"}"`;

    if (!card.name) errors.push(`${where}: missing name`);
    if (!card.message) errors.push(`${where}: missing message`);
    if (card.name) {
      if (seenNames.has(card.name)) {
        errors.push(`${where}: duplicate name (also in ${seenNames.get(card.name)})`);
      } else {
        seenNames.set(card.name, deckName);
      }
    }

    if (![0, 1, 2].includes(card.target_sex ?? 0)) errors.push(`${where}: bad target_sex ${card.target_sex}`);
    if (![-1, 0, 1, 2, 3].includes(card.spice_level)) errors.push(`${where}: bad spice_level ${card.spice_level}`);
    const from = card.dress_level_from, to = card.dress_level_to;
    if (!(from >= 0 && from <= 3 && to >= 0 && to <= 3 && from <= to))
      errors.push(`${where}: bad dress range ${from}-${to}`);
    const n = card.number_of_participants;
    if (!(n >= 1 && n <= 5)) errors.push(`${where}: bad number_of_participants ${n}`);

    // Message placeholder sanity: %playerK% / %Kh% etc need K <= participants-1
    const msg = card.message || "";
    for (let k = 1; k <= 5; k++) {
      const uses = msg.includes(`%player${k}%`) || /%[1-5][hsp]%/.test(msg)
        ? msg.includes(`%player${k}%`) || new RegExp(`%${k}[hsp]%`).test(msg)
        : false;
      if (uses && n < k + 1)
        errors.push(`${where}: references player${k} but only ${n} participants`);
    }
    const leftover = msg.match(/%[a-zA-Z0-9]+%/g) || [];
    for (const token of leftover) {
      const ok =
        /^%player[1-5]%$/.test(token) || /^%[1-5][hsp]%$/.test(token) ||
        ["%target%", "%th%", "%ts%", "%tp%"].includes(token) ||
        TIMER_TOKENS.includes(token);
      if (!ok && token !== "%and" ) errors.push(`${where}: unknown placeholder ${token}`);
    }
    if (msg.includes("%and bra%") && card.target_sex === 1)
      warnings.push(`${where}: %and bra% on a male-target card`);

    // Unknown fields (typo'd gates silently never fire)
    for (const key of Object.keys(card)) {
      if (!KNOWN_FIELDS.has(key)) errors.push(`${where}: unknown field "${key}"`);
    }
  });
}

const counts = Object.fromEntries(Object.entries(decks).map(([k, v]) => [k, v.length]));
console.log("Deck sizes:", counts, "total:", Object.values(counts).reduce((a, b) => a + b, 0));
if (warnings.length) console.log(`\n${warnings.length} warnings:\n` + warnings.slice(0, 40).join("\n"));
if (errors.length) {
  console.error(`\n${errors.length} errors:\n` + errors.slice(0, 80).join("\n"));
  process.exit(1);
}
console.log("All cards valid.");
