import {actionCards as baseActionCards} from "./actionCards";
import {fateCards as baseFateCards} from "./fateCards";
import {chamberCards as baseChamberCards} from "./chamberCards";
import {stageCards as baseStageCards} from "./stageCards";
import {actionExpansionLow} from "./expansion/actionExpansionLow";
import {actionExpansionHigh} from "./expansion/actionExpansionHigh";
import {chamberExpansion} from "./expansion/chamberExpansion";
import {stageExpansion} from "./expansion/stageExpansion";
import {fateExpansion} from "./expansion/fateExpansion";
import toys from "./toys.json";
import {Gender, Sexuality, TargetSex, genderToTargetSex, PREF_KEYS} from "../types/game";

// Original decks + expansion batches (see docs/card-spec.md). New card
// batches are a new file in expansion/ plus a spread here.
const actionCards = [...baseActionCards, ...actionExpansionLow, ...actionExpansionHigh];
const chamberCards = [...baseChamberCards, ...chamberExpansion];
const stageCards = [...baseStageCards, ...stageExpansion];
const fateCards = [...baseFateCards, ...fateExpansion];

// The used-card pile lives in localStorage so it survives reloads, but it is
// always read at draw time (never cached at module load) so a new game can
// reset it without a page refresh.
export const getUsedCardPile = () => {
    try {
        return JSON.parse(localStorage.getItem('cardData')) || [];
    } catch (error) {
        console.error('Failed to read used card pile:', error);
        return [];
    }
};

export const resetUsedCards = () => {
    localStorage.removeItem('cardData');
};

const markCardUsed = (card) => {
    const pile = getUsedCardPile();
    pile.push(card);
    localStorage.setItem('cardData', JSON.stringify(pile));
};

// A card that stages more than two bodies (number_of_participants >= 3)
// fills the extra slots here: someone not already in the scene, able to
// interact with the target, and passing the card's participant gates.
// Returns null when the table can't field enough people, so the caller
// skips to the next card instead of leaving a literal %player2% on screen.
const pickExtraParticipants = ({card, gameData, target, exclude}) => {
    const needed = Math.max((card.number_of_participants || 2) - 2, 0);
    if (!needed) return [];
    const excludeIds = exclude.map((p) => p.id);
    const candidates = gameData.players.filter(
        (p) =>
            !excludeIds.includes(p.id) &&
            canPlayersInteract({owner: target, player: p}) &&
            canDoAction({player: p, card, isTarget: false})
    );
    if (candidates.length < needed) return null;
    return shuffle(candidates).slice(0, needed);
};

export const getActionCardforTarget = ({
                                           target,
                                           player,
                                           gameData,
                                           skip = 0,
                                       }) => {
    const task = getCardForTargetInDeck({
        target,
        deck: actionCards,
        gameData,
        skip,
    });
    if (!task) return null;
    if (!canDoAction({player: target, card: task, isTarget: true})) {
        console.log("target cannot do action");
        return getActionCardforTarget({target, player, gameData, skip: skip + 1});
    }
    if (!canDoAction({player, card: task, isTarget: false})) {
        console.log("player cannot do action");
        return getActionCardforTarget({target, player, gameData, skip: skip + 1});
    }
    const extras = pickExtraParticipants({
        card: task,
        gameData,
        target,
        exclude: [player, target],
    });
    if (!extras) {
        console.log("not enough participants for card");
        return getActionCardforTarget({target, player, gameData, skip: skip + 1});
    }
    return replacePlaceholders({task, players: [player, ...extras], target});
};

export const getEncounterCardForPlayer = ({target, gameData, skip = 0}) => {
    // Start by getting the task. The player will be the target
    const card = getCardForTargetInDeck({
        target,
        deck: actionCards,
        gameData,
        skip,
    });
    // Deck exhausted: stop here rather than recursing forever.
    if (!card) return null;

    const retry = () => getEncounterCardForPlayer({target, gameData, skip: skip + 1});

    // The target must pass the card's target gates...
    if (!canDoAction({player: target, card, isTarget: true})) return retry();

    // ...and the partner must be someone else, compatible with the target,
    // who passes the card's participant gates.
    const availablePlayers = gameData.players.filter((player) => {
        if (player.id === target.id) return false;
        if (!canPlayersInteract({owner: target, player})) return false;
        if (!canDoAction({player, card, isTarget: false})) return false;
        return true;
    });

    if (!availablePlayers.length) return retry();

    // Shuffle players and choose random one to interact with
    const player = shuffle(availablePlayers)[0];
    const extras = pickExtraParticipants({
        card,
        gameData,
        target,
        exclude: [target, player],
    });
    if (!extras) return retry();
    return replacePlaceholders({task: card, players: [player, ...extras], target});
};

export const getChamberCardForPlayer = ({player, gameData}) => {
    const {task, players} = getCardForPlayerInDeck({
        player,
        deck: chamberCards,
        gameData,
    });
    return replacePlaceholders({task, players, target: player});
};

export const getStageCardForPlayer = ({player, gameData}) => {
    console.log("player:", player);
    const {task, players} = getCardForPlayerInDeck({
        player,
        deck: stageCards,
        gameData,
    });
    console.log("Stage Task: ", task);
    return replacePlaceholders({task, players, target: player});
};

export const getFateCardForPlayer = ({player, gameData}) => {
    console.log("...player:", player);
    const {task, players} = getCardForPlayerInDeck({
        player,
        deck: fateCards,
        gameData,
    });
    return replacePlaceholders({task, players, target: player});
};

const getCardForPlayerInDeck = ({player, deck, skip = 0, gameData}) => {
    console.log("PLAYER:", player);
    const card = getCardForTargetInDeck({target: player, deck, skip, gameData});
    if (!card) return {};

    // Get list of players we can interact with

    const availablePlayers = gameData.players.filter((other) => {
        // Never cast someone opposite themselves ("Alice, demonstrate on Alice").
        if (other.id === player.id) return false;
        if (!canPlayersInteract({owner: other, player})) return false;
        if (!canDoAction({player: other, card, isTarget: false})) return false;
        return true;
    });

    console.log("Available Players: ", availablePlayers);

    if (card.number_of_participants > availablePlayers.length + 1) {
        console.log("Getting new card...");
        return getCardForPlayerInDeck({player, deck, skip: skip + 1, gameData});
    }

    // Check targets preferences are met
    if (!canDoAction({player, card, isTarget: true})) {
        console.log("Getting new card...");
        return getCardForPlayerInDeck({player, deck, skip: skip + 1, gameData});
    }

    // Get some random players from list
    const shuffled = shuffle(availablePlayers);
    const players = shuffled.slice(0, card.number_of_participants);

    return {
        task: card,
        players,
    };
};

// A card may carry `target_<pref>` / `player_<pref>` gates; each one only
// passes if that person ticked the matching pref in setup. Driven by
// PREF_KEYS so a new pref is one list entry, not two more copy-paste blocks.
export const canDoAction = ({player, card, isTarget}) => {
    if (!card) return null;
    const role = isTarget ? "target" : "player";
    return PREF_KEYS.every(
        (key) => !card[`${role}_${key}`] || Boolean(player.prefs?.[key])
    );
};

const shuffle = (array) => {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

const replacePlaceholders = ({task, players, target}) => {
    const p = ["1", "2", "3", "4", "5"];
    console.log("Replacing placeholders for ", task);
    console.log(players, target);
    if (!task) return null;

    // Work on a copy: the decks are shared module data, and writing player
    // names into them would bake this game's names into every later draw.
    task = {...task};

    task.message = task.message.replaceAll("%target%", target.name);
    task.message = task.message.replaceAll(`%th%`, target.pronouns.he);
    task.message = task.message.replaceAll(`%ts%`, target.pronouns.him);
    task.message = task.message.replaceAll(`%tp%`, target.pronouns.his);

    if (target.gender === Gender.Female) {
        task.message = task.message.replaceAll("%and bra%", "and bra");
    } else {
        task.message = task.message.replaceAll("%and bra%", "");
    }

    // %dNN% = NN seconds, %mN% = N minutes. The longest token present wins
    // the countdown. (The old hand-rolled version only replaced %m3% when
    // %m2% was also in the text, leaving literal "%m3%" on screen.)
    const TIMER_TOKENS = [
        ["%d10%", 10], ["%d20%", 20], ["%d30%", 30], ["%d45%", 45],
        ["%d60%", 60], ["%d90%", 90],
        ["%m1%", 60], ["%m2%", 120], ["%m3%", 180],
    ];
    for (const [token, seconds] of TIMER_TOKENS) {
        if (task.message.includes(token)) {
            task.message = task.message.replaceAll(token, token.slice(2, -1));
            task.timer = Math.max(task.timer || 0, seconds);
        }
    }

    p.forEach((i) => {
        if (players[i - 1]) {
            const player = players[i - 1];
            task.message = task.message.replaceAll(`%player${i}%`, player.name);
            task.message = task.message.replaceAll(`%${i}h%`, player.pronouns.he);
            task.message = task.message.replaceAll(`%${i}s%`, player.pronouns.him);
            task.message = task.message.replaceAll(`%${i}p%`, player.pronouns.his);
        }
    });

    return task;
};

export const canPlayersInteract = ({owner, player}) => {
    if (!owner || !player) return false;
    const genders = [Gender.Male, Gender.Female];
    if (!genders.includes(player.gender) || !genders.includes(owner.gender)) return false;

    if (player.gender === owner.gender) {
        // Same sex - neither can be straight
        return player.sexuality !== Sexuality.Straight && owner.sexuality !== Sexuality.Straight;
    }
    // Opposite sex - neither can be gay
    return player.sexuality !== Sexuality.Gay && owner.sexuality !== Sexuality.Gay;
};

const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

const getCardForTargetInDeck = ({
                                    target,
                                    deck = actionCards,
                                    skip = 0,
                                    gameData,
                                    allSpice = false,
                                    includeUsed = false
                                }) => {
    console.log({target});

    let deckCopy = [...deck];
    shuffleDeck(deckCopy);

    if (!target) return;

    // Filter by spice level
    if (!allSpice) {
        deckCopy = deckCopy.filter(
            (task) =>
                task.spice_level === gameData.spiceLevel || task.spice_level === -1
        );

        console.log(
            `${deckCopy.length} Action cards at Spice Level ${gameData.spiceLevel}`
        );
    } else {
        deckCopy = deckCopy.filter(
            (task) =>
                task.spice_level <= gameData.spiceLevel || task.spice_level === -1
        );
        console.log(`${deckCopy.length} Action cards at all spice levels`);
    }

    // A card that needs a toy is only drawn if the group ticked that toy in
    // setup. (The old filter returned a .map() array, which is always truthy,
    // so toy gates were silently ignored.) AddToys stores keys lowercased, so
    // accept either casing to stay compatible with existing saves.
    deckCopy = deckCopy.filter((task) =>
        toys.every(
            (toy) =>
                (!task[toy] && !task[toy.toLowerCase()]) ||
                gameData.toys?.[toy] ||
                gameData.toys?.[toy.toLowerCase()]
        )
    );

    console.log(`${deckCopy.length} Action cards with toys`);

    // Filter by current dress level
    deckCopy = deckCopy.filter((task) => {
        if (
            task.dress_level_from <= target.dress &&
            task.dress_level_to >= target.dress
        )
            return task;
        return null;
    });

    console.log(`${deckCopy.length} Action cards at dress level: ${target.dress}`);

    // Filter by target sex
    deckCopy = deckCopy.filter((task) => {
        if (task.target_sex === TargetSex.Any) return task;
        if (target.gender !== undefined && task.target_sex === genderToTargetSex(target.gender))
            return task;
        return null;
    });

    console.log(
        `${deckCopy.length} Action cards for correct target gender: ${target.gender}`
    );

    // Exclude used cards
    if (!includeUsed) {
        const usedNames = new Set(getUsedCardPile().map((card) => card.name));
        if (usedNames.size) {
            deckCopy = deckCopy.filter((task) => !usedNames.has(task.name));
        }
    }

    console.log(`${deckCopy.length} Action cards that are not excluded`);

    if (!deckCopy.length && !allSpice) {
        console.log('Getting cards from all spices')
        return getCardForTargetInDeck({
            target,
            deck,
            skip,
            gameData,
            allSpice: true,
        });
    }

    if (!deckCopy.length && !includeUsed) {
        console.log('Getting cards from all spices')
        return getCardForTargetInDeck({
            target,
            deck,
            skip,
            gameData,
            allSpice: true,
            includeUsed: true
        });
    }

    if (!deckCopy.length) {
        console.log(`No cards found for target: ${target}`)
    }

    console.log({skip})
    if (skip >= deckCopy.length) return null;

    if (gameData.totalMoves % 3 === 0) {
        const prioritised = deckCopy.filter(card => card.lose_dress_level === true);

        if (prioritised.length && prioritised.length > skip) {
            deckCopy = prioritised
        }
    }

    console.log("Returning", deckCopy[skip]);

    markCardUsed(deckCopy[skip]);
    return deckCopy[skip];
};
