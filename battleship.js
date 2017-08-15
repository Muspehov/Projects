var location1 = 3,
    location2 = 4,
    location3 = 5;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || gess > 6) {
        console.log("Please enter a valid cell number!");
    } else guesses++ ;

    if (guess == location1 || guess == location2 || guess == location3) {
        console.log("HIT!");
        hits++;
        if (hits == 3) {
            isSunk = true;
            console.log("You sank my battleship!");
        } else {
            console.log("MISS");
        }
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was  " + (3 / guesses);
console.log(stats);