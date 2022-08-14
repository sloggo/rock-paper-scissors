let choices = ["rock", "paper", "scissors"]

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
    createOutput('Computer: ' + computerSelection + ' Player: ' + playerSelection)
    if (playerSelection === computerSelection) {
        createOutput('draw')
        return 'draw';
    } else if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        createOutput('win')
        return 'win';
    } else {
        createOutput('lose')
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

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        let computerSelection
        playRound(button.id, getComputerChoice(choices));
    });
});