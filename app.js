let computerScore = 0;
let playerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");
const outcomeDiv = document.querySelector(".outcome");
const playerRunningPoints = document.querySelector(".player-score");
const computerRunningPoints = document.querySelector(".computer-score");

function computerPlay() {
  const array = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    const p = document.createElement("p");
    p.innerText = "It's a tie, no one gains points";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = " You won, you chose rock";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You win, you chose paper";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You win, you chose scissors";
    outcomeDiv.appendChild(p);
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = " You lost, the computer chose rock";
    outcomeDiv.appendChild(p);
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = " You lost, the computer chose paper";
    outcomeDiv.appendChild(p);
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = " You lost, the computer chose scissors";
    outcomeDiv.appendChild(p);
  }
}

const checkForWinner = (playerScore, computerScore) => {
  if (playerScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("player-won");
    h2.innerText = `You won ${playerScore} to ${computerScore}, well done!`;
    outcomeDiv.append(h2);
  }

  if (computerScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("computer-won");
    h2.innerText = `You lost ${playerScore} to ${computerScore}, better luck next time !`;
    outcomeDiv.append(h2);
  }
};

const updateScores = (playerScore, computerScore) => {
  playerRunningPoints.innerText = `Player score: ${playerScore}`;
  computerRunningPoints.innerText = `Computer score: ${computerScore}`;
};

rockButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  checkForWinner(playerScore, computerScore);
  updateScores(playerScore, computerScore);
});

paperButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  checkForWinner(playerScore, computerScore);
  updateScores(playerScore, computerScore);
});

scissorButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  checkForWinner(playerScore, computerScore);
  updateScores(playerScore, computerScore);
});
