import { chemicalFactory, detonation, gasBomb, hunterSeeker, imageProjector } from './Effects';

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
  [22, 'Spray canister'],
  [23, 'Belt'],
  [24, 'Ring'],
  [25, 'Bracelet'],
  [26, 'Handheld Device'],
  [27, 'Subdermal Injector'],
  [28, 'Complex Device'],
  [29, 'Boots'],
  [30, 'Small platform on which the user must stand'],
  [31, 'Arm- or shoulder-mounted launcher'],
  [32, 'Headband with device on forehead'],
  [33, 'Handheld device with glass pane'],
  [34, 'Phases into eye, phases out when used'],
  [35, 'Adheres to temple and launches projectile'],
  [36, 'Handheld device that launches projectile'],
  [37, 'Adhesive patch that activates when slapped'],
  [38, 'Canister containing slime'],
  [39, 'Disk that adheres to forehead'],
  [40, 'Small sphere with a thick screw protrusion'],
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
  new Cypher('Detonation (Flash)', true, 2, [formMap.get(16), formMap.get(18), formMap.get(19)], 'Bursts in an immediate radius, blinding all within it for one minute'),
  new Cypher('Detonation (Gravity)', true, 2, [formMap.get(16), formMap.get(18), formMap.get(19)], 'Bursts in an immediate radius, inflicting damage equal to the cypher level by increasing gravity tremendously for one second. All in the area are crushed to the ground for one round and cannot take physical actions.'),
  new Cypher('Detonation (Massive)', true, 2, [formMap.get(20), formMap.get(21)], 'Explodes in a short-range radius, inflicting damage equal to the cypher level.', detonation),
  new Cypher('Detonation (Matter Disruption)', false, 4, [formMap.get(16), formMap.get(18), formMap.get(19)], 'Explodes in an immediate radius, releasing nanites that rearrange matter in random ways. Inflicts damage equal to the cypher level.'),
  new Cypher('Detonation (Pressure)', true, 2, [formMap.get(16), formMap.get(18), formMap.get(19)], 'Explodes in an immediate radius, inflicting impact damage equal to cypher level. Also moves unattended objects out of the area if they weigh less than 20 pounds (9 kg) per cypher level.'),
  new Cypher('Detonation (Singularity)', false, 4, [formMap.get(18), formMap.get(19)], 'Explodes and creates a momentary singularity that tears at the fabric of the universe. Inflicts 20 points of damage to all within short range, drawing them (or their remains) together to immediate range (if possible). Player characters in the radius move one step down the damage track if they fail a Might defense roll.'),
  new Cypher('Detonation (Sonic)', true, 2, [formMap.get(16), formMap.get(18), formMap.get(19)], 'Explodes with terrifying sound, deafening all in an immediate radius.'),
  new Cypher('Detonation (Spawn)', true, 2, [formMap.get(16), formMap.get(18), formMap.get(19)], 'Bursts in an immediate radius, blinding all within it for one minute and inflicting damage equal to the cypher level. The burst spawns 1d6 additional detonations; on the next round, each additional detonation flies to a random spot within short range and explodes in an immediate radius', detonation),
  new Cypher('Detonation (Web)', true, 2, [formMap.get(16), formMap.get(18), formMap.get(19)], 'Explodes in an immediate radius and creates sticky strands of goo. PCs caught in the area must use a Might-based action to get out, with the difficulty determined by the cypher level. NPCs break free if their level is higher than the cypher level.'),
  new Cypher('Disrupting Nodule', true, 0, [formMap.get(8)], 'For the next 28 hours, each time the weapon the nodule is attached to strikes a solid creature or object, it generates a burst of nanites that directly attack organic cells. The affected target takes 1 additional point of damage and loses his next action.'),
  new Cypher('Eagleseye', true, 0, [formMap.get(3), formMap.get(4), formMap.get(5)], 'Grants the ability to see ten times as far as normal for one hour'),
  new Cypher('Fireproofing Spray', true, 4, [formMap.get(22)], 'A nonliving object sprayed by this cypher has Armor against fire damage equal to the cypher’s level for 28 hours'),
  new Cypher('Flame-Retardant Wall', true, 0, [formMap.get(23), formMap.get(24), formMap.get(25), formMap.get(26)], 'Creates an immobile plane of permeable energy up to 20 feet by 20 feet (6.1 m by 6.1 m) for one hour. The plane conforms to the space available. Flames passing through the plane are extinguished.'),
  new Cypher('Force Cube Projector', false, 3, [formMap.get(23), formMap.get(24), formMap.get(25), formMap.get(26)], 'Creates an immobile cube composed of six planes of solid force, each 30 feet (9.1 m) to a side, for one hour. The planes conform to the space available.'),
  new Cypher('Force Nodule', true, 0, [formMap.get(9)], 'For the next 28 hours, the armor the nodule is attached to is bolstered by a powerful force field, adding 2 to the Armor it provides.'),
  new Cypher('Force Screen Projector', true, 3, [formMap.get(23), formMap.get(24), formMap.get(25), formMap.get(26)], 'Creates an immobile plane of solid force up to 20 feet by 20 feet (6.1 m by 6.1 m) for one hour. The plane conforms to the space available.'),
  new Cypher('Force Shield Projector', true, 3, [formMap.get(23), formMap.get(24), formMap.get(25), formMap.get(26), formMap.get(27)], 'Creates a shimmering energy shield around the user for one hour, during which time he gains +3 Armor (+4 Armor if the cypher is level 5 or higher).'),
  new Cypher('Friction-Reducing Gel', true, 0, [formMap.get(22)], 'Sprayed across an area up to 10 feet (3 m) square, this gel makes things extremely slippery. For one hour, the difficulty of movement tasks in the area is increased by three steps.'),
  new Cypher('Frigid Wall Projector', true, 2, [formMap.get(28)], 'Creates a wall of supercooled air up to 30 feet by 30 feet by 1 foot (9.1 m by 9.1 m by 0.3 m) that inflicts damage equal to the cypher level on anything that passes through it. The wall conforms to the space available. It lasts for ten minutes.'),
  new Cypher('Gas Bomb', true, 2, [formMap.get(16), formMap.get(18), formMap.get(19), formMap.get(26)], 'Bursts in a poisonous cloud within an immediate distance. The cloud lingers for 1d6 rounds unless conditions dictate otherwise', gasBomb),
  new Cypher('Gravity Nullifier', true, 3, [formMap.get(23), formMap.get(24), formMap.get(25), formMap.get(27), formMap.get(29), formMap.get(30)], ' For one hour, the user can float into the air, moving vertically (but not horizontally without some other action, such as pushing along the ceiling) up to a short distance per round. The user must weigh less than 50 pounds (22 kg) per level of the cypher'),
  new Cypher('Gravity-Nullifying Spray ', false, 2, [formMap.get(22)], ' A nonliving object about the size of a person or smaller sprayed by this cypher floats 1d20 feet in the air permanently and no longer has weight if carried (though it needs to be strapped down).'),
  new Cypher('Heat Nodule', true, 0, [formMap.get(8)], 'For the next 28 hours, each time the weapon the nodule is attached to strikes a solid creature or object, it generates a burst of heat, inflicting an additional 2 points of damage.'),
  new Cypher('Hunter/Seeker', false, 0, [formMap.get(26), formMap.get(28), formMap.get(31)], 'With long-range movement, this intelligent missile tracks and attacks a specified target (target must be within sight when selected). If it misses, it continues to attack one additional time per cypher level until it hits. For example, a level 4 hunter/seeker will attack a maximum of five times.', hunterSeeker),
  new Cypher('Image Projector', true, 0, [formMap.get(32), formMap.get(33)], 'Projects one of the following immobile images in the area described for one hour. The image appears 25 feet (7.6 m) away from the user. Scenes include movement, sound, and smell.', imageProjector),
  new Cypher('Inferno Wall Projector', true, 2, [formMap.get(28)], 'Creates a wall of extreme heat up to 30 feet by 30 feet by 1 foot (9.1 m by 9.1 m by 0.3 m) that inflicts damage equal to the cypher level on anything that passes through it. The wall conforms to the space available. It lasts for ten minutes.'),
  new Cypher('Infiltrator', false, 0, [formMap.get(34), formMap.get(35), formMap.get(36)], 'Tiny capsule launches and moves at great speed, mapping and scanning an unknown area. It moves 500 feet (152 m) per level, scanning an area up to 50 feet (15 m) per level away from it. It identifies basic layout, creatures, and major energy sources. Its movement is blocked by any physical or energy barrier.'),
  new Cypher('Instant Servant ', false, 0, [formMap.get(26)], 'Small device expands into a humanoid automaton that is roughly 2 feet (0.6 m) tall. It is a creature equal to the cypher level and can understand the verbal commands of the character who activates it. Once activated, commanding the servant is not an action. It can make attacks or perform actions as ordered to the best of its abilities, but it cannot speak.\n' +
    'The automaton has short-range movement but never goes farther than long range away from the character who activated it. At the GM’s discretion, the servant might have specialized knowledge, such as how to operate a particular device. Otherwise, it has no special knowledge. In any case, the servant is not artificially intelligent or capable of initiating action. It does only as commanded.\n' +
    'The servant operates for one hour per cypher level.'),
  new Cypher('Instant Shelter', true, 3, [formMap.get(26)], 'With the addition of water and air, the small device expands into a simple one-room structure with a door and a transparent window. The structure is 10 feet by 10 feet by 20 feet (3 m by 3 m by 6.1 m). It is made from a form of shapestone and is permanent and immobile once created.'),
  new Cypher('Intellect Enhancement', true, 2, [formMap.get(3), formMap.get(4), formMap.get(5), formMap.get(37)], 'Substance adds 1 to Intellect Edge for one hour.'),
  new Cypher('Invisibility Nodule', true, 0, [formMap.get(9)], 'For the next 28 hours, the armor the nodule is attached to is invisible, making the wearer appear to be unarmored.'),
  new Cypher('Knowledge Enhancement', true, 0, [formMap.get(3), formMap.get(4), formMap.get(5), formMap.get(37)], 'For the next 28 hours, the character has training in a predetermined skill.'),
  new Cypher('Lightning Wall Projector', true, 2, [formMap.get(28)], 'Creates a wall of electric bolts up to 30 feet by 30 feet by 1 foot (9.1 m by 9.1 m by 0.3 m) that inflicts damage equal to the cypher level on anything that passes through it. The wall conforms to the space available. It lasts for ten minutes.'),
  new Cypher('Living Solvent', true, 4, [formMap.get(38)], 'Once released, this organic slime dissolves 1 cubic foot of material each round. After one round per cypher level, the slime dies and becomes inert.'),
  new Cypher('Machine Control Implant', true, 2, [formMap.get(3), formMap.get(4), formMap.get(11), formMap.get(39)], 'When activated, the cypher splits into two pieces. One is affixed to a numenera device and the other to a character. The character can then use his mind to control the device at long range, bidding it to do anything it could do normally. Thus, a device could be activated or deactivated, and a vehicle could be piloted. The control lasts for ten minutes, and once the device is chosen, it cannot be changed.'),
  new Cypher('Magnetic Attack Drill', true, 2, [formMap.get(40)], 'The user throws this cypher at a target within short range, and it drills into the target for one round, inflicting damage equal to the cypher level. If the target is made of metal or wearing metal (such as armor), the difficulty of the attack is decreased by one step.'),
];

export default cyphers;
