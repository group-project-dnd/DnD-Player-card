'use strict';
var submit = document.getElementById('submit');
var player = document.getElementById('username');



function handleSubmit(event){
  window.localStorage.clear();
  var username = player.value;
  console.log('click');
  var usernameStringified= JSON.stringify(username)
  localStorage.username = usernameStringified;
}

submit.addEventListener('click',handleSubmit);