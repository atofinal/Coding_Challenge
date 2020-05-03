
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTimer = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds){
    //## Clear any exiting timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds *1000;
    // console.log({now,then})
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) /1000) ;
        //## check if we should stop it!
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // ## display it
        displayTimeLeft(secondsLeft);
        // console.log(secondsLeft);        
    },1000);
}


function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0': ''}${remainderSeconds}`;
    document.title = display; //## show on tab browser ☺
    timerDisplay.textContent = display;
    // console.log({minutes,remainderSeconds});
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutesEnd = end.getMinutes();
    endTimer.textContent = `Be Back At  ${hour}:${minutesEnd < 10 ? '0':''}${minutesEnd}`;
}

function startTimer(){
    // console.log(this.dataset.time);
    const secondsBtn = parseInt(this.dataset.time);
    timer(secondsBtn)
}

buttons.forEach(button => button.addEventListener('click',startTimer));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    // console.log(mins);
    timer(mins * 60);
    this.reset();
});