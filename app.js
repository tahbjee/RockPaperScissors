let computerScore = 0;
let playerScore = 0;

const myArray = ["rock", "paper", "scissors"];

function getComputerChoice(array) {
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}

function game() {
  for (let i = 0; i <= 5; i++) {
    const playerSelection = prompt("Please enter value").toLowerCase();
    const computerSelection = getComputerChoice(myArray).toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
  }

  console.log("Game Over!");
  console.log("Player Score: " + playerScore);
  console.log("Computer Score: " + computerScore);
}

game();
