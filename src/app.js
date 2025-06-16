import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const who = ['My mom', 'The bus driver', 'My girlfriend', 'The mailman', 'Kratos'];
const action = ['ate', 'stole', 'mashed', 'broke'];
const what = ['my phone', 'my car', 'the Wi-Fi', 'the TV'];
const when = ['before the class', 'when I was sleeping', 'while I was working', 'during my lunch', 'while I was playing'];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandom = anyArray => anyArray[getRandomNumber(0, anyArray.length)];

window.onload = () => (console.log("Hello Rigo from the console!"), document.body.innerHTML = `${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}.`);
