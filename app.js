let choices = ["Rock", "Paper", "Scissors"]

let playerScore = 0;
let computerScore = 0;

function createOutput(text) {
    let textline = document.createElement('p');
    textline.textContent = text;
    outputDiv.appendChild(textline);
}

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * 3)]
}

function getPlayerChoice(choices) {
    return prompt("Enter Rock Paper or Scissors:").toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        winLoss.textContent = 'Draw!'
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        return 'draw';
    } else if ((playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        winLoss.textContent = 'You Win!'
        playerScore++
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        return 'win';
    } else {
        winLoss.textContent = 'You Lose!'
        computerScore++
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        return 'lose';
    }
}

function game(playRound, repeat) {

    let playerRoundWins = 0
    let computerRoundWins = 0
    let overallWinner;

    for (let i = 1; i <= repeat; i++) {
        createOutput("Round: " + (i))
        console.log('Player: ' + playerRoundWins)
        console.log('Computer: ' + computerRoundWins)

        let computerSelection = getComputerChoice(choices)
        console.log("Com choice: " + computerSelection)

        let playerSelection = getPlayerChoice(choices)
        console.log("Plyr choice: " + playerSelection)

        let result = playRound(playerSelection, computerSelection)
        console.log(result)

        switch (result) {
            case "win":
                ++playerRoundWins;
                break;
            case "lose":
                ++computerRoundWins;
                break;
        }
    }

    if (playerRoundWins > computerRoundWins) {
        overallWinner = "player"
    } else if (computerRoundWins > playerRoundWins) {
        overallWinner = "computer"
    } else {
        overallWinner = 'draw'
    }

    console.log(overallWinner + " wins overall!")
}

const buttons = document.querySelectorAll('button');
console.log(buttons)
const outputDiv = document.querySelector('.content');

const playerMoveCurrent = document.querySelector("#playermovecurrent")
const computerMoveCurrent = document.querySelector("#computermovecurrent")
const winLoss = document.querySelector(".winloss")

const playerScoreText = document.querySelector("#playerscore")
const computerScoreText = document.querySelector("#computerscore")

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        let computerCurrentChoice = getComputerChoice(choices)
        playerMoveCurrent.textContent = button.id
        computerMoveCurrent.textContent = computerCurrentChoice
        playRound(button.id, computerCurrentChoice);
    });
});

playerScoreText.textContent = playerScore;
computerScoreText.textContent = computerScore;