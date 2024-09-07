// Variables for time
let second = 0;
let minute = 0;
let hour = 0;
let timerInterval = null; // To keep track of the timer state
let isRunning = false; // Flag to track if the stopwatch is running

const playButton = document.getElementById("play");
const resetButton = document.getElementById("reset");
const watch = document.getElementById("watch");

// Function to update the stopwatch display
function updateDisplay() {
    let formattedHour = hour < 10 ? `0${hour}` : hour;
    let formattedMinute = minute < 10 ? `0${minute}` : minute;
    let formattedSecond = second < 10 ? `0${second}` : second;

    watch.innerText = `${formattedHour}:${formattedMinute}:${formattedSecond}`;
}

// Stopwatch logic
function stopwatch() {
    second++;
    if (second === 60) {
        minute++;
        second = 0;
        if (minute === 60) {
            hour++;
            minute = 0;
        }
    }
    updateDisplay();
}

// Start/Stop functionality
playButton.addEventListener('click', function() {
    if (!isRunning) {
        // Start the timer
        timerInterval = window.setInterval(stopwatch, 1000);
        playButton.classList.remove('fa-play');
        playButton.classList.add('fa-pause');
        isRunning = true;
    } else {
        // Stop the timer
        window.clearInterval(timerInterval);
        playButton.classList.remove('fa-pause');
        playButton.classList.add('fa-play');
        isRunning = false;
    }
});

// Reset functionality
resetButton.addEventListener('click', function() {
    window.clearInterval(timerInterval); // Stop the timer if running
    second = 0;
    minute = 0;
    hour = 0;
    isRunning = false;
    playButton.classList.remove('fa-pause');
    playButton.classList.add('fa-play');
    updateDisplay(); // Reset the display
});