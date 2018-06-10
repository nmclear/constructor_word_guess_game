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
    var selectWordArr = selectWord.split('');
    var roundLettersArr = [];
    console.log(selectWordArr);

    for(var i = 0; i < selectWordArr.length; i++){
        roundLettersArr += (new Letter(selectWordArr[i]));
    }
    console.log(roundLettersArr);

    var roundWord = new Word(roundLettersArr);
    console.log(roundWord);
}

startRound();