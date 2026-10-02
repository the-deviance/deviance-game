# Deviance Card Spec

The single reference for writing cards. All decks share one schema; the deck a card
lives in decides where on the board it gets drawn.

## Decks

| Deck | File | Drawn when | Flavour |
|---|---|---|---|
| Action | `actionCards` | Landing on owned property / general play | Bread and butter. Mostly 2 people (target + player1). |
| Chamber | `chamberCards` | The Dungeon tile | Kink: bondage, impact, control, sensation. |
| Stage | `stageCards` | The Theatre tile | Performance for the whole group, 1-5 participants. |
| Fate | `fateCards` | Chance tile | Meta: money, opt-outs, quick dares, twists. |

## Schema

```js
{
  name: "Unique Name",             // REQUIRED, unique across ALL decks (used-card pile keys on it)
  message: "...",                  // REQUIRED, the card text with placeholders
  target_sex: 0,                   // anatomy the card needs: 0 = anyone, 1 = target has a penis, 2 = target has a vulva
  spice_level: 1,                  // see "Spice levels" below; -1 = any level (pure utility cards)
  dress_level_from: 0,             // card only drawn while target's dress level is in [from, to]
  dress_level_to: 3,               // 0 fully clothed, 1 topless, 2 underwear, 3 naked
  number_of_participants: 2,       // TOTAL people involved INCLUDING the target
  appropriate_for_bi_curious: true,// false if it requires explicit same-sex genital contact

  // Optional effects (handled by the modals):
  lose_dress_level: true,          // target removes a layer when done
  delta_money: 200,                // +/- money for the target (fate deck)
  delta_optOut: 1,                 // +/- opt-out tokens (fate deck)
  can_opt_out: false,              // forbid opting out (RARE, only for harmless meta cards)

  // Toy gates: card only drawn if the group ticked the toy. Exact key from toys.json:
  // Dildo, Scissors, Blindfold, Ice, Lube, Rope, Cream, Paddle, Collar,
  // Clothespin, Leash, Sponge, "Massage Oil", Honey, Carrot, Gag
  Blindfold: true,

  // Orgasm flags: set when the card REQUIRES someone to actually climax
  // (not edging/denial). target_orgasms = the target comes; player_orgasms =
  // a non-target participant comes. The engine uses these for the per-player
  // "one orgasm ends my night" toggle (defaulted on for penis-owners at
  // setup): toggle-on players only get these cards at spice level 5;
  // everyone else draws them at the card's printed level. Always pair with
  // the matching will_orgasm consent gate below.
  target_orgasms: true,
  player_orgasms: false,

  // Preference gates: card only drawn if that person ticked the pref in setup.
  // Prefix target_ (the person whose card it is) or player_ (the other participant).
  // Keys: dominant, submissive, humiliation_giving, humiliation_receiving,
  //       anal_giving, anal_receiving, oral_giving, oral_receiving,
  //       pain_giving, pain_receiving, restraining, restrained,
  //       blindfolded, forceful, resisting, will_orgasm, exhibitionism,
  //       feet, roleplay
  target_pain_receiving: true,
  player_pain_giving: true,
}
```

## Placeholders

- `%target%` the target's name; pronouns `%th%` (he/she/they), `%ts%` (him/her/them), `%tp%` (his/her/their)
- `%player1%`..`%player5%`; pronouns `%1h%`/`%1s%`/`%1p%` etc.
- Timers (set `task.timer` and show countdown): `%d10% %d20% %d30% %d45% %d60% %d90%` seconds, `%m1% %m2%` minutes
- `%and bra%` renders "and bra" for female targets, empty otherwise

## Spice levels

Scale is 1-5, hardcoded (recategorised Oct 2026 from the old 0-3 scale). Grade
by the MOST explicit act the card instructs, not what it alludes to:

1. **Kissing & touching** - kissing, cuddling, non-intimate massage, flirty or
   verbal dares, teasing entirely over clothes. No breast/genital contact.
2. **Breasts & genitals (touching)** - breast/nipple play, groping over or
   briefly under clothes, stripping/nudity, grinding, spanking, ice/wax,
   light bondage without genital stimulation.
3. **Fingering & teasing oral** - manual genital stimulation, brief or teasing
   oral contact, edging by hand, external toys on genitals.
4. **Full oral & sex** - sustained oral sex, penetrative sex, penetrative
   (vaginal) toys, orgasm instructions, 69.
5. **Anal, threesomes & hardcore** - ANY anal play, sexual acts with 3+ active
   participants, DP, heavy impact/pain play, cum play.

`-1` = any level: pure utility cards (money/opt-out/move effects, no physical
act). A 3-person card where the third only watches/instructs/judges grades by
the act, not automatically 5. Between two levels, pick the higher.

## Gating rules of thumb

Gate EVERYTHING that needs specific consent: any impact/pain → pain gates; any tying →
restraining/restrained; humiliation/degradation → humiliation gates; anal → anal gates;
oral → oral gates; made to orgasm → target_will_orgasm; overpowering/rough → forceful
(giver) + resisting (receiver); performing solo for the group → exhibitionism.
Plain kissing, massage, stripping and touching at the card's spice level need no pref gate.

Don't hardcode anyone's anatomy or gender in the message unless `target_sex` is set;
use pronoun placeholders. player1 can be anyone the target mutually ticked at setup
(pairing is explicit per-player consent, not orientation inference).

## Hard content rails

Everything consensual-framed and doable in a living room with the toys list. NEVER:
breath play/choking, fire, knives/blood, scat/watersports, photos or recording, anything
involving non-players or leaving the property, forced intoxication. "Resisting" cards are
declared-preference roleplay only and must read that way.

## Tone

Playful, cheeky, direct second person. Vary the voice: some cards are game-show host,
some are purring narrator, some are drill sergeant (roleplay-gated). Short setup, clear
instructions, a sting in the tail. Match the existing decks.
