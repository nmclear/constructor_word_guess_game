var Letter = require("./Letter");


var Word = function(wordLetters){
    // this.gameWord = word.split('');
    this.wordLetters = wordLetters;
    this.wordArr = [];

    this.setWordLetters = function(){
        for(var i = 0; i < this.wordLetters.length; i++){
            var newLetter = new Letter(this.wordLetters[i]);
            this.wordArr.push(newLetter);
        }
    }
    
    // new Letter(gameWord[]);
    // console.log(gameWord);
    // console.log(wordLetters);

    this.displayWordStr = function(){
        var wordStr = '';
        for(var i = 0; i < this.wordLetters.length; i++){
            wordStr += wordLetters[i].guess();
        }
        //change to return when index.js is ready.
        console.log(wordStr);
    }

    this.checkWord = function(characterGuess){
        for(var i = 0; i < this.wordLetters.length; i++){
            wordLetters[i].checkGuess(characterGuess);
        }
    }
}

module.exports = Word;

var gameGame = new Letter('d');
console.log('game: ' + gameGame);
var gameGame1 = new Letter('o');
var gameGame2 = new Letter('g');

// var newWord = new Word(['d', 'o', 'g']);
var newWord = new Word([gameGame, gameGame1, gameGame2]);
console.log('newWord: ' + newWord)
newWord.displayWordStr();