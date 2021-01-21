const nouns = [
  "iguana",
  "platypus",
  "piece of bacon",
  "seagull",
  "dumpster",
  "hamster",
];
const adjectives = [
  "weird",
  "lucrative",
  "attractive",
  "awkward",
  "interesting",
  "bodacious",
];
const fillerNoun = nouns[Math.floor(Math.random() * 6)];
const fillerAdjective = adjectives[Math.floor(Math.random() * 6)];
console.log(fillerNoun);
let messages = [
  `Frankly my ${fillerNoun}, I don't give a ${fillerNoun}.`,
  `I'm gonna make him a ${fillerNoun} he can't refuse.`,
  `May the ${fillerNoun} be with you.`,
  `Love means never having to say you're ${fillerAdjective}.`,
  `${fillerAdjective} my dear ${fillerNoun}.`,
  `Today, I consider myself the luckiest ${fillerNoun} on the face of the earth.`,
  `Say hello to my little ${fillerNoun}!`,
  `Fasten your seatbelts. It's going to be a ${fillerAdjective} night.`,
];
let yourMessage = messages[Math.floor(Math.random() * 7)];
console.log(yourMessage);
