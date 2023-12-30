

function getComputerChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
    }
    
    
    const array = ['Rock', 'Paper', 'Scissors'];

 function playRound(playerSelection, computerSelection) {
    // your code here!
    if (player === 'rock' && computer === 'paper') {
        return 'You lose, paper beats rock!';
    } else if (player === 'paper' && computer === 'rock') {
        return 'You win, paper beats rock!';
    } else if (player === 'paper' && computer === 'scissors') {
        return 'You lose, scissors beats paper!';
    } else if (player === 'rock' && computer === 'scissors') {

        return 'You win, rock beats scissors!';
    } else if (player === 'scissors' && computer === 'rock') {

        return 'You lose, rock beats scissors!';
    } else if (player === 'scissors' && computer === 'paper') {
        return 'You win, scissors beats paper!';
    } else if (player === computer) {
        const newPlayerSelection = prompt('Choose again between (rock, paper, scissors): ');
        const newComputerSelection = getComputerChoice(choice1);
        return playRound(newPlayerSelection, newComputerSelection);
    } else {
        return 'Enter a supported value. Rock, paper, or scissors.';
    }
}


const newPlayerSelection = prompt('Choose again between (rock, paper, scissors): ').toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();
console.log(playRound(playerSelection, computerSelection));


    

   
         
         