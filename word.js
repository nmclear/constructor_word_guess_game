var Letter = require("./Letter");


var Word = function(){

    this.wordArr = [];
    this.wordArr.push(new Letter(character));

    this.displayWord = function(){

        for(var i =0; i < wordArr.length; i++){
            wordArr[i].guess();

        }
    }

    this.checkWord = function(characterGuess){
        for(var i = 0; i < wordArr.length; i++){
            wordArr[i].checkGuess(characterGuess);
        }
    }
}

module.exports = Word;