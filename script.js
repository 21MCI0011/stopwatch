let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");
const display = document.getElementById("display");

startStopButton.addEventListener("click", toggleStartStop);
resetButton.addEventListener("click", reset);

function toggleStartStop() {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = "Start";
    } else {
        timer = setInterval(updateTime, 1000);
        startStopButton.textContent = "Stop";
    }
    isRunning = !isRunning;
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    display.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    startStopButton.textContent = "Start";
    display.textContent = "00:00:00";
}
