/* This is just a start */
var randomLoc = (Math.floor(Math.random() * 5));  /* math.random only generates a number between 0 and not including 1 - our grid is only 7 spaces long */
/* see the value of 0-6 for guesses.Can only use spaces between 0-4 or the ship would run off the grid.Have to multiply by 5 to get a number less than 5 and round it down */
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a value between 0-6");
    }else{
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;
            if (hits == 3){
            isSunk = true;
            alert("You sank my battleship!");
            }
        }else{
            alert("MISS!");
        }
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "wich means your shooting accuracy was " + (3/guesses);
alert(stats);
