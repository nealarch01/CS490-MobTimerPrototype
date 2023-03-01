// Instantiate a new timer 
const timer = models.createTimer();

function initTimer() {
    timer.roundDuration = 600; // 10 Minutes
    timer.breakDuration = 400; // 6 Minutes
    timer.roundsPerBreak = 3;
    timer.timeLeft = timer.roundDuration;
}
initTimer();

const startStopBtnRef = document.getElementById("start-stop-button");
startStopBtnRef.addEventListener("click", () => {
    if (timer.isRunning) {
        this.isRunning = false;
        startStopBtnRef.innerHTML = "Start";
        stop();
    } else {
        this.isRunning = true;
        startStopBtnRef.innerHTML = "Stop";
        start();
    }
});

const timerTextRef = document.getElementById("timer-text");
timerTextRef.innerHTML = displayTime();
var updateTextInterval = null;

// Converts seconds into minutes and seconds
function displayTime() {
    console.log(timer.timeLeft);
    let minutes = Math.floor(timer.timeLeft / 60);
    let seconds = timer.timeLeft % 60;
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

function start() {
    // Set a 1 second interval to update the text
    timer.isRunning = true;
    updateTextInterval = setInterval(() => {
        timer.timeLeft--;
        timerTextRef.innerHTML = displayTime();
    }, 1000);
}

function stop() {
    timer.isRunning = false;
    clearInterval(updateTextInterval);
    updateTextInterval = null;
}
