'use strict';
//----------------DATA----------------

// var username = prompt('what is your name?');
var races = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];
var jobs = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
var backgrounds = ['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Hermit', 'Noble', 'Outlander', 'Sage', 'Sailor', 'Soldier'];
var subraces = ['Hill Dwarf', 'Mountain Dwarf', 'High Elf', 'Wood Elf', 'Dark Elf (Drow)', 'Lightfoot', 'Stout', 'Forest Gnome', 'Rock Gnome'];
var proficiencies = ['STR Saving Throws', 'Athletics', 'DEX Saving Throws', 'Acrobatics', 'Sleight of Hand', 'Stealth', 'CON Saving Throws', 'INT Saving Throws', 'Arcana', 'History', 'Investigation', 'Nature', 'Religion', 'WIS Saving Throws', 'Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival', 'CHA Saving Throws', 'Deception', 'Intimidation', 'Performance', 'Persuasion'];

var allChars = [];

// inventory organized by class
var barbarianInv ='Greataxe, 2 handaxes, 4 javelins, a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, awaterskin, a disguise kit, staff, a hunting trap, a trophy from an animal you killed a set of traveler’s clothes, and a belt pouch containing 10 gp.';
var bardInv = 'A rapier, leather armor, a dagger, a lute, a flute, the favor of an admirer, a costume, and a belt pouch containing 15 gp, , a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit.';
var clericInv = 'Equipment: Mace, Chainmail, light crossbow, 20 bolts, sheild, holy symbol * 2, backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, a waterskin, a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a belt pouch containing 15 gp.';
var druidInv ='A wooden shield, a mace, leathre armor, a duidic focus, A scroll case stuffed full of notes from your studies or prayers, a winter blanket, a set of common clothes, an herbalism kit, a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin, 50 feet hemp rope, and 5 gp. ';
var fighterInv = 'Chain mail, longsword, sheild, handaxe * 2,a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, a waterskin, 50 feet of hempen rope, an insignia of rank, a trophy taken from an enemy, a set of bone dice, a set of common clothes, and a belt pouch containing 10 gp.';
var monkInv= 'Shortsword, 10 darts, a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin, 50 feet of hempen rope, holy symbol, a prayer book or prayer wheel, 5 sticks of incense vestments, a set of common clothes, and a belt pouch containing 15 gp.';
var paladinInv = 'Longsword, shield, javelin * 5, chainmail, holy symbol, a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin, 50 feet o f hempen rope, woodcarver’s Tools, a shovel, an iron pot, a set of common clothes, and a belt pouch containing 10 gp.';
var rangerInv = 'Scale mail, shortsword * 2, longbow, quiver, arrows * 20,a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin, 50 feet hempen rope, a staff, a hunting trap, a trophy from an animal you killed, a set of traveler’s clothes, and a belt pouch containing 10 gp.';
var rogueInv = 'Rapier, shortbow and 20 arrows, leather armor, two daggers, thieves’ tools, a backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it. a crowbar, a set of dark common clothes including a hood, and a belt pouch containing 15 gp.';
var sorcererInv = 'Light crossbow, 20 bolts, arcane focus, 2 * daggersa bottle of black ink, a quill, a small knife, a letter from a dead colleague, a set of common clothes, a belt containing 10gp a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin, 50 feet of hempen rope.';
var warlockInv = 'Light Crossbow, 20 bolts, arcane focus, 2 daggers, a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin 50 feet of hempen rope, fine clothes, a disguise kit, a set of weighted dice, and a belt pouch containing 15 gp.';
var wizardInv = 'A quarterstaff, an arcane focus, a spellbook, a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife, Scribe’s tools, a letter of introduction from your guild, a set of traveler’s clothes, and a belt pouch containing 15 gp.';
var inventoryByClass = [barbarianInv, bardInv, clericInv, druidInv, fighterInv, monkInv, paladinInv, rangerInv, rogueInv, sorcererInv, warlockInv, wizardInv];
// collection of features
var dwarfFeatures = 'dark vision, advantage on saving throws against poison, resistance to poison damage, add proficiency *2 on Intelligence (History) check related to the stonework';
var elfFeatures = 'sark vision, adv on saving throws vs charmed. Magic can’t put you to sleep, Trance instead of sleep';
var halflingFeatures ='size small, speed 25, lucky(reroll your 1 on attack rolls, ability checks, and saving throws), adv on saving throws vs frightened, can move through spaces of creatures larger than you';
var humanFeatures ='';
var dragonbornFeatures = '';
var gnomeFeatures = 'size small, darkvision, adv on intelligence, wisdom and charisma saving throws vs magic';
var halfElfFeatures = 'darkvision, adv on saving throws against charmed, and magic cannot put them to sleep';
var halfOrcFeatures  = 'When dropped to 0, once per long rest you can be dropped to 1 hp. When you score a critical hit, you may roll one extra damage dice.';
var tieflingFeatures = 'darkvision, resistance to fire damage';
var raceFeatures = [dwarfFeatures, elfFeatures, halflingFeatures,  humanFeatures, dragonbornFeatures, gnomeFeatures, halfElfFeatures, halfOrcFeatures, tieflingFeatures];
var hillFeatures = 'max hp +1 for every level';
var mountainFeatures = '';
var highFeatures = '';
var woodFeatures = 'can hide lightly when obscured by nature'; 
var darkFeatures = 'when in direct sunlight, disadvantage on perception';
var lightfootFeatures = 'can be lightly obscured by a creature bigger than you';
var stoutFeatures = 'adv on saving throws vs poison, resistance to poison'; 
var blackFeatures = 'resistance to acid, breath weapon: acid 5x30 line (dex save)'; 
var blueFeatures = 'resistance to lighting, breath weapon: lightning 5x30 line (dex save)'
var brassFeatures = 'resistance to fire, breath weapon: fire 5x30 line (dex save'; 
var bronzeFeatures = 'resistance to lightning, breath weapon: lightning 5x30 line (dex save)'; 
var copperFeatures = 'resistance to acid, breath weapon: acid 5x30 line (dex save)';
var goldFeatures = 'resistance to fire, breath weapon: fire 15 foot cone (dex save)';
var greenFeatures = 'resistance to poison, breath weapon: poison 15 foot cone (con save)';
var redFeatures = 'resistance to fire, breath weapon: fire 15 foot cone (dex save)'
var silverFeatures = 'resistance to cold, breath weapon: cold 15 foot cone';
var whiteFeatures = 'resistance tocold, breath weapon: cold 15 foot cone';
var forestFeatures = 'can speak with small beasts and understand them'; 
var rockFeatures = 'history checks on maic items, alchemical objects, or technological devices + proficiency*2';

var subraceFeatures = [hillFeatures, mountainFeatures, highFeatures, woodFeatures, darkFeatures, lightfootFeatures, stoutFeatures, blackFeatures, brassFeatures, bronzeFeatures, copperFeatures, goldFeatures, greenFeatures, redFeatures, silverFeatures, whiteFeatures, forestFeatures, rockFeatures];

var barbarianFeatures = [`Rage: Enter a rage as a bonus action and gain the following benefits if you aren’t wearing heavy armor: You have advantage on Strength checks and Strength saving throws. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table. You have resistance to bludgeoning, piercing, and slashing damage.` , `Unarmored Defense: While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.` , `Wanderer - You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, etc.`];

var bardFeatures = [`Bardic Inspiration: With words or music you may use a bonus action to inspire one creature within 60 feet and give an additional 1d6 to one of their d20 rolls. That creature gains one Bardic Inspiration die, a d6.` , `-By Popular Demand - You can always find somewhere to preform, which will usually give you free lodging and food as long as you preform each night, but be careful, you may become a public figure.` , `-Ritual Casting: you may cast your spells with the ritual tag as a ritual`];

var clericFeatures = [`Shelter of the Faithful - Temples/shrines/clerics that share yoru faith will provide modest services for your party, and will support you at a modest lifestyle.` , `-Ritual Casting: you may cast your spells with the ritual tag as a ritual`];

var druidFeatures = [`-Discovery In your hermitage you had a powerful discovery about the cosmos, dieties, or other powerful beings.Work with your DM to determine the details.` , `-Ritual Casting: you may cast your spells with the ritual tag as a ritual`];

var fighterFeatures = [`-Second Wind- Once per short rest, on your turn use a bonus action to regain 1d10 + level hit points.` , `-Defensive fighting style (+1 ac with armor)` , `-Military Rank- Soldiers loyal to your former organization still recognize your rank and help you accordingly.`];

var monkFeatures = [`-Unarmored Defense - Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.` , `-Martial Arts - Your unarmed attacks can use dexterity start at 1d4 damage, and when you make an attack, you may make an unarmed attack as a bonus action.` , `-Shelter of the Faithful - Temples/shrines/clerics that share yoru faith will provide modest services for your party, and will support you at a modest lifestyle.`];

var paladinFeatures = [`Divine Sense- 1 + Charisma modifier times per day, open your awareness to detect the location and type of celestial, fiend or undead within 60 feet.` , `-Lay On Hands- You an touch someone, and heal their ailments. You heal an amount equal to your paladin level * 5 per day, or remove a disease per paladin level per day.` , `-Rustic Hospitality - Since you come from the ranks of the common folk, you fit in among them and can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them unless it puts them in danger.`];

var rangerFeatures = [`Favored terrain- Forest-in the forest, you are unimpeded by difficult terrain, will not get lost, can travel stealthily at a normal pace, can forage twice as much food, can track creatures and know their numbers.` , `-Favored Enemy- beasts and oozes - you have adv on survial checks to track them, and learn a language they speak, if they speak at all (they do not speak language).` , `-Wanderer: You have an excellent head for maps and geography, recalling layout, and are capable of providing food and fresh water for yourself and 5 others if the land has it.`];

var rogueFeatures = [`Sneak attack - Once per turn, you may deal an extra 1d6 to one creature you hit with an attack if you have advantage on that roll, or if an enemy is within 5 feed of it, isn’t incapacitated and you do not have disadvantage on your attack. The attack must be finesse or ranged` , `-Expertise - Two skills you are proficient with get double your proficiency (chosen stealth and sleight of hand)` , `-Criminal Contact - You have a trustworthy reliable contact that acts as a liason to a network of criminals, and will help get messages to other criminals.`];

var sorcererFeatures = [`Green Draconic Ancestory - Resistance poison damage.` , `-Researcher - when attempting to recall or learn lore, if you don’t know it, you know where to find it.` , `-Draconic Resilience - Your health increases by 1 for each level and your base AC is 13 without armor.`];

var warlockFeatures = [`Your Spells recover at short rests instead of long rests.` , `For this class, the following optimizations have been` , `- False Identity - You have a second Identity with documentation, acquaintances and disguises.` , `-Fiend Patron, Dark One’s Blessing - when you reduce an enemy to 0hp, you gain temporary hp equal to your charisma modifier + Warlock level.`];

var wizardFeatures = [`Arcane Recovery - Once per day when you finish a short rest, you can choose expended spell slots equal to half your wizard level rounded up to recover.` , `-Guild Membership- If you pay dues of 5gp per month, guild members of your guild will help provide food, lodging, support you when needed within reason, or even pay for your funeral.` , `-Ritual Casting: you may cast your spells with the ritual tag as a ritual`];

// classFeatures = [barbarianFeatures, bardFeatures, clericFeatures, druidFeatures, fighterFeatures, monkFeatures, paladinFeatures, rangerFeatures, rogueFeatures, sorcererFeatures, warlockFeatures, wizardFeatures];
// //collection of proficiency lists

var dwarfskills = [`Handaxe, Battleaxe, throwing hammer, smith’s tools, common, dwarfish`]
var elfSkills = [`Perception, Common, Elvish`]
var halflingSkills = [`Common, Halfling,`]
var humanSkills = [`Common, Dwarvish`]
var dragonbornSkills = [`Common, Draconic`]
var gnomeSkills = [`Common, Gnomish`]
var halfElfSkills = [`Perception, Investigation, common, elvish, primordial.`]
var halfOrcSkills = [`Common, Orc`]
var tieflingSkills = [`Common and Infernal.`]

 
// raceSkills =[dwarfskills, elfSkills, halflingSkills, humanSkills, dragonbornSkills, gnomeSkills, halfElfSkills, halfOrcSkills, tieflingSkills];

var hillSkills = [``]
var mountainSkills = [`Light Armor, Medium Armor`]
var highSkills = [`shortbow, shortsword, longsword, longbow`]
var  woodSkills = [`short bow, shortsword, longsword, longbow`]
var darkSkills = [`rapiers, shortswords and hand crossbows`]
var lightfootSkills = [``]
var stoutSkills = [``]
var blackSkills = [``]
var brassSkills = [``]
var bronzeSkills = [``]
var forestSkills = [``]
var rockSkills = [``]

// var subraceSkills =[hillSkills, mountainSkills, highSkills, woodSkills, darkSkills, lightfootSkills, stoutSkills, blackSkills, brassSkills, bronzeSkills, forestSkills, rockSkills];

var barbarianSkills = `Light Armor, Medium Armor, Shields, Simple Weapons, Martial Weapons, Strength Saving Throw, Constitution Saving Throw, Animal Handling, Nature, Athletics, Survival, Hand Drum, Sylvan`;

var bardSkills =  `Light Armor, Simple Weapons, hand crossbows, longswords, rapiers, Shortswords, Dexterity Saving Throw, Charisma Saving Throw, Persuasion, History, Deception, Acrobatics, Preformance, Lyre, Lute, Flute, Hand Drum, Disguise kit.`;

var clericSkills = `Heavy Armor, Light Armor, Medium Armor, Shields, All Simple Weapons, Wisdom Saving Throw, Charisma Saving Throw, Medicine, Persuasion, Insight, Religion`;

var druidSkills = `Light Armor, Medium Armor, Shields, Clubs, Daggers, Darts, Javelins, Maces, Quarterstaffs, Scimitars, Sickles, Slings, Spears, Herbalism Kit, Druidic, Intelligence Saving Throw, Wisdom Saving Throw, Medicine, Animal Handling, Nature, Religion, Sylvan, Celestial`;

var fighterSkills = `All Armor, Shields, All Simple Weapons, Martial Weapons, Strength Saving Throw, Constitution Saving Throw, Insight, Survival, Athletics, Intimidation,  Dragonchess`;

var monkSkills = `Simple Weapons, Shortswords, Strength Saving throw Dexterity Saving Throw, Insight, Religion, Stealth, Acrobatics, Celestial, Druidic`;
var paladinSkills = `All Armor, Shields, All simple weapons, martial weapons, Wisdom Saving Throw, Charisma Saving Throw,Animal Handling, Survival,Athletics, Religion, Woodcarver’s Tools, Land Vehicles.`;
var rangerSkills = `Light Armor, Medium Armor, shieds, Simple weapons, Martial Weapons, Strength Saving Throw, Dexterity Saving Throw, Stealth, Animal Handling, Nature, Athletics, Survival, Flute`;
var rogueSkills = `Light Armor, Simple Weapons, Hand Crossbows, Longswords, Rapiers, Shortswords, Theives’ tools, Dexterity Saving Throw, Intelligence Saving Throws, Stealth, Sleight of Hand, Acrobatics, Persuasion, Investigation, Deception.`;
var sorcererSkills = `Daggers, Darts, Slings, Quarterstaffs, Light Crossbows, Constitution Saving Throw, Charisma Savin Throw, Draconic, Celestial Druidic, Arcana, Insight, Acrobatics, History, Religion`;
var warlockSkills = `Light Armor, Simple Weapons, Wisdom Saving Throw, Charisma Saving Throw, Intimidation, Arcana, Deception, Sleight of Hand, Disguise, Kit Forgery Kit`;
var wizardSkills = `Daggers, Darts, Slings, Quarterstaffs, Light Crossbows, Wisdom Saving Throw, Intelligence Saving Throw, Insight, Persuasion, Arcana, History, Druidic, Scribe’s tools`;

// classSkills = [barbarianSkills, bardSkills, clericSkills, druidSkills, fighterSkills, monkSkills, paladinSkills, rangerSkills, rogueSkills, sorcererSkills, warlockSkills, wizardSkills];

var cantTiefling = 'Thaumatergy'


var cantHighElf = 'Minor Illusion'
var cantForestGnome = 'Minor Illusion'

//Class Cantrips

var cantBard = ['Vicious Mockery', 'Mending'];
var cantCleric = ['Sacred Flame', 'Spare the Dying', 'Guidance'];
var cantDruid = ['Druidcraft', 'Shilelagh'];
var cantSorcerer =['Chill Touch', 'Fire Bolt', 'Prestigitation', 'Mage Hand'];;
var cantWarlock = ['Mage Hand', 'Elderitch Blast'];;
var cantWizard = ['Firebolt', 'Mage Hand', 'Mending'];

//class Spells
var spellBard = ['Cure Wounds', 'Detect Magic', 'Dissonant Whispers'];
var spellCleric =['Cure Wounds', 'Detect Magic', 'Sheild of Faith'];
var spellDruid = ['Cure Wounds', 'Detect Magic', 'Farie Fire'];
var spellSorcerer =['Shield', 'Magic Missile'];
var spellWarlock = ['Burning Hands', 'Armor of Agathys'];
var spellWizard = ['Color Spray', 'Detect Magic', 'Find Familiar', 'Mage Armor', 'Magic Missile', 'Sleep'];

//----------------FUNCTION DECLARATIONS----------------

function Character(name, race, subrace, job) {
  this.name = name;
  this.job = job;
  this.level = 1;
  this.background = '';
  this.race = race;
  this.subrace = subrace;
  this.alignment = 'Neutral'; //STRETCH GOAL: make this customizable
  this.exp = 0;
  this.proBonus = 2;
  this.inspiration = 0;
  this.ablScores = [];
  this.ablMods = [0, 0, 0, 0, 0, 0];
  this.ablPros = [];
  this.proMods = [];
  this.perception = 10; //plus perception modifier
  this.armClass = (10 + this.ablMods[1]);
  this.initiative = this.ablMods[1];
  this.hp = 0;
  this.hitdie = '';
  allChars.push(this);
}

//Assigns background, hit dice, hp, and skill proficiencies
function assignBackgroundHealth() {
  for (var i = 0; i < allChars.length; i++) {
    switch (allChars[i].job) {
      case jobs[0]:
        allChars[i].ablPros.push(proficiencies[0], proficiencies[6], proficiencies[14], proficiencies[11]);
        allChars[i].background = backgrounds[8];
        allChars[i].ablPros.push(proficiencies[1], proficiencies[18]);
        allChars[i].hitdie = 'd12';
        allChars[i].hp = 12 + allChars[i].ablMods[2];
        break;
      case jobs[1]:
        allChars[i].ablPros.push(proficiencies[2], proficiencies[19], proficiencies[23], proficiencies[9], proficiencies[20]);
        allChars[i].background = backgrounds[3];
        allChars[i].ablPros.push(proficiencies[3], proficiencies[22]);
        allChars[i].hitdie = 'd8';
        allChars[i].hp = 8 + allChars[i].ablMods[2];
        break;
      case jobs[2]:
        allChars[i].ablPros.push(proficiencies[13], proficiencies[19], proficiencies[16], proficiencies[23]);
        allChars[i].background = backgrounds[0];
        allChars[i].ablPros.push(proficiencies[15], proficiencies[12]);
        allChars[i].hitdie = 'd8';
        allChars[i].hp = 8 + allChars[i].ablMods[2];
        break;
      case jobs[3]:
        allChars[i].ablPros.push(proficiencies[7], proficiencies[13], proficiencies[14], proficiencies[11]);
        allChars[i].background = backgrounds[6];
        allChars[i].ablPros.push(proficiencies[16], proficiencies[12]);
        allChars[i].hitdie = 'd8';
        allChars[i].hp = 8 + allChars[i].ablMods[2];
        break;
      case jobs[4]:
        allChars[i].ablPros.push(proficiencies[0], proficiencies[6], proficiencies[15], proficiencies[18]);
        allChars[i].background = backgrounds[11];
        allChars[i].ablPros.push(proficiencies[1], proficiencies[21]);
        allChars[i].hitdie = 'd10';
        allChars[i].hp = 10 + allChars[i].ablMods[2];
        break;
      case jobs[5]:
        allChars[i].ablPros.push(proficiencies[0], proficiencies[2], proficiencies[3], proficiencies[5]);
        allChars[i].background = backgrounds[0];
        allChars[i].ablPros.push(proficiencies[15], proficiencies[12]);
        allChars[i].hitdie = 'd8';
        allChars[i].hp = 8;
        break;
      case jobs[6]:
        allChars[i].ablPros.push(proficiencies[13], proficiencies[19], proficiencies[1], proficiencies[12]);
        allChars[i].background = backgrounds[4];
        allChars[i].ablPros.push(proficiencies[14], proficiencies[18]);
        allChars[i].hitdie = 'd10';
        allChars[i].hp = 10 + allChars[i].ablMods[2];
        break;
      case jobs[7]:
        allChars[i].ablPros.push(proficiencies[0], proficiencies[6], proficiencies[14], proficiencies[11], proficiencies[5]);
        allChars[i].background = backgrounds[8];
        allChars[i].ablPros.push(proficiencies[1], proficiencies[18]);
        allChars[i].hitdie = 'd10';
        allChars[i].hp = 10 + allChars[i].ablMods[2];
        break;
      case jobs[8]:
        allChars[i].ablPros.push(proficiencies[2], proficiencies[7], proficiencies[4], proficiencies[3], proficiencies[23], proficiencies[22]);
        allChars[i].background = backgrounds[2];
        allChars[i].ablPros.push(proficiencies[20], proficiencies[5]);
        allChars[i].hitdie = 'd8';
        allChars[i].hp = 8 + allChars[i].ablMods[2];
        break;
      case jobs[9]:
        allChars[i].ablPros.push(proficiencies[19], proficiencies[6], proficiencies[15], proficiencies[12]);
        allChars[i].background = backgrounds[9];
        allChars[i].ablPros.push(proficiencies[8], proficiencies[9]);
        allChars[i].hitdie = 'd6';
        allChars[i].hp = 6 + allChars[i].ablMods[2];
        break;
      case jobs[10]:
        allChars[i].ablPros.push(proficiencies[13], proficiencies[19], proficiencies[21], proficiencies[8]);
        allChars[i].background = backgrounds[1];
        allChars[i].ablPros.push(proficiencies[20], proficiencies[4]);
        allChars[i].hitdie = 'd8';
        allChars[i].hp = 8 + allChars[i].ablMods[2];
        break;
      case jobs[11]:
        allChars[i].ablPros.push(proficiencies[7], proficiencies[13], proficiencies[9], proficiencies[8]);
        allChars[i].background = backgrounds[5];
        allChars[i].ablPros.push(proficiencies[15], proficiencies[23]);
        allChars[i].hitdie = 'd6';
        allChars[i].hp = 6 + allChars[i].ablMods[2];
        break;
    }
  }
}
//Assigns ability scores
function assignAblScores() {
  for (var i = 0; i < allChars.length; i++) {
    switch (allChars[i].job) {
      case jobs[0]:
        allChars[i].ablScores = [15, 13, 14, 10, 12, 8];
        allChars[i].ablPros.push()
        break;
      case jobs[1]:
        allChars[i].ablScores = [8, 14, 10, 13, 12, 15];
        break;
      case jobs[2]:
        allChars[i].ablScores = [12, 10, 14, 13, 15, 8];
        break;
      case jobs[3]:
        allChars[i].ablScores = [10, 12, 14, 13, 15, 8];
        break;
      case jobs[4]:
        allChars[i].ablScores = [15, 12, 14, 10, 13, 8];
        break;
      case jobs[5]:
        allChars[i].ablScores = [8, 15, 13, 10, 14, 12];
        break;
      case jobs[6]:
        allChars[i].ablScores = [14, 10, 15, 8, 12, 13];
        break;
      case jobs[7]:
        allChars[i].ablScores = [10, 15, 13, 12, 14, 8];
        break;
      case jobs[8]:
        allChars[i].ablScores = [8, 15, 10, 13, 12, 14];
        break;
      case jobs[9]:
        allChars[i].ablScores = [8, 14, 12, 13, 10, 15];
        break;
      case jobs[10]:
        allChars[i].ablScores = [8, 13, 12, 14, 10, 15];
        break;
      case jobs[11]:
        allChars[i].ablScores = [8, 13, 10, 15, 14, 12];
        break;
    }
  }
  for (var i = 0; i < allChars.length; i++) {
    switch (allChars[i].race) {
      case races[0]:
        allChars[i].ablScores[2] += 2;
        break;
      case races[1]:
        allChars[i].ablScores[1] += 2;
        break;
      case races[2]:
        allChars[i].ablScores[1] += 2;
        break;
      case races[3]:
        allChars[i].ablScores[0]++;
        allChars[i].ablScores[1]++;
        allChars[i].ablScores[2]++;
        allChars[i].ablScores[3]++;
        allChars[i].ablScores[4]++;
        allChars[i].ablScores[5]++;
        break;
      case races[4]:
        allChars[i].ablScores[0] += 2;
        allChars[i].ablScores[5]++;
        break;
      case races[5]:
        allChars[i].ablScores[3] += 2;
        break;
      case races[6]:
        allChars[i].ablScores[5] += 2;
        allChars[i].ablScores[4]++;
        allChars[i].ablScores[1]++;
        break;
      case races[7]:
        allChars[i].ablScores[0] += 2;
        allChars[i].ablScores[2]++;
        break;
      case races[8]:
        allChars[i].ablScores[5] += 2;
        allChars[i].ablScores[3]++;
        break;
    }
    switch (allChars[i].subrace) {
      case subraces[0]:
        allChars[i].ablScores[4]++;
        allChars[i].hp++;
        break;
      case subraces[1]:
        allChars[i].ablScores[0] += 2;
        break;
      case subraces[2]:
        allChars[i].ablScores[3]++;
        break;
      case subraces[3]:
        allChars[i].ablScores[4]++;
        break;
      case subraces[4]:
        allChars[i].ablScores[5]++;
        break;
      case subraces[5]:
        allChars[i].ablScores[5]++;
        break;
      case subraces[6]:
        allChars[i].ablScores[2]++;
        break;
      case subraces[7]:
        allChars[i].ablScores[1]++;
        break;
      case subraces[8]:
        allChars[i].ablScores[2]++;
        break;
      default:
        break;
    }
  }
}

//Calculates ability modifiers
function calcAblMods() {
  for (var i = 0; i < allChars.length; i++) {
    for (var e = 0; e < allChars[i].ablScores.length; e++) {
      allChars[i].ablMods[e] = Math.floor((allChars[i].ablScores[e] - 10)/2);
    }
  }
}

//calculates proficiency modifiers
function calcProMods() {
  for (var i = 0; i < allChars.length; i++) {
    var e = 0;
    while (e < 2) {
      allChars[i].proMods.push(allChars[i].ablMods[0]);
      e++;
    }
    while (e < 6) {
      allChars[i].proMods.push(allChars[i].ablMods[1]);
      e++;
    }
    while (e < 7) {
      allChars[i].proMods.push(allChars[i].ablMods[2]);
      e++;
    }
    while (e < 13) {
      allChars[i].proMods.push(allChars[i].ablMods[3]);
      e++;
    }
    while (e < 19) {
      allChars[i].proMods.push(allChars[i].ablMods[4]);
      e++;
    }
    while (e < 24) {
      allChars[i].proMods.push(allChars[i].ablMods[5]);
      e++;
    }
    for (var a = 0; a < allChars[i].ablPros.length; a++) {
      for (var u = 0; u < proficiencies.length; u++) {
        if (allChars[i].ablPros[a] === proficiencies[u]) {
          allChars[i].proMods[u] += 2;
          console.log('incremented');
        }
      }
    }
    if (allChars[i].job === jobs[8]) {
      allChars[i].proMods[4] += 2;
      allChars[i].proMods[5] += 2;
    }
  }
}

//Shows the corresponding descriptions of races and roles
var race = document.getElementById('race');
function handleRaceChange(event){
  for (var i = 0; i < races.length; i++) {
    if (event.target.value === races[i].toLowerCase()) {
      for (var i = 0; i < subraceEl.length; i++) {
        subraceEl[i].style.display = "none";
      }
      var subrace = document.getElementById(event.target.value);
      subrace.style.display = "block";
    }
  }
}

var role = document.getElementById('role');
function handleRoleChange(event){
  for (var i = 0; i < jobs.length; i++) {
    if (event.target.value === jobs[i].toLowerCase()) {
      for (var i = 0; i < subjobEl.length; i++) {
        subjobEl[i].style.display = "none";
      }
      var subjob = document.getElementById(event.target.value);
      subjob.style.display = "block";
    }
  }
}

//Submit form and create character: INCOMPLETE
var button = document.querySelector('button');
function handleSubmit(){
  var choices = document.querySelectorAll('input:checked');
  console.log(choices[0].value, choices[1].value);
  new Character('stand-in username', choices[0].value, 'stand-in subrace', choices[1].value);
  console.log(allChars);
}

//----------------FUNCTION INVOCATIONS----------------

new Character('Harry', 'Tiefling', '', 'Wizard');
new Character('Aaron', 'Half-Orc', '', 'Fighter');
new Character('Leo', 'Dragonborn', 'White', 'Rogue');
new Character('Elizabeth', 'Elf', 'Dark Elf (Drow)', 'Cleric');
assignAblScores();
calcAblMods();
calcProMods();
assignBackgroundHealth();

console.log(allChars);

//hides subraces on page load
var subraceEl = document.querySelectorAll("#subraces .sub");
var subjobEl = document.querySelectorAll("#subjobs .sub")

for (var i = 0; i < subraceEl.length; i++) {
  subraceEl[i].style.display = "none";
}
for (var i = 0; i < subjobEl.length; i++) {
  subjobEl[i].style.display = "none";
}

race.addEventListener("click", handleRaceChange);
role.addEventListener("click", handleRoleChange);
button.addEventListener("click", handleSubmit);