/* Randomised flavour text for the system modals, so the admin moments
   (buying, rent, being broke, an empty deck) stay in character instead
   of reading like an error dialog. Placeholders use {name} syntax and
   are resolved by pickFlavour. */

const LINES = {
  broke_header: [
    "Oh Dear, How Embarrassing",
    "Not Tonight, Big Spender",
    "The Bank Says No",
    "Declined, Darling",
    "Champagne Taste, Lemonade Budget",
    "Skint",
  ],
  broke: [
    "You can't afford this, sweetheart. Flutter those eyelashes at someone richer.",
    "Your wallet said no before you could say yes. Walk away with what's left of your dignity.",
    "All that enthusiasm and not a penny to back it up. Story of the evening.",
    "£{price}? With your balance? That's adorable.",
    "You couldn't afford the doormat, let alone what goes on behind it.",
    "Broke AND needy. Luckily only one of those is fixable tonight.",
  ],
  purchase: [
    "Make {name} yours, and everyone who lands here will owe you... something.",
    "Buy it, and anyone who stumbles in pays your price. In cash or in kind.",
    "Your name on the deed means your rules under this roof.",
    "Claim it. Landlords around here collect more than rent.",
    "{name} could be yours. Think of all the fun you could charge for.",
    "Snap it up and every trespasser becomes your plaything. Well, their wallet does.",
  ],
  rent: [
    "{owner} owns this little den of sin, and entry costs £{rent}. Pay up or work it off.",
    "You're on {owner}'s turf now. £{rent}, or make them an offer they can't refuse.",
    "Trespassing on {owner}'s property. The fine is £{rent}, payable in cash. Negotiable in other currencies.",
    "{owner} doesn't do free samples. £{rent}, please.",
    "Welcome to {owner}'s place. The cover charge is £{rent}. Services not included.",
    "Caught sneaking around {owner}'s property. £{rent}, or beg nicely and work it off.",
  ],
  no_cards: [
    "The deck needs a breather, even if you don't. Roll on.",
    "Even our filthy imagination has limits. Congratulations, you've found them.",
    "Nothing in the deck for this one. Consider it a mercy.",
    "The cards are blushing. Move along.",
    "We've run dry. You lot clearly haven't.",
  ],
};

export function pickFlavour(key, vars = {}) {
  const options = LINES[key] || [];
  if (!options.length) return "";
  const line = options[Math.floor(Math.random() * options.length)];
  return line.replace(/\{(\w+)\}/g, (match, k) =>
    vars[k] !== undefined ? String(vars[k]) : match
  );
}

export { LINES as FLAVOUR_LINES };
