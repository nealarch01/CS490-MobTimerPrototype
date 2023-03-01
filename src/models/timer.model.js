class Timer {
    constructor() {
        this.roundDuration = 0;
        this.breakDuration = 0;

        this.timeLeft = 0;

        this.roundsPerBreak = 0;
        this.currentRound = 0;

        this.isRunning = false;
        this.isBreakActive = false;

        this.interval = null;
    }

    tick() {
        if (this.timeLeft <= 0) {
            this.timeLeft = 0;
            return;
        }
        this.timeLeft--;
        console.log(timeLeft);
        return this.displayTime();
    }

    start() {
        this.isRunning = true;
        this.interval = setInterval(this.tick, 1000);
    }

    stop() {
        this.isRunning = false;
        clearInterval(this.interval); 
    }

    resetRoundTime() {
        this.timeLeft = this.roundDuration;
    }

    resetBreakTime() {
        this.timeLeft = this.breakDuration;
    }

    displayTime() {
        // Convert seconds to minutes and seconds
        let minutes = Math.floor(this.timeLeft / 60);
        let seconds = this.timeLeft % 60;
        return `${minutes}:${seconds}`
    }

    startRound() {
        this.timeLeft = this.roundDuration;
    }

    startBreak() {
        this.timeLeft = this.breakDuration;
    }

}

module.exports = {
    Timer
};
