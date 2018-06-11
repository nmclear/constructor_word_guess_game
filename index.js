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

function startRound(){
    var selectWord = wordBank[Math.floor((Math.random() * wordBank.length))];
    console.log('selectWord: ' + selectWord);
    var roundWord = new Word(selectWord);
    roundWord.setWordLetters();
    // roundWord.displayWordStr();
    // console.log(roundWord);
    guessAtempt(roundWord);
}

startRound();

function guessAtempt(roundWord){
    inquirer.prompt([

        {
            type: 'input',
            name: 'letter',
            message: 'Guess a letter.'
        }

    ]).then(function(response){
        // var userLetter = new Letter(response.letter);
        var userLetter = response.letter;
        console.log(roundWord);
        roundWord.checkWord(userLetter);

        guessAtempt(roundWord);
        // for(var i = 0; i < test.length; i++){

        //     test[i].checkWord(userLetter);
        //     // roundWord[i].guess();
        // }
        // roundWord[i].checkWord(userLetter);

        
        // roundWord.displayWordStr();
    });
}

function checkGame(){

};