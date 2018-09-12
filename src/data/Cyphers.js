const formFactors = [
  [1, 'Gloves'],
  [2, 'Handles with powerful suction cups'],
  [3, 'Injector'],
  [4, 'Pill'],
  [5, 'Ingestible liquid'],
  [6, 'Glove of synth'],
  [7, 'Small handheld device'],
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
];

export default cyphers;
