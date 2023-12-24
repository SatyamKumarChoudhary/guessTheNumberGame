let previousGuesses = [];
let guessesRemaining = 10;

let ans = Math.floor(Math.random() * 100); // Fix: Use Math.floor to get an integer
let value;

// Engine
let input;
let submit = document.getElementById('subt');
submit.addEventListener('click', function () {
  event.preventDefault(); //click by default subit the form and refresh the page , this will prvent this

  input = document.getElementById('guessField'); // Fix: Use 'guessField' instead of 'guess'
  value = parseInt(input.value); // Fix: Use parseInt to get a numerical value
  previousGuesses.push(value);
  guessesRemaining--;

  input.value = ''; // Clear the input field
  //reseting the input feild for next input

  // If won
  if (value == ans) {
    let notification = document.querySelector('.lowOrHi'); // Fix: Use querySelector
    notification.textContent = 'YOU WON THE GAME 😍😍😍!!!!';
  }

  // If lost
  else if (guessesRemaining <= 0) {
    let notification = document.querySelector('.lowOrHi'); // Fix: Use querySelector
    notification.textContent = 'YOU LOST THE GAME 😓😓';
  }

  // Get ready for the next input
  else {
    let previous = document.querySelector('.guesses'); // Fix: Use querySelector
    previous.textContent = 'Previous Guesses: ' + previousGuesses.join(', ');

    let guesses = document.querySelector('.lastResult'); // Fix: Use querySelector
    guesses.textContent = 'Guesses Remaining: ' + guessesRemaining;

    let notification = document.querySelector('.lowOrHi'); // Fix: Use querySelector
    if (ans > value) {
      notification.textContent = 'Guess higher Number';
    } else {
      notification.textContent = 'Guess Lower Number';
    }
  }
});
