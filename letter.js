

var Letter = function(character){
    this.character = character;
    this.guessed = false;

    this.guess = function(){
        if(this.guessed === false){
            console.log('_');
        } else {
            console.log(this.character);
        }
    }
    this.checkGuess = function(userGuess){
        if(userGuess === this.character){
            this.guessed = true;
        }
    }
}