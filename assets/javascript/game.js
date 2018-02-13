var Game = { 
blankSpaces : [], // used for underscores
guessedLetters : [], // used to display the guessed letters
guessesLeft : 6,
moviesArr : [
    "The Shawshank Redemption", "The Godfather", "Inception", "Pulp Fiction", "The Dark Knight", "Fight Club", "Goodfellas", "Casablanca", "Raiders of the Lost Ark", "The Silence of the Lambs", "Memento", "Forrest Gump", "Apocalypse", "Citizen Kane", "Taxi Driver"]
};

window.onload = function showBlanks(){
    Game.movie = Game.moviesArr[Math.floor(Math.random() * Game.moviesArr.length)]; // chooses a random word from moviesArr and assigns it to Game.movie
    for (var i = 0; i < Game.movie.length; i++) {
        if (Game.movie[i] === " ") {
            Game.blankSpaces[i] = " "; // leaves a space between words in movie title
        }
        else {
        Game.blankSpaces[i] = "_"; // changes letters to underscores
        }
    document.getElementById("blank-underscores").innerHTML = Game.blankSpaces.join(""); // displays the correct number of blanks
    }
}

document.onkeyup = function showGuessedLetters(event) {  
    var userGuess = event.key;
    Game.guessedLetters.push(userGuess); // pushes the userGuess into the guessedLetters array
    document.getElementById("guessed-letters-list").innerHTML = Game.guessedLetters.join(", "); // displays the guessed letters under the hangman box
}

document.onkeydown = (function replaceBlank(event) {
    var letter = event.key;    
        for (var i = 0; i < Game.movie.length; i++) {
            if (letter === Game.movie[i].toLowerCase()) {
            //replace blank with userGuess
                Game.blankSpaces[i] = letter;
               // replaceBlanks(Game.blankSpaces);
                document.getElementById("blank-underscores").innerHTML = Game.blankSpaces.join("");
            }
        }
});
