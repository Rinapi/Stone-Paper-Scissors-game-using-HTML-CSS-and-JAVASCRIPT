const userScoreSpan = document.getElementById('user-score');
const compScoreSpan = document.getElementById('comp-score');
const resultP = document.querySelector('.result > p');
const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');

let userScore = 0;
let compScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultP.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultP.innerHTML = `${userChoice} loses to ${computerChoice}. You lost...`;
}

function draw(userChoice, computerChoice) {
    resultP.innerHTML = `${userChoice} equals ${computerChoice}. It's a draw.`;
}

function main() {
    rockDiv.addEventListener('click', () => game('rock'));
    paperDiv.addEventListener('click', () => game('paper'));
    scissorsDiv.addEventListener('click', () => game('scissors'));
}

main();
