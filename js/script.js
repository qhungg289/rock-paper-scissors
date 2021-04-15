/* Coded by Quang Hung, April 10th 2021 */


let computerSelection;
let playerSelection;
let playerScore = 0, compScore = 0;
const rockChoice = document.querySelector('#rock');
const paperChoice = document.querySelector('#paper');
const scissorsChoice = document.querySelector('#scissors');
const mainDisplayer = document.querySelector('#displayer');
const result = document.createElement('div');
const scoreDisplayer = document.createElement('div');
const resetButton = document.querySelector('#reset');


function computerPlay(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choicesElement = Math.floor(Math.random()*choices.length);
    return choices[choicesElement].toLowerCase();
}

function playRound(computerSelection, playerSelection){
    if (computerSelection == playerSelection){
        console.log(computerSelection, playerSelection);
        return 'Draw!';
    } else if ((computerSelection == 'rock' && playerSelection == 'paper') || (computerSelection == 'paper' && playerSelection == 'scissors') || (computerSelection == 'scissors' && playerSelection == 'rock')){
        console.log(computerSelection, playerSelection);
        return 'Player Win!';
    } else{
        console.log(computerSelection, playerSelection);
        return 'Computer Win!';
    }
}

function checkScore(pScore, cScore){
    if (pScore == 5){
        alert('Player get the final crown!');
    } else if (cScore == 5){
        alert('Computer beat the player to death!');
    }
}

rockChoice.addEventListener('click', function(){
    result.textContent = playRound(computerPlay(), 'rock');
    mainDisplayer.appendChild(result);
    if (result.textContent == 'Player Win!'){
        playerScore++;
        scoreDisplayer.textContent = playerScore;
        mainDisplayer.appendChild(scoreDisplayer);
    } else if (result.textContent == 'Computer Win!'){
        compScore++;
        scoreDisplayer.textContent = compScore;
        mainDisplayer.appendChild(scoreDisplayer);
    } else{
        mainDisplayer.removeChild(scoreDisplayer);
    }

    checkScore(playerScore, compScore);
});

paperChoice.addEventListener('click', function(){
    result.textContent = playRound(computerPlay(), 'paper');
    mainDisplayer.appendChild(result);
    if (result.textContent == 'Player Win!'){
        playerScore++;
        scoreDisplayer.textContent = playerScore;
        mainDisplayer.appendChild(scoreDisplayer);
    } else if (result.textContent == 'Computer Win!'){
        compScore++;
        scoreDisplayer.textContent = compScore;
        mainDisplayer.appendChild(scoreDisplayer);
    } else{
        mainDisplayer.removeChild(scoreDisplayer);
    }

    checkScore(playerScore, compScore);
});

scissorsChoice.addEventListener('click', function(){
    result.textContent = playRound(computerPlay(), 'scissors');
    mainDisplayer.appendChild(result);
    if (result.textContent == 'Player Win!'){
        playerScore++;
        scoreDisplayer.textContent = playerScore;
        mainDisplayer.appendChild(scoreDisplayer);
    } else if (result.textContent == 'Computer Win!'){
        compScore++;
        scoreDisplayer.textContent = compScore;
        mainDisplayer.appendChild(scoreDisplayer);
    } else{
        mainDisplayer.removeChild(scoreDisplayer);
    }

    checkScore(playerScore, compScore);
});

resetButton.addEventListener('click', function(){
    playerScore = 0;
    compScore = 0;
})