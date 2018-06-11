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
    var selectWordArr = selectWord.split('');
    var roundLettersArr = [];
    console.log('selectWordArr: ' + selectWordArr);
    console.log('arr index: ' + selectWordArr[0]);

    // for(var i = 0; i < selectWordArr.length; i++){
        var testTester = new Letter(selectWordArr[0]);
        console.log('testTester: ' + 0 + '...' + testTester.character);
        // roundLettersArr += (new Letter(selectWordArr[i]));
    // }
    console.log('roundLettetrsArr: ' + roundLettersArr);
    console.log(roundLettersArr[2]);

    var roundWord = new Word(roundLettersArr);
    // roundWord.displayWordStr();
    // console.log(roundWord);
    // guessAtempt(roundWord);
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
        var userLetter = new Letter(response.letter);

        roundWord.checkWord(userLetter);

        

    });
}