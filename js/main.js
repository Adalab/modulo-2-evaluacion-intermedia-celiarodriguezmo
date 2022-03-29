'use strict';
const btnPlay = document.querySelector('.js_play');
const options= document.querySelector('.js_select');
const userBet= document.querySelector('.js_bet');
const paintResult =document.querySelector('.js_divresult');
const message = document.querySelector('.js_message');
const balance = document.querySelector('.js_balance');

const userChoice = options.value;

//Función para generar un número aleatorio entre 1 y 6



function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max);    
   
  }



  const numAleat =getRandomNumber (6);
  console.log(numAleat);

   
function getChoiceUser (){
    const userChoice= options.value;
    paintResult.innerHTML= userChoice;

}

function getBetUser (){
 

    const howMuchMoneyBet = userBet.value;

    if (numAleat === userChoice){

    balance.innerHTML= howMuchMoneyBet*2;
    message.innerHTML= "¡Has ganado!";}

    else {
    balance.innerHTML= howMuchMoneyBet*0;
    message.innerHTML= "¡Has perdido!";}

}

//Empleamos una funcion manejadora para manejar las funciones

function handleClickPlay(event) {
    event.preventDefault();
  
    getRandomNumber();
  
   getChoiceUser();
   getBetUser ()

}


//escuchamos el evento cuando la usuaria clica en Play
  btnPlay.addEventListener('click', handleClickPlay);