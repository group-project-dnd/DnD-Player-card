'use strict';
//----------------DATA----------------

var username = prompt('what is your name?');
var races = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];
var jobs = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorceror', 'Warlock', 'Wizard'];


//----------------FUNCTION DECLARATIONS----------------

function Character(name, race, job) {
  this.name = name;
  this.race = race;
  this.job = job;

}

//----------------FUNCTION INVOCATIONS----------------
