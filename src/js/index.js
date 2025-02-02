const time = 25 * 60; 
const shortTime = 5 * 60; 
const longTime = 15 * 60; 

let currentTime = time; 
let isRunning = false;  
let isPomodoro = true;  
let intervalId = null; 

function startTimer() {
    const startPauseBtn = document.getElementById('startPauseBtn');
    
    if (isRunning) {
        clearInterval(intervalId); 
        isRunning = false;
        startPauseBtn.textContent = 'Iniciar'; 
    } else {
        intervalId = setInterval(function() {
            currentTime--; 
            updateDisplay(); 

            if (currentTime <= 0) {
                clearInterval(intervalId); 
                isRunning = false;
                nextStage(); 
            }
        }, 1000); 
        isRunning = true;
        startPauseBtn.textContent = 'Pausar'; 
    }
}

function nextStage() {
    const timerSelect = document.getElementById('timerSelect');

    if (isPomodoro) {
        if (isRunning) clearInterval(intervalId); 
        isPomodoro = false;
        currentTime = shortTime; 
        timerSelect.value = "shortBreak"; 
    } else {
        if (isRunning) clearInterval(intervalId); 
        isPomodoro = true;
        currentTime = time; 
        timerSelect.value = "pomodoro"; 
    }
    updateDisplay(); 
}

function resetTimer() {
    clearInterval(intervalId); 
    isRunning = false;
    currentTime = time; 
    isPomodoro = true; 
    updateDisplay(); 
    const startPauseBtn = document.getElementById('startPauseBtn');
    startPauseBtn.textContent = 'Iniciar'; 
    const timerSelect = document.getElementById('timerSelect');
    timerSelect.value = "pomodoro"; 
}

function updateDisplay() {
    const minutes = Math.floor(currentTime / 60); 
    const seconds = currentTime % 60; 
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`; 
}

function changeTimer() {
    const timerSelect = document.getElementById('timerSelect');
    const selectedValue = timerSelect.value; 

    if (selectedValue === "pomodoro") {
        currentTime = time; 
        isPomodoro = true; 
    } else if (selectedValue === "shortBreak") {
        currentTime = shortTime; 
        isPomodoro = false; 
    } else if (selectedValue === "longBreak") {
        currentTime = longTime; 
        isPomodoro = false; 
    }
    
    updateDisplay(); 
    if (isRunning) {
        clearInterval(intervalId); 
        isRunning = false;
        const startPauseBtn = document.getElementById('startPauseBtn');
        startPauseBtn.textContent = 'Iniciar'; 
    }
}

function updateClock() {
    const now = new Date(); 
    let hours = now.getHours(); 
    let minutes = now.getMinutes(); 

    minutes = minutes < 10 ? '0' + minutes : minutes;

    const clockDisplay = document.getElementById('clock');
    clockDisplay.textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 60000);

updateClock();
