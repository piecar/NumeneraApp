const randomRoll = () => Math.floor(Math.random() * 6);

export const chemicalFactory = (diceRoll) => {
  if (diceRoll <= 4) {
    return `Euphoric for ${randomRoll()} hours`;
  } if (diceRoll >= 5 && diceRoll <= 8) {
    return `Hallucinogenic for ${randomRoll()} hours`;
  } if (diceRoll >= 9 && diceRoll <= 12) {
    return `Stimulant for ${randomRoll()} hours`;
  } if (diceRoll >= 13 && diceRoll <= 16) {
    return `Depressant for ${randomRoll()} hours`;
  } if (diceRoll >= 17 && diceRoll <= 20) {
    return 'Nutrient supplement';
  } if (diceRoll >= 21 && diceRoll <= 25) {
    return 'Antivenom';
  } if (diceRoll >= 26 && diceRoll <= 30) {
    return 'Cures disease';
  } if (diceRoll >= 31 && diceRoll <= 35) {
    return 'See in the dark for one hour';
  } if (diceRoll >= 36 && diceRoll <= 45) {
    return 'Restores a number of Might Pool points equal to cypher level';
  } if (diceRoll >= 46 && diceRoll <= 55) {
    return 'Restores a number of Speed Pool points equal to cypher level';
  } if (diceRoll >= 56 && diceRoll <= 65) {
    return 'Restores a number of Intellect Pool points equal to cypher level';
  } if (diceRoll >= 66 && diceRoll <= 75) {
    return 'Increases Might Edge by 1 for one hour';
  } if (diceRoll >= 76 && diceRoll <= 85) {
    return 'Increases Speed Edge by 1 for one hour';
  } if (diceRoll >= 86 && diceRoll <= 95) {
    return 'Increases Intellect Edge by 1 for one hour';
  }
  return 'Restores all Pools to full';
};

export const detonation = (diceRoll) => {
  if (diceRoll <= 10) {
    return 'Cell-disrupting (harms only flesh)';
  } if (diceRoll >= 11 && diceRoll <= 30) {
    return 'Corrosive';
  } if (diceRoll >= 31 && diceRoll <= 40) {
    return 'Electrical discharge';
  } if (diceRoll >= 41 && diceRoll <= 50) {
    return 'Heat drain (cold)';
  } if (diceRoll >= 51 && diceRoll <= 75) {
    return 'Fire';
  }
  return 'Shrapnel';
};

export const gasBomb = (diceRoll) => {
  if (diceRoll <= 10) {
    return 'Thick smoke: occludes sight while the cloud lasts';
  } if (diceRoll >= 11 && diceRoll <= 20) {
    return 'Choking gas: living creatures that breathe lose their actions to choking and coughing for a number of rounds equal to the cypher level.';
  } if (diceRoll >= 21 && diceRoll <= 50) {
    return 'Poison gas: living creatures that breathe suffer damage equal to the cypher level\'s';
  } if (diceRoll >= 51 && diceRoll <= 60) {
    return 'Corrosive gas: everything suffers damage equal to the cypher level.';
  } if (diceRoll >= 61 && diceRoll <= 65) {
    return 'Hallucinogenic gas: living creatures that breathe lose their actions to hallucinations and visions for a number of rounds equal to the cypher level.';
  } if (diceRoll >= 66 && diceRoll <= 70) {
    return 'Nerve gas: living creatures that breathe suffer Speed damage equal to the cypher level.';
  } if (diceRoll >= 71 && diceRoll <= 80) {
    return 'Mind-numbing gas: living creatures that breathe suffer Intellect damage equal to the cypher level.';
  } if (diceRoll >= 81 && diceRoll <= 83) {
    return 'Fear gas: living creatures that breathe and think flee in a random direction in fear (or are paralyzed with fear) for a number of rounds equal to the cypher level.';
  } if (diceRoll >= 84 && diceRoll <= 86) {
    return 'Amnesia gas: living creatures that breathe and think permanently lose all memory of the last minute.';
  } if (diceRoll >= 87 && diceRoll <= 96) {
    return 'Sleep gas: living creatures that breathe fall asleep for a number of rounds equal to the cypher level or until awoken by a violent action or an extremely loud noise.';
  }
  return 'Rage gas: living creatures that breathe and think make a melee attack on the nearest creature and continue to do so for a number of rounds equal to the cypher level.';
};

export const hunterSeeker = (diceRoll) => {
  if (diceRoll <= 50) {
    return 'Inflicts 8 points of damage.';
  } if (diceRoll >= 51 && diceRoll <= 80) {
    return 'Bears a poisoned needle that inflicts 3 points of damage plus poison';
  } if (diceRoll >= 81 && diceRoll <= 90) {
    return 'Explodes, inflicting 6 points of damage to all within immediate range';
  } if (diceRoll >= 91 && diceRoll <= 95) {
    return 'Shocks for 4 points of electricity damage, and stuns for one round per cypher level.';
  }
  return 'Covers target in sticky goo that immediately hardens, holding him fast until he breaks out\n'
    + 'with a Might action (difficulty equal to the cypher level + 2).';
};

export const imageProjector = (diceRoll) => {
  if (diceRoll <= 20) {
    return 'Terrifying creature of an unknown species, perhaps no longer alive in the world (10-foot [3 m] cube)';
  } if (diceRoll >= 21 && diceRoll <= 40) {
    return 'Huge machine that obscures sight (30-foot [9 m] cube)';
  } if (diceRoll >= 41 && diceRoll <= 50) {
    return 'Beautiful pastoral scene (50-foot [15 m] cube)';
  } if (diceRoll >= 51 && diceRoll <= 60) {
    return 'Food that looks delicious but may not be familiar (10-foot [3 m] cube)\n';
  } if (diceRoll >= 61 && diceRoll <= 80) {
    return 'Solid color that obscures sight (50-foot [15 m] cube)';
  }
  return 'Incomprehensible scene that is disorienting and strange (20-foot [6.1 m] cube)';
};

export const mentalScrambler = (diceRoll) => {
  if (diceRoll <= 30) {
    return 'Victims cannot act.';
  } if (diceRoll >= 31 && diceRoll <= 40) {
    return 'Victims cannot speak.';
  } if (diceRoll >= 41 && diceRoll <= 50) {
    return 'Victims move slowly (immediate range) and clumsily.';
  } if (diceRoll >= 51 && diceRoll <= 60) {
    return 'Victims cannot see or hear.';
  } if (diceRoll >= 61 && diceRoll <= 70) {
    return 'Victims lose all sense of direction, depth, and proportion.';
  } if (diceRoll >= 71 && diceRoll <= 80) {
    return 'Victims do not recognize anyone they know.';
  } if (diceRoll >= 81 && diceRoll <= 88) {
    return 'Victims suffer partial amnesia.';
  } if (diceRoll >= 89 && diceRoll <= 94) {
    return 'Victims suffer total amnesia.';
  } if (diceRoll >= 95 && diceRoll <= 98) {
    return 'Victims lose all inhibitions, revealing secrets and performing surprising actions.';
  }
  return 'Victims’ ethics are inverted.';
};

export const poisonEmotion = (diceRoll) => {
  if (diceRoll <= 20) {
    return 'Anger. Likely to attack anyone who disagrees with him. Very hard to interact with; the difficulty of all such actions is increased by two steps.';
  } if (diceRoll >= 21 && diceRoll <= 40) {
    return 'Fear. Flees in terror for one minute when threatened.';
  } if (diceRoll >= 41 && diceRoll <= 60) {
    return 'Lust. Cannot focus on any nonsexual activity.';
  } if (diceRoll >= 61 && diceRoll <= 75) {
    return 'Sadness. The difficulty of all tasks is increased by one step.';
  } if (diceRoll >= 76 && diceRoll <= 85) {
    return 'Complacency. Has no motivation. The difficulty of all tasks is increased by two steps.';
  } if (diceRoll >= 86 && diceRoll <= 95) {
    return 'Joy. Easy to interact with in a pleasant manner; the difficulty of all such actions is decreased by one step.';
  }
  return 'Love. Much easier to interact with; the difficulty of all such actions is decreased by two steps, but temporary attachment is likely.';
};

export const poisonExplosion = (diceRoll) => {
  if (diceRoll <= 25) {
    return 'The detonator is activated (must be within long range).';
  } if (diceRoll >= 26 && diceRoll <= 40) {
    return 'A specified amount of time passes.';
  } if (diceRoll >= 41 && diceRoll <= 50) {
    return 'The victim takes a specific action.';
  } if (diceRoll >= 51 && diceRoll <= 55) {
    return 'A specific note is sung or played on an instrument within short range.';
  } if (diceRoll >= 56 && diceRoll <= 60) {
    return 'The victim smells a specific scent within immediate range.';
  } if (diceRoll >= 61 && diceRoll <= 80) {
    return 'The victim comes within long range of the detonator.';
  }
  return 'The victim is no longer within long range of the detonator.';
};

export const poisonMindControlling = (diceRoll) => {
  if (diceRoll <= 20) {
    return 'Lays down for one minute with eyes closed when told to do so.';
  } if (diceRoll >= 21 && diceRoll <= 40) {
    return 'Flees in terror for one minute when threatened.';
  } if (diceRoll >= 41 && diceRoll <= 60) {
    return 'Answers questions truthfully for one minute.';
  } if (diceRoll >= 61 && diceRoll <= 75) {
    return 'Attacks close friend for one round when within immediate range.';
  } if (diceRoll >= 76 && diceRoll <= 85) {
    return 'Obeys next verbal command given (if it is understood).';
  } if (diceRoll >= 86 && diceRoll <= 95) {
    return 'For 28 hours, becomes sexually attracted to the next creature of its own species that it sees.';
  }
  return 'Moves toward the next red object seen in lieu of all other actions, ignoring self preservation';
};

export const rayEmitter = (diceRoll) => {
  if (diceRoll <= 50) {
    return 'Heat/concentrated light.';
  } if (diceRoll >= 51 && diceRoll <= 60) {
    return 'Cell-disrupting radiation';
  } if (diceRoll >= 61 && diceRoll <= 80) {
    return 'Force';
  } if (diceRoll >= 81 && diceRoll <= 87) {
    return 'Magnetic wave';
  } if (diceRoll >= 88 && diceRoll <= 93) {
    return 'Molecular bond disruption.';
  }
  return 'Concentrated cold';
};

export const rejuvenator = (diceRoll) => {
  if (diceRoll <= 50) {
    return 'Might Pool';
  } if (diceRoll >= 51 && diceRoll <= 75) {
    return 'Speed Pool';
  }
  return 'Intellect Pool';
};

export const skillBoost = (diceRoll) => {
  if (diceRoll <= 15) {
    return 'Melee Attack';
  } if (diceRoll >= 16 && diceRoll <= 30) {
    return 'Ranged Attack';
  } if (diceRoll >= 31 && diceRoll <= 40) {
    return 'Speed Defense';
  } if (diceRoll >= 41 && diceRoll <= 50) {
    return 'Might Defense';
  } if (diceRoll >= 51 && diceRoll <= 60) {
    return 'Intellect Defense';
  } if (diceRoll >= 61 && diceRoll <= 68) {
    return 'Jumping';
  } if (diceRoll >= 69 && diceRoll <= 76) {
    return 'Climbing';
  } if (diceRoll >= 77 && diceRoll <= 84) {
    return 'Running';
  } if (diceRoll >= 85 && diceRoll <= 92) {
    return 'Swimming.';
  } if (diceRoll >= 93 && diceRoll <= 94) {
    return 'Sneaking';
  } if (diceRoll >= 95 && diceRoll <= 96) {
    return 'Balancing';
  } if (diceRoll >= 97 && diceRoll <= 98) {
    return 'Perceiving';
  } if (diceRoll >= 99 && diceRoll <= 99) {
    return 'Carrying';
  }
  return 'Escaping';
};
