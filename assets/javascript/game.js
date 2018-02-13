Game = {};
Game.userInput = [];
Game.guessedLetters = [];
Game.guesses = 6;

Game.moviesArr = [
    "The Shawshank Redemption", "The Godfather", "Inception", "Pulp Fiction", "The Dark Knight", "Fight Club", "Goodfellas", "Casablanca", "Raiders of the Lost Ark", "The Silence of the Lambs", "Memento", "Forrest Gump", "Apocalypse", "Citizen Kane", "Taxi Driver"
];

Game.movie = Game.moviesArr[Math.floor(Math.random() * Game.moviesArr.length)]; // chooses a random word from moviesArr and assigns it to Game.movie
console.log(Game.movie);// shows what word was picked in the console

Game.guessCount = 6;


for (var i = 0; i < Game.movie.length; i++) {
    if (Game.movie[i] === " ") {
        Game.userInput[i] = " "; // leaves a space between words in movie title
    }
    else {
    Game.userInput[i] = "_"; // changes letters to underscores
    }
    document.getElementById("blank-underscores").innerHTML = Game.userInput.join(""); // displays the correct number of blanks
}

document.onkeyup = function(event) {
    for (var i = 0; i <= Game.guessCount; i++){   
        var userGuess = event.key;
        console.log(userGuess); // shows what letter was typed by the player in the console
        Game.guessedLetters.push(userGuess); // pushes the userGuess into the guessedLetters array
        console.log(Game.guessedLetters); // displays the guessedLetters array in console
        document.getElementById("guessed-letters-list").innerHTML = Game.guessedLetters; // displays the guessed letters under the hangman box
        
        for (var i = 0; i < Game.movie.length; i++) {
            if (userGuess == Game.movie[i]) {
            //replace blank with userGuess
            }
            else {
            //draw hangman body part  
            }
        }
        Game.guessCount = Game.guessCount - 1;
        document.getElementById("guesses-left").innerHTML = Game.guessCount; // displays the number of guesses left
}
}

