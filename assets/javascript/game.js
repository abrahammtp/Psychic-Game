var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var computerLetter = options[Math.floor(Math.random()*options.length)];
    console.log(computerLetter);

    document.onkeyup = function() {
    var playerguess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    

   if (playerguess == computerLetter) {
       alert("You chose one");
   }
}