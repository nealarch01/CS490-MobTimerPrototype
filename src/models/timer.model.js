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
}

module.exports = {
    Timer
};
