const choices = ['rock', 'paper', 'scissors'];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' || playerSelection === 'scissors' || playerSelection === 'paper') {
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++;
            return "You win. Rock beats Scissors"
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;
            return "You lose. Paper beats Rock"
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            return "You win. Paper beats Rock"
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            return "You lose. Scissors beat paper"
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            return "You lose. Rock beats Scissors"
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            return "You win. Scissors beat Rock"
        } else {
            return "It's a draw"
        }
    } else {
        return "Enter rock, paper or scissors. Try again"
    }
}

function game() {
    playRound(playerSelection, computerSelection);
    for (i=1;i<=5;i++) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("What's your pick").toLowerCase();
    console.log(playRound(playerSelection, computerSelection))
    console.log(playerSelection, computerSelection)
    console.log(playerScore, computerScore)
    }
}

game()

if ((playerScore > computerScore)) {
    alert("You win");
} else if ((computerScore > playerScore)) {
    alert("You lose");
} else {
    alert("It's a draw")
}


