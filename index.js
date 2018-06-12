var Letter = require("./Letter");
var Word = require("./Word");
var inquirer = require('inquirer');
var prompt = require('prompt');

var wordBank = [
    'dog',
    'cat',
    'fish',
    'ocean',
    'shark',
    'seaweed',
    'pacific ocean',
    'blue whale'
];


startRound();

function startRound(){
    var selectWord = wordBank[Math.floor((Math.random() * wordBank.length))];
    console.log('selectWord: ' + selectWord);
    var roundWord = new Word(selectWord);
    roundWord.setWordLetters();
    guessAttempt(roundWord);
}



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
            // guessAtempt(roundWord);


            // // Check if input is a letter.
            // if(letters.test(userLetter)){
            //     console.log(roundWord);
            //     roundWord.checkWord(userLetter);
            //     //Check to see if user guessed all characters.
            //     if(roundWord.checkFinishedWord()){
            //         console.log('You win!');
            //         playAgain();
            //     } else {
            //         guessAttempt(roundWord);
            //     }
            // } else {
            //     console.log('PLEASE INPUT A LETTER ONLY!');
            //     guessAttempt(roundWord);
            // }
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