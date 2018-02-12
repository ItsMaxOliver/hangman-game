Game = {};
Game.userInput = [];
Game.guesses = 6;

Game.moviesArr = [
    "The Shawshank Redemption", "The Godfather", "Inception", "Pulp Fiction", "The Dark Knight", "Fight Club", "Goodfellas", "Casablanca", "Raiders of the Lost Ark", "The Silence of the Lambs", "Memento", "Forrest Gump", "Apocalypse", "Citizen Kane", "Taxi Driver"
];

Game.movie = Game.moviesArr[Math.floor(Math.random() * Game.moviesArr.length)]; // chooses a random word from moviesArr and assigns it to Game.movie
console.log(Game.movie);// shows what word was picked in the console
var title = Game.movie.split(""); // splits the randomly chosen word into an array with each character
console.log(title); // prints the title as an array

Game.guessCount = 0;

for (var i = 0; i < title.length; i++) {
    if (title[i] === " ") {
        title.splice(i, 1); // removes spaces from movie title
    }
}
console.log(title);  // prints the title as an array


for (var i = 0; i < title.length; i++) {
    Game.userInput[i] = "_ ";
    document.getElementById("blank-underscores").innerHTML = Game.userInput.join("");
}

document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess); // shows what letter was typed by the player in the console
}