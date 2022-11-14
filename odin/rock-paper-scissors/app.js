//Set variables
let cScore = 0;
let pScore = 0;
let player;
let computer;
let winner;
let buttonChoice = document.querySelectorAll('.button-choice');
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');
let roundWinner = document.querySelector('.round-winner');
let playerMatchScore = document.querySelector('.player-match-score');
let computerMatchScore = document.querySelector('.computer-match-score');
let gameWinner = document.querySelector('.game-winner');
let restart = document.querySelector('.restart');


//Click event for player
buttonChoice.forEach((button) => {
    button.addEventListener('click', () => {
        player = button.textContent;
        getComputerChoice();
        playerScore.textContent = (`Player: ${player}`);
        computerScore.textContent = (`Computer: ${computer}`);
        roundWinner.textContent = (`Winner: ${playRound()}`);
        endGame();
        won();
    });
});


//Random choice for computer
function getComputerChoice() {
    num = Math.floor(Math.random() * 3) + 1;

    if (num === 1) {
        computer = "ROCK";
    } else if (num === 2) {
        computer = "PAPER";
    } else {
        computer = "SCISSORS";
    }
}


//Check who won and increase score
function playRound() {
    if (player === "ROCK" && computer === "ROCK" || player === "PAPER" && computer === "PAPER"
        || player === "SCISSORS" && computer === "SCISSORS") {
        return "DRAW";

    } else if (player === "ROCK" && computer === "PAPER" || player === "PAPER" && computer === "SCISSORS"
        || player === "SCISSORS" && computer === "ROCK") {
        cScore += 1;
        computerMatchScore.textContent = (`Comp Score: ${cScore}`);
        return "COMPUTER";

    } else {
        pScore += 1;
        playerMatchScore.textContent = (`Player Score: ${pScore}`);
        return "PLAYER";

    }
}


//Show winner
function endGame() {
    if (pScore === 5) {
        gameWinner.style.color = 'blue';
        return gameWinner.textContent = (`The Winner is Player`);
    } else if (cScore === 5) {
        gameWinner.style.color = 'blue';
        return gameWinner.textContent = (`The Winner is Computer`);

    }
}


//Remove buttons and show play again button for game reset
function won() {
    if (pScore === 5 || cScore === 5) {
        document.querySelector('.rock').style.display = 'none';
        document.querySelector('.paper').style.display = 'none';
        document.querySelector('.scissors').style.display = 'none';
        document.querySelector('.restart').style.display = 'block';
        restart.addEventListener('click', () => {
            location.reload();
        });

    }
}


