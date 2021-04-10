/* Coded by Quang Hung, April 10th 2021 */

let computerSelection;
let playerSelection;

function computerPlay(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choicesElement = Math.floor(Math.random()*choices.length);
    return choices[choicesElement];
}

function playRound(computerSelection, playerSelection){
    if (computerSelection == playerSelection){
        return 'Draw!';
    } else if ((computerSelection == 'rock' && playerSelection == 'paper') || (computerSelection == 'paper' && playerSelection == 'scissors') || (computerSelection == 'scissors' && playerSelection == 'rock')){
        return 'Player Win!';
    } else{
        return 'Computer Win!';
    }
}

function game(){
    let playerScore = 0, compScore = 0;
    for (let i = 1; i <= 5; i++){
        playerSelection = prompt('Input your choice (Rock, Paper, Scissors):').toLowerCase();
        computerSelection = computerPlay().toLowerCase();
        console.log('Computer\'s choice:', computerSelection);
        console.log(playRound(computerSelection, playerSelection));

        if (playRound(computerSelection, playerSelection) == 'Player Win!'){
            playerScore++;
            console.log('Player\'s score:', playerScore);
        } else if (playRound(computerSelection, playerSelection) == 'Computer Win!'){
            compScore++;
            console.log('Computer\'s score:', compScore);
        }
    }
    
    if (playerScore > compScore){
        console.log('Player win with', playerScore, 'score!');
    } else if (compScore > playerScore){
        console.log('Computer win with', compScore, 'score!');
    } else{
        console.log('Draw!');
    }
}

game();