'use strict';
//----------------DATA----------------

var username = prompt('what is your name?');
var races = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];
var jobs = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorceror', 'Warlock', 'Wizard'];
var backgrounds = ['Acolyte', 'Charlatan', 'Criminal'];

var allChars = [];

//----------------FUNCTION DECLARATIONS----------------

function Character(name, race, job) {
  this.name = name;
  this.race = race;
  this.job = job;
  this.background = '';
  this.alignment = '';
  allChars.push(this);
}

//----------------FUNCTION INVOCATIONS----------------

var sub = document.getElementsByClassName('sub');
for(var i = 0; i < sub.length; i++) {
  sub[i].style.visibility = hidden;
}

//Assigns background
// for (var i = 0; i < allChars.length; i++)
//   switch(allChars[i].race) {
//     case jobs[0]: allChars[i].background = 
//   }