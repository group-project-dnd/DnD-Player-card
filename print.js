'use strict';

var chara = JSON.parse(localStorage.newChar)[0];
console.log(chara);

document.getElementById('name').lastElementChild.innerHTML = chara.name;
document.getElementById('job').firstElementChild.innerHTML = chara.job;
document.getElementById('background').firstElementChild.innerHTML = chara.background;
document.getElementById('username').firstElementChild.innerHTML = chara.username;
document.getElementById('race').firstElementChild.innerHTML = chara.race;
document.getElementById('alignment').firstElementChild.innerHTML = chara.alignment;
document.getElementById('exp').firstElementChild.innerHTML = chara.exp;
document.getElementById('proBonus').innerHTML = `+${chara.proBonus}`;
document.getElementById('str').firstElementChild.firstElementChild.innerHTML = chara.ablMods[0];
document.getElementById('str').firstElementChild.children[1].innerHTML = chara.ablScores[0];
document.getElementById('dex').firstElementChild.firstElementChild.innerHTML = chara.ablMods[1];
document.getElementById('dex').firstElementChild.children[1].innerHTML = chara.ablScores[1];
document.getElementById('con').firstElementChild.firstElementChild.innerHTML = chara.ablMods[2];
document.getElementById('con').firstElementChild.children[1].innerHTML = chara.ablScores[2];
document.getElementById('int').firstElementChild.firstElementChild.innerHTML = chara.ablMods[3];
document.getElementById('int').firstElementChild.children[1].innerHTML = chara.ablScores[3];
document.getElementById('wis').firstElementChild.firstElementChild.innerHTML = chara.ablMods[4];
document.getElementById('wis').firstElementChild.children[1].innerHTML = chara.ablScores[4];
document.getElementById('cha').firstElementChild.firstElementChild.innerHTML = chara.ablMods[5];
document.getElementById('cha').firstElementChild.children[1].innerHTML = chara.ablScores[5];
var proMods = document.querySelectorAll('li li h2 span');
for (var i = 0; i < proMods.length; i++) {
  proMods[i].innerHTML = `+${chara.proMods[i]}`;
}
var ablPros = document.querySelectorAll('li li h2');
for (var i = 0; i < chara.ablPros.length; i++) {
  for (var e = 0; e < ablPros.length; e++) {
    if (ablPros[e].textContent.slice(3) === chara.ablPros[i]) {
      ablPros[e].style.fontWeight = "bold";
    }
  }
}
document.getElementById('passive').firstElementChild.innerHTML = chara.perception;
