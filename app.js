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
var barbInv ='Greataxe, 2 handaxes, 4 javelins, a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, awaterskin, a disguise kit, staff, a hunting trap, a trophy from an animal you killed a set of traveler’s clothes, and a belt pouch containing 10 gp.';
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
allInventories = [barbarianInv, bardInv, clericInv, druidInv, fighterInv, monkInv, paladinInv, rangerInv, rogueInv, sorcererInv, warlockInv, wzardInv];
// collection of features
allFeatures = [barbarianInv, bardInv, clericInv, druidInv, fighterInv, monkInv, paladinInv, rangerInv, rogueInv, sorcererInv, warlockInv, wzardInv];
//collection of proficiency lists
allSkills = [barbarianSkills, bardSkills, clericSkills, druidSkills, fighterSkills, monkSkills, paladinSkills, rangerSkills, rogueSkills, sorcererSkills, warlockSkills, wzardSkills];
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