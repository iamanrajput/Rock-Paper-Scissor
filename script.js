let machineMove = "";
let result = "";
let move = "";

let score = {
  wins: 0,
  losses: 0,
  ties: 0,
  moves: 0
};

// Load saved score from localStorage if it exists
function loadScore() {
  const savedScore = localStorage.getItem('rpsScore');
  if (savedScore) {
    score = JSON.parse(savedScore);
    showScore();
  }
}

// Save the score to localStorage
function saveScore() {
  localStorage.setItem('rpsScore', JSON.stringify(score));
}

// This function will decide computer's move by using Math.random
function random() {
  let temp = Math.random();
  if (temp >= 0 && temp < 1/3) machineMove = "Rock";
  else if (temp > 1/3 && temp < 2/3) machineMove = "Paper";
  else machineMove = "Scissor";

  return machineMove;
};

function playerResult(playerMove, machineMove) {
  if (playerMove === 'rock') {
    if (machineMove === "Rock") result = "It's a tie";
    else if (machineMove === "Paper") result = "You Lose :(";
    else result = "You Win!";
  } else if (playerMove === 'paper') {
    if (machineMove === "Rock") result = "You Win!";
    else if (machineMove === "Paper") result = "It's a tie";
    else result = "You Lose :(";
  } else if (playerMove === 'scissor') {
    if (machineMove === "Rock") result = "You Lose :(";
    else if (machineMove === "Paper") result = "You Win!";
    else result = "It's a tie";
  }
}

function handleButtonClick(playerMove) {
  move = playerMove;
  random();
  playerResult(playerMove, machineMove);
  updateScore();
  showScore();
  document.querySelector('.show-result-text').innerHTML = result;
  showMoves();
}

['rock', 'paper', 'scissor'].forEach(m => {
  document.querySelector(`.${m}-button`).addEventListener('click', () => handleButtonClick(m));
});

function updateScore() {
  score.moves++;
  if (result === 'You Win!') score.wins++;
  else if (result == "It's a tie") score.ties++;
  else score.losses++;

  saveScore(); // Save score after updating
}

function showMoves() {
  document.querySelector('.show-result-img').innerHTML =
    `
  You : <img class="player-move-img" src="/img/${move}-emoji.png">
  Machine : <img class="machine-move-img" src="/img/${machineMove}-emoji.png">
  `;
}

function showScore() {
  document.querySelector('.show-score').innerHTML =
    `
  Wins: ${score.wins}, &nbsp; Losses: ${score.losses}, &nbsp; Ties: ${score.ties}
  &nbsp; Total Moves: ${score.moves}
  `;
}

function resetScore() {
  const isConfirmed = confirm('Are you sure you want to reset the score');

  if (isConfirmed) {
  score.losses = 0;
  score.moves = 0;
  score.ties = 0;
  score.wins = 0;
  saveScore(); // Save the reset score
  showScore();
  }
}

document.querySelector('.reset-button').addEventListener('click', resetScore);

let isAutoPlaying = false;
let id;


//using setInterval, which runs a function in every set interval.
function autoPlay() {
  if (!isAutoPlaying) {
    id = setInterval(() => {
      let moves = ['rock', 'paper', 'scissor'];
      let randomMove = moves[Math.floor(Math.random() * moves.length)];
      handleButtonClick(randomMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.auto-play-button').innerHTML = 'Stop';
  } else {
    clearInterval(id);
    document.querySelector('.auto-play-button').innerHTML = 'Auto Play';
    isAutoPlaying = false;
  }
}

document.querySelector('.auto-play-button').addEventListener('click', autoPlay);

// Load the score from localStorage when the page loads
window.onload = loadScore;
