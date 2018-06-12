//========================================================================================================================
// REQUIRED PACKAGES AND FILES
//========================================================================================================================

var Letter = require("./Letter");
var Word = require("./Word");
var inquirer = require('inquirer');
// var prompt = require('prompt');
var colors = require('colors/safe');
var chalk = require('chalk');

//========================================================================================================================
// WORD BANK
//========================================================================================================================

var wordBank = [
    // 'dog',
    // 'cat',
    // 'fish',
    // 'ocean',
    // 'shark',
    // 'seaweed',
    // 'pacific ocean',
    'blue whale'
];

//========================================================================================================================
// GAME FUNCTIONS
//========================================================================================================================

function startRound(){
    var selectWord = wordBank[Math.floor((Math.random() * wordBank.length))];
    var roundWord = new Word(selectWord);
    roundWord.setWordLetters();
    guessAttempt(roundWord);
};

function guessAttempt(roundWord){
    if(roundWord.guessesRemaining > 0){
        inquirer.prompt([
            {
                type: 'input',
                name: 'letter',
                message: 'Guess a letter.'
            }
        ]).then(function(response){
            var userLetter = response.letter;
            //Check if userLetter is in the roundWord.
            roundWord.checkWord(userLetter);
            //Check to see if user guessed all characters.
            if(roundWord.checkFinishedWord()){
                console.log('You win!');
                playAgain();
            } else {
                guessAttempt(roundWord);
            }
        });
    } else {
        console.log('You lost! No guesses remaining.');
        playAgain();
    }
};

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
            console.log(chalk.blue.bold('here we go for the next round!'));
            startRound();
        } else {
            console.log(chalk.cyan.italic('I see how it is....'));
            process.exit();
        }
    })
};

//========================================================================================================================
// START A ROUND
//========================================================================================================================
startRound();