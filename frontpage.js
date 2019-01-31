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
    anchor.href='index.html';
    player.placeholder = 'Enter a name to Proceed';
    event.preventDefault();
  }
}

submit.addEventListener('click',handleSubmit);
submit.addEventListener('submit',handleSubmit);