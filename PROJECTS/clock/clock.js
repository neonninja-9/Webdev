//for clock

const clock = document.getElementById("clock");
let dateCont = document.querySelector("#date")
let is24HourFormat = true; // Default format
const toggleButton = document.getElementById("toggleFormat");


function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  let ampm = "";

  if (!is24HourFormat) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  hours = String(hours).padStart(2, "0");
  clock.textContent = is24HourFormat
    ? `${hours}:${minutes}:${seconds}`
    : `${hours}:${minutes}:${seconds} ${ampm}`;

  // Day & Date
  let day;
  switch (now.getDay()) {
    case 0: day = "Sunday"; break;
    case 1: day = "Monday"; break;
    case 2: day = "Tuesday"; break;
    case 3: day = "Wednesday"; break;
    case 4: day = "Thursday"; break;
    case 5: day = "Friday"; break;
    case 6: day = "Saturday"; break;
    default: day = "";
  }

  const date = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  dateCont.textContent = `${day}, ${date}/${month}/${year}`;
}

toggleButton.addEventListener("click", () => {
  is24HourFormat = !is24HourFormat;
  toggleButton.textContent = is24HourFormat ? "Switch to 12h" : "Switch to 24h";
  updateClock(); // update immediately
});

updateClock();

// Initial call
// Update every 1000ms
setInterval(updateClock, 1000); //in ms


//stopwatch
let stopwatchInterval;
let isRunning = false;
let stopwatchTime = 0; // in milliseconds

const stopwatchDisplay = document.getElementById("stopwatchDisplay");
const startStopwatchBtn = document.getElementById("startStopwatch");
const resetStopwatchBtn = document.getElementById("resetStopwatch");
const lapBtn = document.getElementById("lapStopwatch");
const lapList = document.getElementById("lapList");
const downloadBtn = document.getElementById("downloadLaps");

function formatTime(ms) {
  const hrs = String(Math.floor(ms / 3600000)).padStart(2, '0');
  const mins = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
  const secs = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
  const msec = String(Math.floor((ms % 1000) / 10)).padStart(2, '0'); // two-digit ms
  return `${hrs}:${mins}:${secs}:${msec}`;
}

function updateStopwatch() {
  stopwatchTime += 10; // increment by 10ms
  stopwatchDisplay.textContent = formatTime(stopwatchTime);
}

const beep = new Audio("/home/gourav-sharma/WEB DEVLOPMENT/PROJECTS/clock/beep.mp3"); 

lapBtn.addEventListener("click", () => {
  if (stopwatchTime === 0) return;

  const lapTime = formatTime(stopwatchTime);
  const li = document.createElement("li");
  li.textContent = `Lap ${lapList.children.length + 1}: ${lapTime}`;
  lapList.prepend(li); // add latest lap at the top
});

startStopwatchBtn.addEventListener("click", () => {
  beep.play(); // play sound on start/stop

  if (!isRunning) {
    stopwatchInterval = setInterval(updateStopwatch, 10);
    startStopwatchBtn.textContent = "⏸Stop";
    isRunning = true;
  } else {
    clearInterval(stopwatchInterval);
    startStopwatchBtn.textContent = "▶Start";
    isRunning = false;
  }
});


resetStopwatchBtn.addEventListener("click", () => {
  beep.play(); // play sound on reset

  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  stopwatchDisplay.textContent = "00:00:00:00";
  startStopwatchBtn.textContent = "▶Start";
  isRunning = false;
  lapList.innerHTML = ""; // clear laps
});


downloadBtn.addEventListener("click", () => {
  if (lapList.children.length === 0) return alert("No laps to download!");

  let content = "";
  Array.from(lapList.children)
    .reverse()
    .forEach(li => content += `${li.textContent}\n`);

  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "stopwatch_laps.txt";
  a.click();
  URL.revokeObjectURL(url);
});



//timer
const timerInput = document.getElementById("timerInput");
const timerDisplay = document.getElementById("timerDisplay");
const startTimerBtn = document.getElementById("startTimer");
const resetTimerBtn = document.getElementById("resetTimer");

let timerInterval;
let timerRemaining = 0;
let timerRunning = false;

let sound = new Audio("/home/gourav-sharma/WEB DEVLOPMENT/PROJECTS/clock/sound.wav");


// Format MS to HH:MM:SS
function formatTimer(ms) {
  const hrs = String(Math.floor(ms / 3600000)).padStart(2, "0");
  const mins = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
  const secs = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

// ⏱ Start Countdown
function startCountdown() {
  if (timerRemaining <= 0) return;

  timerInterval = setInterval(() => {
    timerRemaining -= 1000;
    if (timerRemaining <= 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "00:00:00";
      timerRunning = false;
      startTimerBtn.textContent = "▶Start";
      sound.play();
      alert("Time's up!");
      sound.pause();
    } else {
      timerDisplay.textContent = formatTimer(timerRemaining);
    }
  }, 1000);
}

// ▶Start/Stop Button

startTimerBtn.addEventListener("click", () => {
  if (!timerRunning) {
    clearInterval(timerInterval);
    const value = timerInput.value;
    if (!value) {
      alert("Set a valid time.");
      return;
    }
    let timeParts = value.split(":");
    let hours = 0, minutes = 0, seconds = 0;
    if (timeParts.length === 2) {
      // HH:MM (input type='time' default)
      hours = parseInt(timeParts[0], 10) || 0;
      minutes = parseInt(timeParts[1], 10) || 0;
    } else if (timeParts.length === 3) {
      // HH:MM:SS (if browser supports step=1)
      hours = parseInt(timeParts[0], 10) || 0;
      minutes = parseInt(timeParts[1], 10) || 0;
      seconds = parseInt(timeParts[2], 10) || 0;
    } else {
      alert("Set a valid time.");
      return;
    }
    timerRemaining = (hours * 3600 + minutes * 60 + seconds) * 1000;
    if (timerRemaining <= 0) return alert("Set a valid time.");
    timerRunning = true;
    startTimerBtn.textContent = "Pause";
    timerDisplay.textContent = formatTimer(timerRemaining);
    startCountdown();
  } else {
    clearInterval(timerInterval);
    timerRunning = false;
    startTimerBtn.textContent = "Start";
  }
});

// Reset Button

resetTimerBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerDisplay.textContent = "00:00:00";
  timerRunning = false;
  startTimerBtn.textContent = "Start";
  timerInput.value = "";
  timerRemaining = 0;
});
