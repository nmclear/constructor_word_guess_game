
//Constructor function for creating letter objects
var Letter = function(character){
    this.character = character;
    this.guessed = false;

    //if not guessed, display placeholder. if guessed display character
    this.guess = function(){
        if(this.guessed === false){
            console.log('_');
        } else {
            console.log(this.character);
        }
    }
    //Checks if user guess is true.
    this.checkGuess = function(userGuess){
        if(userGuess === this.character){
            this.guessed = true;
        }
    }
}

module.exports = Letter;