
let startBtn = document.getElementById('startBtn');
let userChoiceDisplay = document.querySelector('#userChoice');
let computerChoiceDisplay = document.querySelector('#computerChoice');
let resultDisplay = document.querySelector('#result');
let winsDisplay = document.querySelector('#wins');
let lossesDisplay = document.querySelector('#losses');
let tiesDisplay = document.querySelector('#ties');


let wins = 0;
let losses = 0;
let ties = 0;

let userChoice = '';

const choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock').addEventListener('click', () => selectChoice('rock'));
document.getElementById('paper').addEventListener('click', () => selectChoice('paper'));
document.getElementById('scissors').addEventListener('click', () => selectChoice('scissors'));

document.getElementById('startBtn').addEventListener('click', playGame);
document.getElementById('resetBtn').addEventListener('click', resetGame);


function selectChoice(choice) {
    userChoice = choice;
    userChoiceDisplay.innerHTML = `<img src="assets/images/icon-${choice}.png" alt="${choice}" class='choice--img'/>`;
    console.log("User selected: ", choice);
    startBtn.disabled = false;
}


function getComputerChoice () {

    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log("Computer selected: ", choices[randomIndex]);
    return choices[randomIndex];
}


function determineWinner (userChoice, computerChoice) {
    console.log("Determining winner...")
    if(userChoice === computerChoice){
        return 'draw';
    }

    else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock')    ||
        (userChoice === 'scissors' && computerChoice === 'paper')    
    ){
        return 'win';
    } else {
        return 'lose';
    }

}


function updateScore (result) {
    console.log("Updating score for result:", result);
    if (result === 'win'){
        wins++;
        winsDisplay.textContent = wins;
    } else if (result === 'lose'){
        losses++;
        lossesDisplay.textContent = losses;
    } else if (result === 'draw'){
        ties++;
        tiesDisplay.textContent = ties;
    }

}


function playGame () {
    console.log("Game started...");
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice,computerChoice);
    
    computerChoiceDisplay.innerHTML = `<img src="assets/images/icon-${computerChoice}.png" alt="${computerChoice}" class='choice--img'/>`;

    if (result === 'draw') {
        resultDisplay.textContent = 'It\'s a Draw';
    } else if (result === 'win') {
        resultDisplay.textContent = 'User Wins';
    } else {
        resultDisplay.textContent = 'Computer Wins';
    }

    updateScore(result);
    
}


function resetGame () {
    console.log("Game reset...\n\n");
    userChoice = '';

    userChoiceDisplay.innerHTML = '<img src="assets/images/icon-user.png" alt="user" class="choice--img">';
    computerChoiceDisplay.innerHTML = '<img src="assets/images/icon-computer.png" alt="computer" class="choice--img">';
    resultDisplay.textContent = 'Choose your weapon!';
    
    wins = 0;
    losses = 0;
    ties = 0;

    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    tiesDisplay.textContent = ties;
    

    startBtn.disabled = true;
    
}
