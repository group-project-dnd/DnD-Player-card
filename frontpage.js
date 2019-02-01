'use strict';
var submit = document.getElementById('submit');
var player = document.getElementById('username');
var anchor = document.getElementById('proceed')

// load code

var load = JSON.parse(localStorage.getItem(localStorage.key(0)));

if (localStorage.key(0) === "newChar") {
  document.getElementById('load').style.display = 'block';
}

//load code end

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