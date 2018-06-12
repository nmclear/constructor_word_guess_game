//========================================================================================================================
// LETTER CONSTRUCTOR
//========================================================================================================================

//Constructor function for creating letter objects
var Letter = function(character){
    this.character = character.toUpperCase();
    this.guessed = false;
    //if guessed, display character, else display placeholder.
    this.guess = function(){
        if(this.character === ' '){
            this.guessed = true;
            return '   ';
        }
        else if(this.guessed){
            return this.character;
        } else {
            return '_ ';
        }
    }
    //Checks if user guess is true.
    this.checkGuess = function(userGuess){
        if(userGuess.toUpperCase() === this.character){
            if(this.guessed === true){
                // console.log('You already guessed the letter ' + this.character + '!!');
                return 'repeat';
            } else {
                this.guessed = true;
                return true;
            } 
        }
        this.guess();
    }
}

module.exports = Letter;
