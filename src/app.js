import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let who = ['My mom', 'The bus driver', 'My girlfriend', 'The mailman', 'Kratos'];
let action = ['ate', 'stole', 'mashed', 'broke'];
let what = ['my phone', 'my car', 'the Wi-Fi', 'the TV'];
let when = ['before the class', 'when I was sleeping', 'while I was working', 'during my lunch', 'while I was playing'];

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}


function getRandom(anyArray){
  let max = anyArray.length;
  let min = 0;
  console.log(max, min);
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.body.innerHTML = getRandom(who) + " " + getRandom(action) + " " + getRandom(what) + " " + getRandom(when)
}
