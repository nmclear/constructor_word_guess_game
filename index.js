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

var guessRemaining = 10;

startRound();

function startRound(){
    var selectWord = wordBank[Math.floor((Math.random() * wordBank.length))];
    console.log('selectWord: ' + selectWord);
    var roundWord = new Word(selectWord);
    roundWord.setWordLetters();
    guessAttempt(roundWord);
}



function guessAttempt(roundWord){
    if(guessRemaining > 0){
        console.log(guessRemaining + ' guesses remaining..');
        inquirer.prompt([
            {
                type: 'input',
                name: 'letter',
                message: 'Guess a letter.'
            }
        ]).then(function(response){
            var userLetter = response.letter;
            var letters = /^[A-Za-z]+$/;

            if(letters.test(userLetter)){
                console.log(roundWord);
                roundWord.checkWord(userLetter);
    
                if(roundWord.checkFinishedWord()){
                    console.log('You win!');
                    playAgain();
                } else {
                    guessAttempt(roundWord);
                }
            } else {
                console.log('PLEASE INPUT A LETTER ONLY!');
                guessAttempt(roundWord);
            }
        });
    } else {
        console.log('You lost! No guesses remaining.');
        playAgain();
    }
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