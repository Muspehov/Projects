function testGo() {
    console.log('ORT');
}

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function funcEcho(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
}

function getNum() {
    var parent = document.getElementsByClassName("battlefield")[0];
    var e = e || event;
    var target = e.target || e.srcElement;
    for (var i = 0; i < parent.children.length; i++) {
        if (parent.children[i] == target) return i;
    }
}

// var parent = document.getElementsByClassName("battlefield")[0];
// parent.onclick = function (e) {
//     var e = e || event;
//     var target = e.target || e.srcElement;
//     for(var i = 0; i < parent.children.length; i++) {
//         if(parent.children[i] == target) return console.log(i);
//     }
// };


function gameMove() {
    var num = getNum(); //this element
    if (!field[num][1]) { // not checked
        field[num][1] = true;
        guesses++;
        console.log('Hit = ' + hits);
        if (field[num][0] === 1) { //check hits
            if (hits < 3) {
                hits++;
                funcEcho('info', warningArray[2]);
            } else {
                funcEcho('info', warningArray[3]);
            }
        } else {
            funcEcho('info', warningArray[1]);
        }
    } else {
        //funcEcho('info', warningArray[1]);
    }

    console.log(field.join(' ; '));
}

function gameHit() {

}


var cell = document.getElementsByClassName('cell');

/////////

var location1 = randomInteger(1, 4),
    location2 = location1 + 1,
    location3 = location2 + 1;
var field = [[0, false], [0, false], [0, false], [0, false], [0, false], [0, false]];
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var warningArray = [
    'Play!',
    'Miss',
    'HIT!',
    'Hit into the same place of the ship',
    'You sank my battleship!'
];

for (var k = 0; k < cell.length; k++) {
    if (k === location1 - 1 || k === location2 - 1 || k === location3 - 1) { //Hit
        field[k][0] = 1;
        console.log(field[k][1]);
        cell[k].onclick = function () {
            // if (hits === 2) funcEcho('info', warningArray[4]);
            // else gameMove();
            this.style.backgroundColor = '#5b1d1b';
        };
    } else cell[k].onclick = function () { //Miss
        // if (hits < 3) {
        //     gameMove();
        // }
        this.style.backgroundColor = '#2b2b2b';
    }
}
//
// for (var i = 0; i < 3; i++) { //Cicle for hit
//     var num = randomLoc - 1 + i;
//     field[num][0] = 1;
//     cell[num].onclick = function () {
//         gameMove();
//         this.style.backgroundColor = '#5b1d1b';
//     };
//
//     // console.log(randomLoc - 1 + i);
// }

//
// while (isSunk == false) {
//     //guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
//     if (guess < 0 || guess > 6) {
//         alert("Please enter a valid cell number!");
//     } else {
//         guesses++;
//         if (guess == location1[0]) {
//             if (!location1[1]) {
//                 location1[1] = true;
//                 alert("HIT!");
//                 hits++;
//                 if (hits == 3) {
//                     isSunk = true;
//                     alert("You sank my battleship!");
//                 }
//             } else {
//                 alert("Hit into the same place of the ship");
//             }
//         }
//         else if (guess == location2[0]) {
//             if (!location2[1]) {
//                 location2[1] = true;
//                 alert("HIT!");
//                 hits++;
//                 if (hits == 3) {
//                     isSunk = true;
//                     alert("You sank my battleship!");
//                 }
//             } else {
//                 alert("Hit into the same place of the ship");
//             }
//         }
//         else if (guess == location3[0]) {
//             if (!location3[1]) {
//                 location3[1] = true;
//                 alert("HIT!");
//                 hits++;
//                 if (hits == 3) {
//                     isSunk = true;
//                     alert("You sank my battleship!");
//                 }
//             } else {
//                 alert("Hit into the same place of the ship");
//             }
//         }
//         else alert("MISS");
//     }
// }
// var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was  " + (3 / guesses);
// alert(stats);


