function computerPlay(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choicesElement = Math.floor(Math.random()*choices.length);
    return choices[choicesElement];
}

function playerSelection(){

}

function gameLoop(computerPlay, playerSelection){

}

console.log(computerPlay());