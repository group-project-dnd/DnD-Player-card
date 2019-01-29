'use strict';
//----------------DATA----------------

// var username = prompt('what is your name?');
var races = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];
var jobs = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorceror', 'Warlock', 'Wizard'];
var backgrounds = ['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Hermit', 'Noble', 'Outlander', 'Sage', 'Sailor', 'Soldier'];
var subraces = ['Hill Dwarf', 'Mountain Dwarf', 'High Elf', 'Wood Elf', 'Dark Elf (Drow)', 'Lightfoot', 'Stout', 'Forest Gnome', 'Rock Gnome'];
var proficiencies = ['STR Saving Throws', 'Athletics', 'DEX Saving Throws', 'Acrobatics', 'Sleight of Hand', 'Stealth', 'Arcana', 'History', 'Investigation', 'Nature', 'Religion', 'Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival', 'Deception', 'Intimidation', 'Performance', 'Persuasion'];

var allChars = [];

//----------------FUNCTION DECLARATIONS----------------

function Character(name, race, subrace, job) {
  this.name = name;
  this.race = race;
  this.subrace = subrace;
  this.job = job;
  this.background = '';
  this.hp = 0;
  this.hitdie = '';
  this.proBonus = 2;
  this.inspiration = 0;
  this.ablScores = [];
  this.modifiers = [0, 0, 0, 0, 0, 0];
  this.ablPros = [];
  allChars.push(this);
}

//Assigns background, hit dice, and hp
function assignBackgroundHealth() {
  for (var i = 0; i < allChars.length; i++) {
    switch (allChars[i].job) {
      case jobs[0]:
        allChars[i].background = backgrounds[8];
        // allChars[i].ablPros.push()
        allChars[i].hitdie = 'd12';
        allChars[i].hp = 12;
        break;
      case jobs[1]:
        allChars[i].background = backgrounds[3];
        allChars[i].hitdie = 'd8';
        allChars[i].hp = 8;
        break;
      case jobs[2]:
        allChars[i].background = backgrounds[0];
        allChars[i].hitdie = 'd8';
        allChars[i].hp = 8;
        break;
      case jobs[3]:
        allChars[i].background = backgrounds[6];
        allChars[i].hitdie = 'd8';
        allChars[i].hp = 8;
        break;
      case jobs[4]:
        allChars[i].background = backgrounds[11];
        allChars[i].hitdie = 'd10';
        allChars[i].hp = 10;
        break;
      case jobs[5]:
        allChars[i].background = backgrounds[0];
        allChars[i].hitdie = 'd8';
        allChars[i].hp = 8;
        break;
      case jobs[6]:
        allChars[i].background = backgrounds[4];
        allChars[i].hitdie = 'd10';
        allChars[i].hp = 10;
        break;
      case jobs[7]:
        allChars[i].background = backgrounds[8];
        allChars[i].hitdie = 'd10';
        allChars[i].hp = 10;
        break;
      case jobs[8]:
        allChars[i].background = backgrounds[2];
        allChars[i].hitdie = 'd8';
        allChars[i].hp = 8;
        break;
      case jobs[9]:
        allChars[i].background = backgrounds[9];
        allChars[i].hitdie = 'd6';
        allChars[i].hp = 6;
        break;
      case jobs[10]:
        allChars[i].background = backgrounds[1];
        allChars[i].hitdie = 'd8';
        allChars[i].hp = 8;
        break;
      case jobs[11]:
        allChars[i].background = backgrounds[5];
        allChars[i].hitdie = 'd6';
        allChars[i].hp = 6;
        break;
    }
  }
}
//Assigns ability scores/skill proficiencies
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
function calcModifiers() {
  for (var i = 0; i < allChars.length; i++) {
    for (var e = 0; e < allChars[i].ablScores.length; e++) {
      allChars[i].modifiers[e] = Math.floor((allChars[i].ablScores[e] - 10)/2);
    }
  }
}


//----------------FUNCTION INVOCATIONS----------------

new Character('Harry', 'Tiefling', '', 'Wizard');
new Character('Aaron', 'Half-Orc', '', 'Fighter');
new Character('Leo', 'Dragonborn', 'White', 'Rogue');
new Character('Elizabeth', 'Elf', 'Dark Elf (Drow)', 'Cleric');
assignBackgroundHealth();
assignAblScores();
calcModifiers();
console.log(allChars);

//hides subraces on page load
var sub = document.getElementsByClassName('sub');
for (var i = 0; i < sub.length; i++) {
  sub[i].style.display = 'none';
}
