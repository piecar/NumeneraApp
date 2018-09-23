const formFactors = [
  [1, 'Gloves'],
  [2, 'Handles with powerful suction cups'],
  [3, 'Injector'],
  [4, 'Pill'],
  [5, 'Ingestible liquid'],
  [6, 'Glove of synth'],
  [7, 'Small handheld device'],
  [8, 'Crystal nodule affixed to a melee weapon'],
  [9, 'Crystal nodule affixed to armor'],
];

export class Cypher {
  constructor(name, anoetic, levelModifier, formFactorList, effect) {
    this.name = name;
    this.anoetic = anoetic;
    this.levelModifier = levelModifier;
    this.formFactorList = formFactorList;
    this.effect = effect;
  }

  formFactor() {
    return this.formFactorList[Math.floor(Math.random() * this.formFactorList.length)];
  }
}

const formMap = new Map(formFactors);

const cyphers = [
  new Cypher('Adhesion Clamps', true, 0, [formMap.get(1), formMap.get(2)], 'Allows for automatic climbing of any surface, even horizontal ones,. Lasts for twenty minutes'),
  new Cypher('Antivenom', true, 2, [formMap.get(3), formMap.get(4), formMap.get(5)], 'Renders users immune to poisons of the same level or lower (and ends any ongoing effects).'),
  new Cypher('Attractor', false, 4, [formMap.get(6), formMap.get(7)], 'One unanchored item your size or smaller within long range is drawn immediately to the device. This takes one Round. The item has no momentum when it arrives'),
  new Cypher('Banishing Nodule', true, 0, [formMap.get(8)], 'For the next 28 hours, each time the weapon the nodule is attached to strikes a solid creature of object, it generates a burst of energy that teleports the creature or object struck and immediate distance in a random direction (not up or down). The difficult of the teleported creature\'s actions (including defense) is modified by one step to its detriment on its next turn.'),
  new Cypher('Blinking Nodule', true, 0, [formMap.get(9)], 'For the next 28 hours, each time (but not for more than once per round) the wearer of the armor is struck hard enough to inflict damage, he telports an immediate distance in a random direction (not up or down). Since the wearer is prepared for this effect and his foe is not, the difficulty of the wearer\'s defense is modified by one step to its benefit for one round after he teleports.'),
  new Cypher('Catholicon', true, 2, [formMap.get(3), formMap.get(4), formMap.get(5)], 'Cures any disease of the same level or lower'),
  new Cypher('Catseye', true, 0, [formMap.get(3), formMap.get(4), formMap.get(5)], 'Grants the ability to see in the dark for eight hours.'),
];

export default cyphers;
