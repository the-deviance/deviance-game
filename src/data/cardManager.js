import { actionCards } from "./actionCards";
import { fateCards } from "./fateCards";
import { chamberCards } from "./chamberCards";
import { stageCards } from "./stageCards";
import toys from "./toys.json";

const usedCardPile = [];

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
  if (!canDoAction({ player: target, card: task, isTarget: true })) {
    console.log("target cannot do action");
    return getActionCardforTarget({ target, player, gameData, skip: skip + 1 });
  }
  if (!canDoAction({ player, card: task, isTarget: false })) {
    console.log("player cannot do action");
    return getActionCardforTarget({ target, player, gameData, skip: skip + 1 });
  }
  usedCardPile.push(task);
  return replacePlaceholders({ task, players: [player], target });
};

export const getEncounterCardForPlayer = ({ target, gameData, skip = 0 }) => {
  // Start by getting the task. The player will be the target
  const card = getCardForTargetInDeck({
    target,
    deck: actionCards,
    gameData,
    skip,
  });

  const availablePlayers = gameData.players.filter((player) => {
    if (!canPlayersInteract({ owner: target, player })) return false;
    if (!canDoAction({ player: target, card, isTarget: false })) return false;
    return true;
  });

  if (!availablePlayers.length) {
    return getEncounterCardForPlayer({ target, gameData, skip: skip + 1 });
  }

  // Shuffle players and choose random one to interact with
  const player = shuffle(availablePlayers)[0];

  usedCardPile.push(card);
  return replacePlaceholders({ task: card, players: [player], target });
};

export const getChamberCardForPlayer = ({ player, gameData }) => {
  const { task, players } = getCardForPlayerInDeck({
    player,
    deck: chamberCards,
    gameData,
  });
  usedCardPile.push(task);
  return replacePlaceholders({ task, players, target: player });
};

export const getStageCardForPlayer = ({ player, gameData }) => {
  console.log("player:", player);
  const { task, players } = getCardForPlayerInDeck({
    player,
    deck: stageCards,
    gameData,
  });
  usedCardPile.push(task);
  console.log("Stage Task: ", task);
  return replacePlaceholders({ task, players, target: player });
};

export const getFateCardForPlayer = ({ player, gameData }) => {
  console.log("...player:", player);
  const { task, players } = getCardForPlayerInDeck({
    player,
    deck: fateCards,
    gameData,
  });
  usedCardPile.push(task);
  return replacePlaceholders({ task, players, target: player });
};

const getCardForPlayerInDeck = ({ player, deck, skip = 0, gameData }) => {
  console.log("PLAYER:", player);
  const card = getCardForTargetInDeck({ target: player, deck, skip, gameData });
  if (!card) return {};

  // Get list of players we can interact with

  const availablePlayers = gameData.players.filter((target) => {
    console.log("target: ", target);
    if (!canPlayersInteract({ owner: target, player })) return false;
    if (!canDoAction({ player: target, card, isTarget: false })) return false;
    return true;
  });

  console.log("Available Players: ", availablePlayers);

  if (card.number_of_participants > availablePlayers.length + 1) {
    console.log("Getting new card...");
    return getCardForPlayerInDeck({ player, deck, skip: skip + 1, gameData });
  }

  // Check targets preferences are met
  if (!canDoAction({ player, card, isTarget: true })) {
    console.log("Getting new card...");
    return getCardForPlayerInDeck({ player, deck, skip: skip + 1, gameData });
  }

  // Get some random players from list
  const shuffled = shuffle(availablePlayers);
  const players = shuffled.slice(0, card.number_of_participants);

  return {
    task: card,
    players,
  };
};

const canDoAction = ({ player, card, isTarget }) => {
  if (!card) return null;
  // player.prefs = {
  //   dominant: false,
  //   submissive: false,
  //   humiliation_giving: false,
  //   humiliation_recieving: false,
  //   anal_giving: false,
  //   anal_recieving: false,
  //   blindfolded: false,
  //   resisting: false,
  // };

  if (isTarget) {
    if (card.target_dominant && !player.prefs?.dominant) return false;
    if (card.target_submissive && !player.prefs?.submissive) return false;
    if (card.target_humiliation_giving && !player.prefs?.humiliation_giving)
      return false;
    if (
      card.target_humiliation_recieving &&
      !player.prefs?.humiliation_recieving
    )
      return false;
    if (card.target_anal_giving && !player.prefs?.anal_giving) return false;
    if (card.target_anal_recieving && !player.prefs?.anal_recieving)
      return false;
    if (card.target_blindfolded && !player.prefs?.blindfolded) return false;
    if (card.target_resisting && !player.prefs?.resisting) return false;
  } else {
    if (card.player_dominant && !player.prefs?.dominant) return false;
    if (card.player_submissive && !player.prefs?.submissive) return false;
    if (card.player_humiliation_giving && !player.prefs?.humiliation_giving)
      return false;
    if (
      card.player_humiliation_recieving &&
      !player.prefs?.humiliation_recieving
    )
      return false;
    if (card.player_anal_giving && !player.prefs?.anal_giving) return false;
    if (card.player_anal_recieving && !player.prefs?.anal_recieving)
      return false;
    if (card.player_blindfolded && !player.prefs?.blindfolded) return false;
    if (card.player_resisting && !player.prefs?.resisting) return false;
  }
  return true;
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

const replacePlaceholders = ({ task, players, target }) => {
  const p = ["1", "2", "3", "4", "5"];
  console.log("Replacing placeholders for ", task);
  console.log(players, target);
  if (!task) return null;

  task.message = task.message.replaceAll("%target%", target.name);
  task.message = task.message.replaceAll(`%th%`, target.pronouns.he);
  task.message = task.message.replaceAll(`%ts%`, target.pronouns.him);
  task.message = task.message.replaceAll(`%tp%`, target.pronouns.his);

  if (target.gender === 2) {
    task.message.replaceAll("%and bra%", "and bra");
  } else {
    task.message.replaceAll("%and bra%", "");
  }

  if (task.message.includes("%d10%")) {
    task.message = task.message.replaceAll("%d10%", "10");
    task.timer = 10;
  }
  if (task.message.includes("%d20%")) {
    task.message = task.message.replaceAll("%d20%", "60");
    task.timer = 20;
  }
  if (task.message.includes("%d30%")) {
    task.message = task.message.replaceAll("%d30%", "30");
    task.timer = 30;
  }
  if (task.message.includes("%d45%")) {
    task.message = task.message.replaceAll("%d45%", "45");
    task.timer = 45;
  }
  if (task.message.includes("%d60%")) {
    task.message = task.message.replaceAll("%d60%", "60");
    task.timer = 60;
  }
  if (task.message.includes("%d90%")) {
    task.message = task.message.replaceAll("%d90%", "90");
    task.timer = 90;
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

const canPlayersInteract = ({ owner, player }) => {
  console.log("Owner:", owner);
  console.log("Player:", player);
  if (!owner || !player) return false;
  if (player.gender === 0) {
    // Player is male
    if (owner.gender === 0) {
      // Owner is male - both must be gay, bi, or curious
      if (player.sexuality > 0 && owner.sexuality > 0) return true;
    } else if (owner.gender === 1) {
      // Owner is female - both must be not gay
      if (player.sexuality !== 1 && owner.sexuality !== 1) return true;
    } else if (owner.gender === 2) {
      // Owner is neutral - THIS MAKES NO SENSE!!!
    }
  } else if (player.gender === 1) {
    // Player is femail
    if (owner.gender === 1) {
      // Owner is male - both must be gay, bi, or curious
      if (player.sexuality > 0 && owner.sexuality > 0) return true;
    } else if (owner.gender === 0) {
      // Owner is male - both must be not gay
      if (player.sexuality !== 1 && owner.sexuality !== 1) return true;
    }
  }
  return false;
};

const getCardForTargetInDeck = ({
  target,
  deck = actionCards,
  skip = 0,
  gameData,
  allSpice = false,
}) => {
  const deckCopy = [...deck];
  if (!target) return;

  // Filter by spice level
  if (!allSpice) {
    deck = deck.filter(
      (task) =>
        task.spice_level === gameData.spiceLevel || task.spice_level === -1
    );

    console.log(
      `${deck.length} Action cards at Spice Level ${gameData.spiceLevel}`
    );
  } else {
    deck = deck.filter(
      (task) =>
        task.spice_level <= gameData.spiceLevel || task.spice_level === -1
    );
    console.log(`${deck.length} Action cards at all spice levels`);
  }

  // Filter out toys
  deck = deck.filter((task) => {
    return toys.map((toy) => {
      if (task[toy]) {
        if (gameData.toys[toy]) return task;
      } else {
        return task;
      }
      return null;
    });
  });

  console.log(`${deck.length} Action cards with toys`);

  // Filter by current dress level
  deck = deck.filter((task) => {
    if (
      task.dress_level_from <= target.dress &&
      task.dress_level_to >= target.dress
    )
      return task;
    return null;
  });

  console.log(`${deck.length} Action cards at dress level: ${target.dress}`);

  // Filter by target sex
  // 0 = both
  // 1 = male
  // 2 = female
  deck = deck.filter((task) => {
    if (task.target_sex === target.gender + 1 || task.target_sex === 0)
      return task;
    return null;
  });

  console.log(
    `${deck.length} Action cards for correct target gender: ${target.gender}`
  );

  // Exclude used cards
  deck = deck.filter((task) => !usedCardPile.includes(deck[skip]));

  console.log(`${deck.length} Action cards that are not excluded`);

  if (!deck.length && !allSpice) {
    return getCardForTargetInDeck({
      target,
      deckCopy,
      skip,
      gameData,
      allSpice: true,
    });
  }
  if (!deck.length) {
    console.log("Used card pile: ", usedCardPile);
  }

  if (skip >= deck.length) return null;

  console.log("Returning", deck[skip]);
  return deck[skip];
};
