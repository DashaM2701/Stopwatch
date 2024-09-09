let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

const display = document.querySelector('#display');
const stopStart = document.querySelector('#startstop');
const reset = document.querySelector('#reset');
const lapBtn = document.querySelector('#lap');
const lapContainer = document.querySelector('#lap-times');

function updateDisplay(){
    const formatTime = 
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds);
     
    display.textContent = formatTime;

    document.title = formatTime;
    

}
lapContainer.classList.remove('shadoow');

function startTimer(){
        timer = setInterval(() => {
            seconds ++;
            if(seconds === 60){
                seconds = 0;
                minutes ++;
            }
            if(minutes === 60){
                minutes = 0;
                hours ++;
            } updateDisplay();
        }, 1000,)
    }

function stopTimer (){
    clearInterval(timer);

};

function startStop(){
    if(isRunning){
        stopTimer();
        stopStart.textContent = 'Start';
    } else{
        startTimer();
        stopStart.textContent = 'Stop';
    }
    isRunning = !isRunning;
}
function resetTimer(){
    isRunning = false;
    clearInterval(timer);
    stopStart.textContent = 'Start';
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    lapContainer.textContent = '';
lapContainer.classList.remove('shadoow');
document.title = 'Stopwatch'

}

function addLap(){
    if(isRunning){
          const lapTime = display.textContent;
    const lapElem = document.createElement('div');
    lapElem.textContent = `Lap: ${lapTime}`;
    lapContainer.appendChild(lapElem);
    lapContainer.classList.add('shadoow');
}
    }
  


stopStart.addEventListener('click', startStop);
reset.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', addLap);