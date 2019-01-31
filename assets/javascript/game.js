//count variables
var wins = 0;
var losses = 0;
var chances = 9;
var guessed = [];

//Suggested by Somat
var computerGuess = String.fromCharCode(Math.floor(Math.random()*26) + 97);

//function for game
document.onkeyup = function(event) {
    //user input
    var userGuess = event.key;
    if (chances === 0) {
        alert('Watson won. Try again!');
        losses++;
        chances = 9;
        guessed =[];    
    } 
    else if (userGuess === computerGuess) {
        wins++;
        alert('You\'ve won! Start again!');
        chances = 9;
        guessed =[];    
    }  
    else if (userGuess !== computerGuess) {
        chances--;
        guessed.push(userGuess);
    } 
    // results for the dom
    document.getElementById('wins').innerHTML = 'You have ' + wins + ' wins';
    document.getElementById('losses').innerHTML = 'You have ' + losses + ' losses';
    document.getElementById('chances').innerHTML = 'You have ' + chances + ' chances left';
    document.getElementById('user-guess').innerHTML = 'Your guesses so far: ' + guessed;
};
 


