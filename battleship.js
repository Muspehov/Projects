var location1 = [3, false],
    location2 = [4, false],
    location3 = [5, false];

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses++;
        if (guess == location1[0]) {
            if (!location1[1]) {
                location1[1] = true;
                alert("HIT!");
                hits++;
                if (hits == 3) {
                    isSunk = true;
                    alert("You sank my battleship!");
                }
            } else {
                alert("Hit into the same place of the ship");
            }
        }
        else if (guess == location2[0]) {
            if (!location2[1]) {
                location2[1] = true;
                alert("HIT!");
                hits++;
                if (hits == 3) {
                    isSunk = true;
                    alert("You sank my battleship!");
                }
            } else {
                alert("Hit into the same place of the ship");
            }
        }
        else if (guess == location3[0]) {
            if (!location3[1]) {
                location3[1] = true;
                alert("HIT!");
                hits++;
                if (hits == 3) {
                    isSunk = true;
                    alert("You sank my battleship!");
                }
            } else {
                alert("Hit into the same place of the ship");
            }
        }
        else alert("MISS");
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was  " + (3 / guesses);
alert(stats);