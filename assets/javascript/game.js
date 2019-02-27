var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var loses = 0;

var guessesLeft = 0;

var lettersUsed = 0;  

    var computerLetter = options[Math.floor(Math.random()*options.length)];
    console.log(computerLetter);

    document.onkeyup = function() {
    var playerguess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    

   if (playerguess == computerLetter) {
       alert("Wins " + wins);
   }
    else if (playerguess !== computerLetter) {
        alert("Loses " + loses);
    }
   }
