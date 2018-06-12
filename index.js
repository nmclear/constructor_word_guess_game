//========================================================================================================================
// REQUIRED PACKAGES AND FILES
//========================================================================================================================

var Letter = require("./Letter");
var Word = require("./Word");
var inquirer = require('inquirer');
var chalk = require('chalk');

//========================================================================================================================
// WORD BANK
//========================================================================================================================

var wordBank = [
    'friends','seinfeld','cheers','the big bang theory',
    'modern family','how i met your mother','the office',
    'arrested development','parks and recreation','community',
    'family guy','its always sunny in philadelphia','bobs burgers'
];

//========================================================================================================================
// GAME FUNCTIONS
//========================================================================================================================

function startRound(){
    console.log(chalk.green(
        'Welcome!!! Enjoy the word guess game! \n Hint: all words are tv sitcom titles \n'
    ));
    var selectWord = wordBank[Math.floor((Math.random() * wordBank.length))];
    var roundWord = new Word(selectWord);
    roundWord.setWordLetters();
    guessAttempt(roundWord, selectWord);
};

function guessAttempt(roundWord, selectWord){
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
                guessAttempt(roundWord, selectWord);
            }
        });
    } else {
        console.log(chalk.red('You lost! No guesses remaining.' + '\n' +
        'The correct word is: ' + selectWord.toUpperCase()));
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