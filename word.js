//========================================================================================================================
// WORD CONSTRUCTOR
//========================================================================================================================

var Letter = require("./Letter");
var chalk = require('chalk');

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
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n');
        console.log(wordStr);
    }

    this.checkWord = function(guess){
        //Checks if user guess is in word

        var letters = /^[A-Za-z]+$/;
        // check if input is a letter
        if(letters.test(guess)){
            //checks if user guess is in word
            var correctGuess = false;
            var repeat = false;

            for(var i = 0; i < this.wordArr.length; i++){
                var check = this.wordArr[i].checkGuess(guess);
                if(check === 'repeat'){
                    repeat = true;
                } else if(check){
                    correctGuess = true;
                }
            }
            // removes a guess if incorrect
            if (correctGuess){
                console.log(chalk.green('CORRECT!'));
            } else if(repeat){
                console.log('You already guessed the letter ' + guess.toUpperCase() + '!!');
            } else {
                this.guessesRemaining--;
                console.log(chalk.red(guess.toUpperCase() + ' is INCORRECT!'));
                console.log(chalk.bold.underline('Reamining Guesses: ' + this.guessesRemaining));
            }
            this.displayWordStr();
        } else {
            console.log('PLEASE INPUT A LETTER ONLY!');
        }
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