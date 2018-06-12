var Letter = require("./Letter");


var Word = function(word){
    this.lettersArr = word.split('');
    this.wordArr = [];
    this.guessesRemaining = 10;

    this.setWordLetters = function(){
        //Loop for creating new Letter Objects
        for(var i = 0; i < this.lettersArr.length; i++){
            var newLetter = new Letter(this.lettersArr[i]);
            this.wordArr.push(newLetter);
        }
        this.displayWordStr();
    }

    this.displayWordStr = function(){
        //Checks whether to display character or placeholder
        var tempArr = [];
        for(var j = 0; j < this.wordArr.length; j++){
            var tempLetterObj = this.wordArr[j];
            var letterChar = tempLetterObj.guess();
            tempArr.push(letterChar);
        }
        var wordStr = tempArr.join('');
        //Display gameboard
        console.log(wordStr);
    }

    this.checkWord = function(guess){
        //Checks if user guess is in word

        var letters = /^[A-Za-z]+$/;
        // check if input is a letter
        if(letters.test(guess)){
            //checks if user guess is in word
            var correctGuess = false;
            // for(var i = 0; i < this.wordArr.length; i++){
            //     this.wordArr[i].checkGuess(guess);
            // }
  

            for(var i = 0; i < this.wordArr.length; i++){
                if(this.wordArr[i].checkGuess(guess)){
                    correctGuess = true;
                }
            }
            if(!correctGuess){
                this.guessesRemaining--;
                console.log('Reamining Guesses: ' + this.guessesRemaining);
            }

            this.displayWordStr();
            // if(!return){
            //     this.guessesRemaining--;
            //     console.log(this.guessesRemaining + '... you know this guess');
            // }
        } else {
            console.log('PLEASE INPUT A LETTER ONLY!');
        }


        // for(var i = 0; i < this.wordArr.length; i++){
        //     this.wordArr[i].checkGuess(guess);
        // }
        // this.displayWordStr();
    }

    this.checkFinishedWord = function(){
        //Checks if the word is fully guessed.
        for(var i = 0; i < this.wordArr.length; i++){
            if(!this.wordArr[i].guessed){
                return false;
            };
        } return true;
    }
}

module.exports = Word;