let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

const display = document.querySelector("#display");
const stopStart = document.querySelector("#startstop");
const reset = document.querySelector("#reset");
const lapBtn = document.querySelector("#lap");
const lapContainer = document.querySelector("#lap-times");

function updateDisplay() {
  const formatTime =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  display.textContent = formatTime;

  document.title = formatTime;
}
lapContainer.classList.remove("shadoow");

function startTimer() {
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function startStop() {
  if (isRunning) {
    stopTimer();
    stopStart.innerHTML = '<img src="/img/mdi_play.svg" alt="Start">';
  } else {
    startTimer();
    stopStart.innerHTML =
      '<img src="/img/material-symbols_pause.svg" alt="Stop">';
  }
  isRunning = !isRunning;
}
function resetTimer() {
  isRunning = false;
  clearInterval(timer);
  stopStart.innerHTML = '<img src="/img/mdi_play.svg" alt="Start">';
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
  lapContainer.textContent = "";
  document.title = "Stopwatch";
}

function addLap() {
    if (isRunning) {
       
        if (lapContainer.children.length >= 3) {
          return;
        }
        const lapTime = display.textContent;
        const lapElem = document.createElement("div");
        lapElem.textContent = `Lap: ${lapTime}`;
        lapContainer.appendChild(lapElem);
      }
}

stopStart.addEventListener("click", startStop);
reset.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", addLap);
