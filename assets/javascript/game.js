var Game = { 
blankSpaces : [], // used for underscores
guessedLetters : [], // used to display the guessed letters
guessesLeft : 6,
moviesArr : [
    "The Shawshank Redemption", "The Godfather", "Inception", "Pulp Fiction", "The Dark Knight", "Fight Club", "Goodfellas", "Casablanca", "Raiders of the Lost Ark", "The Silence of the Lambs", "Memento", "Forrest Gump", "Apocalypse", "Citizen Kane", "Taxi Driver"],
hangmanArr : [
    "assets/images/hangman-arm2.png", "assets/images/hangman-arm1.png", "assets/images/hangman-leg2.png", "assets/images/hangman-leg1.png", "assets/images/hangman-body.png", "assets/images/hangman-head.png"
    ]
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
    var found = false;
        for (var i = 0; i < Game.movie.length; i++) {
            if (letter === Game.movie[i].toLowerCase()) {
               //replace blank with letter
                Game.blankSpaces[i] = letter;
                document.getElementById("blank-underscores").innerHTML = Game.blankSpaces.join("");
                found = true;
            }
        }
    // create a statement that replaces the images of the hangman when the letter they guess doesn't match one in the random word
        if (found === false) {
            Game.guessesLeft = Game.guessesLeft - 1;
            document.getElementById("guesses-left").innerHTML = Game.guessesLeft;
            document.getElementById("hangman").src = Game.hangmanArr[Game.guessesLeft];
        }
});

//check that the user doesn't guess a letter more than once and that the counter doesn't count it against them if they do

//end game when guessesLeft = 0

//check when user completes word and say "you Win!"

//ask if user wants to play again