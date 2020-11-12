 function randomNum() {
   return Math.floor(Math.random() * 6) + 1; 
  
 };
 let startButton = document.getElementById('start');
let dice1 = document.getElementById('dice_A')
let dice2 = document.getElementById('dice_B')
var player1 = document.getElementById('player_1'); 
var player2= document.getElementById('player_2'); 

startButton.onclick = () => {
  var randomNumber1 = randomNum();
  var randomNumber2 = randomNum();
  dice1.src = "images/dice" + randomNumber1 + ".png";
dice2.src = "images/dice" + randomNumber2 + ".png";
if (randomNumber1 > randomNumber2) { 
  document.querySelector("h1").innerHTML = "Player1 wins"; 
  document.querySelector('#player_1').style.color = 'red';
document.querySelector('#player_1').style.fontWeight = 'bold';
document.querySelector('#player_2').style.color = '';
} else if (randomNumber1 < randomNumber2) { 
    document.querySelector("h1").innerHTML = "Player2 wins"; 
    document.querySelector('#player_2').style.color = 'red';
document.querySelector('#player_2').style.fontWeight = 'bold';
document.querySelector('#player_1').style.color = '';

} else{
  document.querySelector("h1").innerHTML = "Draw!";
  
}


}

