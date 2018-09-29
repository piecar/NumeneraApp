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
  }
  return 'Restores all Pools to full';
};

export const detonation = (diceRoll) => {
  if (diceRoll <= 10) {
    return 'Cell-disrupting (harms only flesh)';
  } else if (diceRoll >= 11 && diceRoll <= 30) {
    return 'Corrosive';
  } else if (diceRoll >= 31 && diceRoll <= 40) {
    return 'Electrical discharge';
  } else if (diceRoll >= 41 && diceRoll <= 50) {
    return 'Heat drain (cold)';
  } else if (diceRoll >= 51 && diceRoll <= 75) {
    return 'Fire';
  }
  return 'Shrapnel';
};

export const gasBomb = (diceRoll) => {
  if (diceRoll <= 10) {
    return 'Thick smoke: occludes sight while the cloud lasts';
  } else if (diceRoll >= 11 && diceRoll <= 20) {
    return 'Choking gas: living creatures that breathe lose their actions to choking and coughing for a number of rounds equal to the cypher level.';
  } else if (diceRoll >= 21 && diceRoll <= 50) {
    return 'Poison gas: living creatures that breathe suffer damage equal to the cypher level.s';
  } else if (diceRoll >= 51 && diceRoll <= 60) {
    return 'Corrosive gas: everything suffers damage equal to the cypher level.';
  } else if (diceRoll >= 61 && diceRoll <= 65) {
    return 'Hallucinogenic gas: living creatures that breathe lose their actions to hallucinations and visions for a number of rounds equal to the cypher level.';
  } else if (diceRoll >= 66 && diceRoll <= 70) {
    return 'Nerve gas: living creatures that breathe suffer Speed damage equal to the cypher level.';
  } else if (diceRoll >= 71 && diceRoll <= 80) {
    return 'Mind-numbing gas: living creatures that breathe suffer Intellect damage equal to the cypher level.';
  } else if (diceRoll >= 81 && diceRoll <= 83) {
    return 'Fear gas: living creatures that breathe and think flee in a random direction in fear (or are paralyzed with fear) for a number of rounds equal to the cypher level.';
  } else if (diceRoll >= 84 && diceRoll <= 86) {
    return 'Amnesia gas: living creatures that breathe and think permanently lose all memory of the last minute.';
  } else if (diceRoll >= 87 && diceRoll <= 96) {
    return 'Sleep gas: living creatures that breathe fall asleep for a number of rounds equal to the cypher level or until awoken by a violent action or an extremely loud noise.';
  }
  return 'Rage gas: living creatures that breathe and think make a melee attack on the nearest creature and continue to do so for a number of rounds equal to the cypher level.';
};

