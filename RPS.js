const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerSelection > computerSelection
        return "You win. Rock beats Scissors"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        playerSelection < computerSelection
        return "You lose. Paper beats Rock"
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerSelection > computerSelection
        return "You win. Paper beats Rock"
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        playerSelection < computerSelection
        return "You lose. Scissors beat paper"
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        playerSelection < computerSelection
        return "You lose. Rock beats Scissors"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerSelection > computerSelection
        return "You win. Scissors beat Rock"
    } else {
        playerSelection === computerSelection
        return "It's a draw"
    }
}

function game() {
    for (i=1;i<=5;i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("What's your pick").toLowerCase();
    console.log(playRound(playerSelection, computerSelection))

    if (playerSelection > computerSelection) {
    }
    }


}

game()


