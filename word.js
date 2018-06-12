var Letter = require("./Letter");


var Word = function(word){
    // this.gameWord = word.split('');
    this.lettersArr = word.split('');
    // this.wordLength = this.lettersArr.length;
    console.log(this.wordLength);
    this.wordArr = [];

    this.setWordLetters = function(){
        //Loop for creating new Letter Objects
        for(var i = 0; i < this.lettersArr.length; i++){
            var newLetter = new Letter(this.lettersArr[i]);
            this.wordArr.push(newLetter);
        }
        console.log(this.wordArr);

        this.displayWordStr();
    }

    this.displayWordStr = function(){

        var tempArr = [];
        for(var j = 0; j < this.wordArr.length; j++){
            var tempLetterObj = this.wordArr[j];
            var letterChar = tempLetterObj.guess();
            tempArr.push(letterChar);

        }
        var wordStr = tempArr.join('');
        console.log(wordStr);
    }

    this.checkWord = function(guess){
        for(var i = 0; i < this.wordArr.length; i++){
            this.wordArr[i].checkGuess(guess);
        }
        this.displayWordStr();
    }
    this.checkFinishedWord = function(){
        for(var i = 0; i < this.wordArr.length; i++){
            if(!this.wordArr[i].guessed){
                return false;
            };
        }
        return true;
    }
}

module.exports = Word;