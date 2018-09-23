const randomRoll = () => Math.floor(Math.random() * 6);

export const chemicalFactory = (diceRoll) => {
  if (diceRoll <= 4) {
    return `Euphoric for ${randomRoll()} hours`;
  } else if (diceRoll >= 5 && diceRoll <= 8) {
    return `Hallucinogenic for ${randomRoll()} hours`;
  } else if (diceRoll >= 9 && diceRoll <= 12) {
    return `Stimulant for ${randomRoll()} hours`;
  } else if (diceRoll >= 13 && diceRoll <= 16) {
    return `Depressant for ${randomRoll()} hours`;
  } else if (diceRoll >= 17 && diceRoll <= 20) {
    return 'Nutrient supplement';
  } else if (diceRoll >= 21 && diceRoll <= 25) {
    return 'Antivenom';
  } else if (diceRoll >= 26 && diceRoll <= 30) {
    return 'Cures disease';
  } else if (diceRoll >= 31 && diceRoll <= 35) {
    return 'See in the dark for one hour';
  } else if (diceRoll >= 36 && diceRoll <= 45) {
    return 'Restores a number of Might Pool points equal to cypher level';
  } else if (diceRoll >= 46 && diceRoll <= 55) {
    return 'Restores a number of Speed Pool points equal to cypher level';
  } else if (diceRoll >= 56 && diceRoll <= 65) {
    return 'Restores a number of Intellect Pool points equal to cypher level';
  } else if (diceRoll >= 66 && diceRoll <= 75) {
    return 'Increases Might Edge by 1 for one hour';
  } else if (diceRoll >= 76 && diceRoll <= 85) {
    return 'Increases Speed Edge by 1 for one hour';
  } else if (diceRoll >= 86 && diceRoll <= 95) {
    return 'Increases Intellect Edge by 1 for one hour';
  } else if (diceRoll >= 96 && diceRoll <= 100) {
    return 'Restores all Pools to full';
  }
};

