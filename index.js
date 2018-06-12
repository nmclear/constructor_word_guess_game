var Letter = require("./Letter");
var Word = require("./Word");
var inquirer = require('inquirer');
var prompt = require('prompt');

var wordBank = [
    'dog',
    'cat',
    'fish',
    'ocean',
    'shark'
];


startRound();

function startRound(){
    var selectWord = wordBank[Math.floor((Math.random() * wordBank.length))];
    console.log('selectWord: ' + selectWord);
    var roundWord = new Word(selectWord);
    roundWord.setWordLetters();
    guessAtempt(roundWord);
}



function guessAtempt(roundWord){
    inquirer.prompt([
        {
            type: 'input',
            name: 'letter',
            message: 'Guess a letter.'
        }
    ]).then(function(response){
        var userLetter = response.letter;
        console.log(roundWord);
        roundWord.checkWord(userLetter);

        if(roundWord.checkFinishedWord()){
            console.log('You win!');
            playAgain();
        } else {
            guessAtempt(roundWord);
        }
    });
}




function playAgain(){
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'playAgain',
            message: 'Do you want to play again?',
            default: true
        }
    ]).then(function(answer){
        if(answer.playAgain){
            console.log('here we go for the next round!');
            startRound();
        } else {
            console.log('Thanks for playing!');
            process.exit();
        }
    })
}