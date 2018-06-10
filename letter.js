
//Constructor function for creating letter objects
var Letter = function(character){
    this.character = character;
    this.guessed = false;
    // console.log(character);
    //if not guessed, display placeholder. if guessed display character
    this.guess = function(){
        if(this.guessed === false){
            return '_';
        } else {
            return this.character;
        }
    }
    //Checks if user guess is true.
    this.checkGuess = function(userGuess){
        if(userGuess === this.character){
            guessed = true;
        }
    }
}

module.exports = Letter;

// var firstGuess = new Letter('a');

// Letter('a');
// Letter.guess();

// firstGuess.guess();