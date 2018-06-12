
//Constructor function for creating letter objects
var Letter = function(character){
    this.character = character;
    this.guessed = false;
    //if guessed, display character, else display placeholder.
    this.guess = function(){
        if(this.guessed){
            return this.character;
        } else {
            return '_ ';
        }
    }
    //Checks if user guess is true.
    this.checkGuess = function(userGuess){
        if(userGuess === this.character){
            this.guessed = true;
        }
        this.guess();
    }
}

module.exports = Letter;
