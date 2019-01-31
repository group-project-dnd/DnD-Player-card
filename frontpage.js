'use strict';
var submit = document.getElementById('submit');
var player = document.getElementById('username');
var anchor = document.getElementById('proceed')


function handleSubmit(event){
  window.localStorage.clear();
  var username = player.value;
  if (username){
    console.log('click');
    var usernameStringified= JSON.stringify(username)
    localStorage.username = usernameStringified;
  } else {
    proceed.href='index.html';
    console.log('you cannot proceed');
  }
}

submit.addEventListener('click',handleSubmit);