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
    roundWord.displayWordStr();

}

startRound();

// function guessAtempt(roundWord){
//     inquirer.prompt([

//         {
//             type: 'input',
//             name: 'letter',
//             message: 'Guess a letter.'
//         }

//     ]).then(function(response){
//         var userLetter = new Letter(response.letter);

//         roundWord.checkWord(userLetter);

        

//     });
// }

