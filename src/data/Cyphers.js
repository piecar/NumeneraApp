import {chemicalFactory, detonation} from './Effects';

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
  [10, 'Small metallic disk'],
  [11, 'Temporary tattoo'],
  [12, 'Amulet'],
  [13, 'Headband'],
  [14, 'Crystal worn on temple'],
  [15, 'Crystal'],
  [16, 'Wristband projector (long range)'],
  [17, 'Explosive device (thrown, short range)'],
  [18, 'Handheld projector (long range)'],
  [19, 'Explosive device or ceramic sphere (thrown, short range)'],
  [20, 'Wristband projector (range of 200 feet [61 m])'],
  [21, 'Handheld projector (range of 200 feet [61 m])'],
];

export class Cypher {
  constructor(name, anoetic, levelModifier, formFactorList, effect, extraEffect) {
    this.name = name;
    this.anoetic = anoetic;
    this.levelModifier = levelModifier;
    this.formFactorList = formFactorList;
    this.effect = effect;
    this.extraEffect = extraEffect;
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
  new Cypher('Chemical Factory', true, 0, [formMap.get(3), formMap.get(4), formMap.get(5)], 'After one hour, the sweat of the user produces 1d6 doses of a valuable liquid (these doses are not considered cyphers). They must be used within one week', chemicalFactory),
  new Cypher('Comprehension Graft', false, 1, [formMap.get(10)], 'When applied to a creature’s head, the disk immediately unleashes microfilaments that enter the brain. Within five minutes, the creature can understand the words of a specific language keyed to the graft. This is true even of creatures that do not normally have a language. If the creature could already understand the language, the cypher has no effect. Once the graft attaches,'),
  new Cypher('Controlled Blinking Nodule', true, 2, [formMap.get(9)], ' For the next 28 hours, each time the wearer of the armor the nodule is attached to is struck hard enough to inflict damage (but no more than once per round), he teleports to a spot he desires within immediate range. Since the wearer is prepared for this effect and his foe is not, the difficulty of the wearer’s defense is modified by one step to his benefit for one round after he teleports.'),
  new Cypher('Datasphere Siphon', true, 0, [formMap.get(4), formMap.get(5), formMap.get(7), formMap.get(11), formMap.get(12), formMap.get(13), formMap.get(14), formMap.get(15)], 'Tapping into the datasphere’s knowledge, the user can learn the answer to one question.'),
  new Cypher('Density Nodule', true, 0, [formMap.get(8)], 'For the next 28 hours, each time the weapon the nodule is attached to strikes a solid creature or object, the weapon suddenly increases dramatically in weight, causing the blow to inflict an additional 2 points of damage.'),
  new Cypher('Detonation', true, 2, [formMap.get(16), formMap.get(17), formMap.get(18)], 'Explodes in an immediate radius, inflicting damage equal to the cypher level.', detonation),
  new Cypher('Detonation (Desiccating)', true, 2, [formMap.get(16), formMap.get(18), formMap.get(19)], 'Bursts in an immediate radius, draining moisture from everything within it. Living creatures take damage equal to the cypher level. Water in the area is vaporized.'),
  new Cypher('Detonation (Flash) ', true, 2, [formMap.get(16), formMap.get(18), formMap.get(19)], 'Bursts in an immediate radius, blinding all within it for one minute'),
  new Cypher('Detonation (Gravity) ', true, 2, [formMap.get(16), formMap.get(18), formMap.get(19)], 'Bursts in an immediate radius, inflicting damage equal to the cypher level by increasing gravity tremendously for one second. All in the area are crushed to the ground for one round and cannot take physical actions.'),
  new Cypher('Detonation (Massive) ', true, 2, [formMap.get(20), formMap.get(21)], 'Explodes in a short-range radius, inflicting damage equal to the cypher level.', detonation),
  new Cypher('Detonation (Matter Disruption) ', false, 4, [formMap.get(16), formMap.get(18), formMap.get(19)], 'Explodes in an immediate radius, releasing nanites that rearrange matter in random ways. Inflicts damage equal to the cypher level.'),
  new Cypher('Detonation (Pressure) ', true, 2, [formMap.get(16), formMap.get(18), formMap.get(19)], 'Explodes in an immediate radius, inflicting impact damage equal to cypher level. Also moves unattended objects out of the area if they weigh less than 20 pounds (9 kg) per cypher level.'),
];

export default cyphers;
