// Game Values
let min         = 1,
    max         = 10,
    winningNum  = getRandom(min,max),
    guessLeft   = 3;
//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector ('#guess-btn'),
      guessInput = document.querySelector ('#guess-input'),
      message = document.querySelector ('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;
//playGin event Listener
game.addEventListener('mousedown', function (e){
    if (e.target.className === 'play-again') {
        window.location.reload();
    } 
        
});
//EventListeners for Guess
guessBtn.addEventListener('click',function(){
     let guess = parseInt(guessInput.value);
            console.log(guess); 
     //validate 
    if (isNaN(guess) || guess<min || guess>max) {
        setMessage(`Please Enter a number between ${min} and ${max}`, 'red');
    }
    // check if won
    if (guess === winningNum) {
        //Game Over - won
     gameOver(true, `${winningNum} is correct, YOU WIN`);
        

    } else {
        //wrong Number
        guessLeft -= 1;
        if (guessLeft ===0 ){
            //Game Over - lost
          gameOver(false,`Game over, you lost. the correct number was ${winningNum}`)

        
        } else {
            //Game continues - answer wrong 

            // change border color
            guessInput.style.borderColor = 'red';
            //Clear Input
            guessInput.value = '';
            // Tell user its wrong Number        
            setMessage(`${guess} is not correct, ${guessLeft} guesses left`,'red')
        }
    }
});
// Game over
function gameOver (won,msg) {
    let color;
    won == true ? color = 'green' : color = 'red';
    
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    //Set Message
    setMessage(msg);
    // Play Again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';


}
//getwinningNum
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);

}


// SetMessage function
function setMessage(msg,color){
 message.style.color = 'color';
 message.textContent = msg;
 
}