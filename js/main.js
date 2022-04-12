"use strict";
const btnPlay = document.querySelector(".js_play");
const options = document.querySelector(".js_select");
const userBet = document.querySelector(".js_bet");
const message = document.querySelector(".js_message");
const balance = document.querySelector(".js_balance");
const reset = document.querySelector(".js_reset");
let initalBalance = 50;
//Función para generar un número aleatorio entre 1 y 6
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//Esta función marca el funcionamiento del juego y pinta los mesnajes de Feedback
function game(numAleat, userChoice, yourBet) {
  yourBet = parseInt(userBet.value);
  if (yourBet > initalBalance) {
  } else {
    if (userChoice === numAleat) {
      initalBalance = yourBet * 2 + initalBalance;
      balance.innerHTML = `${initalBalance}`;
    } else {
      initalBalance = initalBalance - yourBet;
      balance.innerHTML = `${initalBalance}`;
      gameOver();
    }
  }
  feedback(numAleat, userChoice);
}
//Empleamos una funcion para que el juego no sea infinito, y que cuando la usuaria se quede sin saldo/gane el juego desaparezca el boton jugar o aparezca reiniciar
function gameOver() {
  if (initalBalance <= 0 || initalBalance >= 200) {
    btnPlay.classList.add("hidden");
    reset.classList.remove("hidden");
    balance.innerHTML = `${initalBalance}`;
  }
}
//Empleamos una función para pintar los mensajes de feedback
function feedback(numAleat, userChoice, yourBet, initalBalance) {
  if (yourBet > initalBalance) {
    message.innerHTML = `Te has pasado de listo, ¡no tienes tanto dinero!`;
  } else {
    if (userChoice === numAleat) {
      message.innerHTML = `¡Genial banca a tu favor! Has ganado el doble de lo apostado :)`;
    } else {
      message.innerHTML = `¡Gana la casa!¡Has perdido lo apostado! :(`;
    }
  }
}
//Empleamos una funcion manejadora para manejar las funciones
function handleClickPlay(event) {
  event.preventDefault();
  const userChoice = parseInt(options.value);
  const numAleat = getRandomNumber(6);
  game(userChoice, numAleat);
  console.log(numAleat);
  console.log(userChoice);
}
//escuchamos el evento cuando la usuaria clica en Play
btnPlay.addEventListener("click", handleClickPlay);
