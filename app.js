'use strict';

/*
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number ☺';
console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent  = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.message').value);

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.message').value);
*/


// * Game numbers
let secretNumber = Math.trunc(Math.random() * 20) + 1; 
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    // * message that is passed into the function.
    document.querySelector('.message').textContent = message;
};

// * sound notifications.
let successSound = new Audio('sounds/success.mp3');
let gameOver = new Audio('sounds/game-over.mp3');
let playAgain = new Audio('sounds/again.wav');

// * States .
let winState = 'You win 🎊🎊🎊';
let loseState = 'Game Over';


// * Code Refactored










document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // * when there is no input.
    if(!guess) {
        // document.querySelector('.message').textContent = '⛔⛔⛔ No number!!!';

        displayMessage('⛔⛔⛔ No number!!!');

        // * When the player wins.
    } else if(guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number 🎊🎊🎊';

                    displayMessage('Correct Number 🎊🎊🎊');
                    document.querySelector('.number').textContent = secretNumber;
                    document.querySelector('.state').textContent = winState;
                    document.querySelector('body').style.backgroundColor = '#60b347';
                    document.querySelector('.number').style.width = '40rem';
                    successSound.play();
                        if(score > highscore) {
                            highscore = score;
                            document.querySelector('.highscore').textContent = highscore;
                        }









        }  else if(guess !== secretNumber) {


                if(score > 1){
                    // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!!!📈' : 'Too low!!!📉';
                    displayMessage(guess > secretNumber ? 'Too high!!!📈' : 'Too low!!!📉');
                    score--;
                    document.querySelector('.score').textContent = score;
        } else {
                // document.querySelector('.message').textContent = '💥💥💥 You lost the game!';

                displayMessage('💥💥💥 You lost the game!');
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = 'red';
                document.querySelector('.state').textContent = loseState;
                gameOver.play();
         }

     
 }
    
                // * When the guess is too high.
    // } else if(guess > secretNumber) {
    //         if(score > 1){
    //         document.querySelector('.message').textContent = 'Too high!!!📈';
    //         score--;
    //         document.querySelector('.score').textContent = score
    //         } else {
    //         document.querySelector('.message').textContent = '💥💥💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = 'red';
    //         document.querySelector('.state').textContent = loseState;
    //         gameOver.play();

    //         }
                
                // * When the guess is too low.
    // } else if(guess < secretNumber) {
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too low!!!📉';
    //        score--;
    //         document.querySelector('.score').textContent = score;
    //         } else {
    //         document.querySelector('.message').textContent = '💥💥💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = 'red';
    //         document.querySelector('.state').textContent = loseState;
    //         gameOver.play();
    //         }
    // }
    
});





document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.state').textContent= 'Guess My Number!';






    document.querySelector('body').style.backgroundColor = '#472d30';
    document.querySelector('.number').style.width = '15rem';
    playAgain.play();
});





