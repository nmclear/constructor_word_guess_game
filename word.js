var Letter = require("./Letter");


var Word = function(word){
    // this.gameWord = word.split('');
    this.lettersArr = word.split('');
    this.wordArr = [];

    this.setWordLetters = function(){
        //Loop for creating new Letter Objects
        for(var i = 0; i < this.lettersArr.length; i++){
            var newLetter = new Letter(this.lettersArr[i]);
            this.wordArr.push(newLetter);
        }
        console.log(this.wordArr);

        // var tempArr = [];
        // for(var j = 0; j < this.wordArr.length; j++){

        //     var letterChar = this.wordArr[j].character;
        //     tempArr.push(letterChar);

        // }
        // var wordStr = tempArr.join('');
        // console.log(wordStr);

    }
    
    // new Letter(gameWord[]);
    // console.log(gameWord);
    // console.log(wordLetters);

    this.displayWordStr = function(){
        var tempArr = [];
        for(var j = 0; j < this.wordArr.length; j++){
            // var tempArr = [];
            var letterChar = this.wordArr[j].guess();
            tempArr.push(letterChar);
            // console.log(i + ' .. ' + letterChar);
            // wordStr = this.wordArr[j].character.join('');
            // console.log(wordStr);
        }
        var wordStr = tempArr.join('');
        console.log(wordStr);
    }


    // this.displayWordStr = function(wordArr){
    //     // var wordStr = wordArr.join('');
    //     var wordStr = '';
    //     // console.log(wordStr);
    //     for(var i = 0; i < this.wordArr.length; i++){
    //         var letterChar = wordArr[i].character;
    //         console.log(i + ' .. ' + letterChar);
    //         // wordStr = wordArr[i].character.join('');
    //     }
    //     // console.log(wordStr);
    // }

    this.checkWord = function(characterGuess){
        for(var i = 0; i < this.wordLetters.length; i++){
            wordLetters[i].checkGuess(characterGuess);
        }
    }
}

module.exports = Word;

var gameGame = new Letter('d');
// console.log('game: ' + gameGame);
var gameGame1 = new Letter('o');
var gameGame2 = new Letter('g');

// var newWord = new Word(['d', 'o', 'g']);
// var newWord = new Word([gameGame, gameGame1, gameGame2]);
var newWord = new Word('dog');
// console.log('newWord: ' + newWord)
// newWord.displayWordStr();
newWord.setWordLetters();
// newWord.displayWordStr(newWord.setWordLetters());
newWord.displayWordStr();