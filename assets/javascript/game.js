var Game = { 
blankSpaces : [], // used for underscores
guessedLetters : [], // used to display the guessed letters
guessesLeft : 6,
moviesArr : [
    "The Shawshank Redemption", "The Godfather", "Inception", "Pulp Fiction", "The Dark Knight", "Fight Club", "Goodfellas", "Casablanca", "Raiders of the Lost Ark", "The Silence of the Lambs", "Memento", "Forrest Gump", "Apocalypse Now", "Citizen Kane", "Taxi Driver"],
hangmanArr : [
    "assets/images/hangman-arm2.png", "assets/images/hangman-arm1.png", "assets/images/hangman-leg2.png", "assets/images/hangman-leg1.png", "assets/images/hangman-body.png", "assets/images/hangman-head.png"
    ],
numWins : 0,
alreadyGuessed : false
};

function showBlanks() {
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

document.onkeyup = (function showGuessedLetters(event) {  
    var userGuess = event.key;
    var found = false; // assumes that they will guess wrong
    var alreadyGuessed = false;
    
    for (var j = 0; j < Game.guessedLetters.length; j++) {
        if (userGuess === Game.guessedLetters[j]) {
            alreadyGuessed = true;
        }
    }
    if(alreadyGuessed === false) {
        for (var i = 0; i < Game.movie.length; i++) {
            if (userGuess === Game.movie[i].toLowerCase()) {
               //replace blank with letter
                Game.blankSpaces[i] = userGuess;
                document.getElementById("blank-underscores").innerHTML = Game.blankSpaces.join("");
                found = true; // they got the letter correct so no deduction
            }
        }
        if (found === false) { //they didn't guess correctly
            Game.guessesLeft = Game.guessesLeft - 1;
            document.getElementById("guesses-left").innerHTML = Game.guessesLeft; // displays new number of guesses left
            document.getElementById("hangman").src = Game.hangmanArr[Game.guessesLeft]; // replaces the image of the hangman when the letter they guess doesn't match one in the random word
        }
        Game.guessedLetters.push(userGuess); // pushes the userGuess into the guessedLetters array
        document.getElementById("guessed-letters-list").innerHTML = Game.guessedLetters.join(", "); // displays the guessed letters under the hangman box
    }
    
});

//check that the user doesn't guess a letter more than once and that the counter doesn't count it against them if they do
//

//end game when guessesLeft = 0
var delay = setInterval(deadAlert, 1500); // delays the function so that the entire hangman is seen
   
function deadAlert() {
    if (Game.guessesLeft === 0) {
        alert("Sorry, you died!"); //alerts user that they lost
        clearInterval(delay); // makes it so that the alert doesn't repeat
        window.location.reload(); // makes the window refresh to play a new game
        }
};

//check when user completes word and say "you Win!"
var win = setInterval(winAlert, 1500); // delays the function so that the user sees that they have guessed the word completely

function winAlert() {
    if (Game.movie.toLowerCase() === Game.blankSpaces.join("")) {
        alert("You WIN! " + Game.movie + " was the correct answer! Good job!"); //alerts user that they won
        //clearInterval(win);
        Game.numWins = Game.numWins + 1;
        document.getElementById("number-of-wins").innerHTML = Game.numWins;
        Game.guessedLetters = [];
        document.getElementById("blank-underscores").innerHTML = " "; // this is where we need to set it equal to a string that is as long as the longest item in the moviesArr
        document.getElementById("guessed-letters-list").innerHTML = Game.guessedLetters;
        Game.guessesLeft = 6;
        document.getElementById("guesses-left").innerHTML = Game.guessesLeft; // displays new number of guesses left
        document.getElementById("hangman").src = "assets/images/hangman-base.png"; // replaces the image of the hangman when the letter they guess doesn't match one in the random word
        showBlanks(); // resets the blanks 
    }
    win;
};

window.onload = showBlanks();
