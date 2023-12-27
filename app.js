



// function  getComputerChoice(array) {
//     const randomIndex = Math.floor(Math.random() * array.length);
//     return array[randomIndex];
//   }
  

//   const choice1 = ['Rock', 'Paper', 'Scissors'];
// //   console.log(getComputerChoice(choice1)); // Outputs a random fruit
  


// function playRound(playerSelection, computerSelection) {
//     // Compare with consistent casing
//     if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
//       console.log('You lose, paper beats rock!');
//     } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
//         console.log('You win, paper beats rock!');
//     }  else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
//         console.log('You lose, scissors beats rock!');
//     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
//         console.log('You win, rock beats scissors!');

//     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
//         console.log('You lose, rock beats scissors!');

//     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
//         console.log('You win, scissors beats paper!');
//     } 
//     // tie
//     else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'paper') {
//         console.log('It\'s a tie!');
//         playRound();
//         return;
//     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'rock') {
//     console.log('It\'s a tie!');
//     playRound();
//     return;
//     }else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'scissors') {
//     console.log('It\'s a tie!');
//     playRound();
//     return;
//     }else{
//     console.log('Enter a suportted value. Rock, paper or scissors.')
//   }};
   
//   const playerSelection = prompt('Choose one between (rock, paper, scissors): ');
//   const computerSelection = getComputerChoice(choice1);
//   console.log(playRound(playerSelection, computerSelection));

function getComputerChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Convert both selections to lowercase for case-insensitive comparison
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    // Compare selections
    if (player === 'rock' && computer === 'paper') {
        console.log('You lose, paper beats rock!');
    } else if (player === 'paper' && computer === 'rock') {
        console.log('You win, paper beats rock!');
    } else if (player === 'paper' && computer === 'scissors') {
        console.log('You lose, scissors beats paper!');
    } else if (player === 'rock' && computer === 'scissors') {
        console.log('You win, rock beats scissors!');
    } else if (player === 'scissors' && computer === 'rock') {
        console.log('You lose, rock beats scissors!');
    } else if (player === 'scissors' && computer === 'paper') {
        console.log('You win, scissors beats paper!');
    } else if (player === computer) {
        // Tie
        console.log('It\'s a tie!');

        const newPlayerSelection = prompt('Choose again between (rock, paper, scissors): ');
        const newComputerSelection = getComputerChoice(choice1);
        return playRound(newPlayerSelection, newComputerSelection);
    } else {
        console.log('Enter a supported value. Rock, paper, or scissors.');
    }
}

const choice1 = ['rock', 'paper', 'scissors'];
const playerSelection = prompt('Choose one between (rock, paper, scissors): ');
const computerSelection = getComputerChoice(choice1);
console.log(playRound(playerSelection, computerSelection));