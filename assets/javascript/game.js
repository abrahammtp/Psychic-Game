// Array that contains the letters, the computer will choose one of these randomly for the variable computerLetter

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables that are going to be displayed on the website
var wins = 0;

var losses = 0;

var guessesLeft = 9; 
document.getElementById("guesses-left").textContent = guessesLeft;

var lettersUsed = []; 

// Variable playerguess does not have a value yet

var playerguess; 

// This variable uses the previous array to choose a random letter, this will be the computer's letter

var computerLetter = options[Math.floor(Math.random()*options.length)];

// Here we create a function that is going to assing a value to playerguess, using the letters on the keyboard

    document.onkeyup = function() {
    playerguess = String.fromCharCode(event.keyCode).toLowerCase();
    
// Logic starts here

        // If the index of the variable "playerguess" is already inside of the array "lettersUsed" it will alert the player to choose a different letter
    if (lettersUsed.indexOf(playerguess) > -1) {
        alert("Try a different letter");
    }

        // This else if statement is going to run if the letter that the player chose is different than the one chosen by the computer, and the user has more than 0 guesses left. The purpose of this statement is to keep updating the variable guessesLeft
    else if (playerguess !== computerLetter && guessesLeft > 0) {
        guessesLeft--;
        document.getElementById("guesses-left").textContent = guessesLeft;
        lettersUsed.push(playerguess); 
        document.getElementById("guesses").textContent = lettersUsed;
    
    }

        // This else if statement is going to run if the letter that the player chose is equal to the one chosen by the computer. If that condition is met, wins will go up, lettersUsed will reset to nothing and guessesLeft will go back to 9 all of that happens AFTER you start playing again (click on any letter)
    else if (playerguess == computerLetter) {
        wins++;
        lettersUsed = [];
        guessesLeft = 9;
        document.getElementById("wins").textContent = wins;
        computerLetter = options[Math.floor(Math.random()*options.length)];

    }

        // This if statement is going to run if the variable guessesLeft equals 0. When that happens, losses will go up and lettersUsed will reset to nothing AFTER you start playing again (click on any letter)
    if (guessesLeft == 0) {
        losses++;
        lettersUsed = [];
        guessesLeft = 9;
        document.getElementById("guesses").textContent = lettersUsed;
        document.getElementById("losses").textContent = losses;
        computerLetter = options[Math.floor(Math.random()*options.length)];
    }

} 



   

    

   
