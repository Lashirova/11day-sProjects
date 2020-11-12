let doorImage1 = document.getElementById('door_a');
let doorImage2 = document.getElementById('door_b');
let doorImage3 = document.getElementById('door_c');
let flyDoorPath = "findfly.png";
let oceanDoorPath = "ocean.png";
let forestDoorPath = "forest.png";
let closedDoorPath = "door_closed.png";
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
let startButton = document.getElementById('start');
let currentlyPlaying = true;
const randomFindDoorGenerator = () => {
  let findDoor = Math.floor(Math.random() * numClosedDoors);
  if(findDoor === 0){
   openDoor1 = flyDoorPath;
   openDoor2 = oceanDoorPath;
   openDoor3 = forestDoorPath;
  }else if(findDoor === 1){
   openDoor2 = flyDoorPath;
   openDoor1 = forestDoorPath;
   openDoor3 = oceanDoorPath;
  }else{
   openDoor3 = flyDoorPath;
   openDoor1 = oceanDoorPath;
   openDoor2 = forestDoorPath;
  }
 };
 doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};
doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};
doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};
startButton.onclick = () => {
  if (currentlyPlaying) {
  startRound();
}
  currentlyPlaying = true;
};
const startRound = () => {
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  randomFindDoorGenerator();
};
function gameOver(status){
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  }else {
    startButton.innerHTML = 'Game over! Play again?'
  }
  currentlyPlaying = false;
};
const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }else if (isFly(door)) {
    gameOver('lose');
  }
};
const isClicked = (door) => {
  if (door.src.includes(closedDoorPath)) {
    return false;
  }else {
    return true;
  }
};
const isFly = (door) => {
  if (door.src.includes(flyDoorPath)) {
    return true;
  } else {
    return false;
  }
};
startRound();