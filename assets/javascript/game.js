// Array that contains the letters, the computer will choose one of these randomly

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
    console.log(computerLetter);

// Here we create a function that is going to assing a value to playerguess, using the letters on the keyboard

    document.onkeyup = function() {
    playerguess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(playerguess);
    
    
// Logic

    if (lettersUsed.indexOf(playerguess) > -1) {
        alert("Try a different letter");
    }

    else if (playerguess !== computerLetter && guessesLeft > 0) {
        guessesLeft--;
        document.getElementById("guesses-left").textContent = guessesLeft;
        lettersUsed.push(playerguess); 
        document.getElementById("guesses").textContent = lettersUsed;
    
    }

    else if (playerguess == computerLetter) {
        wins++;
        lettersUsed = [];
        guessesLeft = 9;
        document.getElementById("wins").textContent = wins;
        computerLetter = options[Math.floor(Math.random()*options.length)];
        console.log(computerLetter);

    }

    if (guessesLeft == 0) {
        losses++;
        lettersUsed = [];
        document.getElementById("guesses").textContent = lettersUsed;
        document.getElementById("losses").textContent = losses;
        computerLetter = options[Math.floor(Math.random()*options.length)];
        console.log(computerLetter);
    }

} 






//    if (playerguess == computerLetter) {
//        alert("Wins " + wins);
//    }
//     else if (playerguess !== computerLetter) {
//         alert("Loses " + loses);
//     }


   

    

   
