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

let secretNumber = Math.trunc(Math.random() * 20) + 1; 

let score = 20;

let highscore = 0;

// * sound notifications.
let successSound = new Audio('success.mp3');
let gameOver = new Audio('game-over.mp3');

// * State of the game.
let winState = 'You win 🎊🎊🎊';




document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // * when there is no input.
    if(!guess) {
        document.querySelector('.message').textContent = '⛔⛔⛔ No number!!!';

        // * When the player wins.
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number 🎊🎊🎊';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.state').textContent = winState;


                        document.querySelector('body').style.backgroundColor = '#60b347';
                        document.querySelector('.number').style.width = '40rem';
                        successSound.play();

            if(score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        
                // * When the guess is too high.
    } else if(guess > secretNumber) {
            if(score > 1){
            document.querySelector('.message').textContent = 'Too high!!!📈'
            score--;
            document.querySelector('.score').textContent = score
            } else {
            document.querySelector('.message').textContent = '💥💥💥 You lost the game!'
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
            gameOver.play();

            }
                
                // * When the guess is too low.
    } else if(guess < secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = ` ${guess} is Too low!!!📉`;
           score--;
            document.querySelector('.score').textContent = score
            } else {
            document.querySelector('.message').textContent = '💥💥💥 You lost the game!'
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
            gameOver.play();


            }
    }
    
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
})