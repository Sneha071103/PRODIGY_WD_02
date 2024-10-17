let startTime, updatedTime, difference;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function startTimer() {
    if (!running) {
        startTime = Date.now() - difference || Date.now();
        timerInterval = setInterval(updateTimer, 1000);
        running = true;
    }
}

function updateTimer() {
    updatedTime = Date.now();
    difference = updatedTime - startTime;
    
    let seconds = Math.floor((difference / 1000) % 60);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    
    display.innerHTML = 
        `${hours < 10 ? '0' + hours : hours}:
         ${minutes < 10 ? '0' + minutes : minutes}:
         ${seconds < 10 ? '0' + seconds : seconds}`;
}

function stopTimer() {
    clearInterval(timerInterval);
    running = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    running = false;
    display.innerHTML = "00:00:00";
    difference = 0;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

