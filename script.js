let minutes = 0;
let seconds = 0;
let currentDurationIndex = 0;
let durations = [25,5,25,5,25,15];
let cron;

function start() {
   cron = setInterval(timer,1000)
}

function pause(){
    cron = clearInterval(cron)
}

function timer(){
    seconds++ 
    if (seconds == 60){
        minutes++
        seconds = 0
    }

    document.getElementById("counter").innerText = `${minutes} : ${seconds}`;

    const currentDuration = durations[currentDurationIndex];
    const durationInSeconds = currentDuration * 60;

    let divCurrentCycle = document.getElementById("currentCycle")
    
    let currentCycle = ["Foco", "Pausa curta", "Foco", "Pausa curta", "Foco", "Pausa longa"];
    currentCycle = currentCycle[currentDurationIndex];
    divCurrentCycle.innerHTML = currentCycle;
    
    let divNextCycle = document.getElementById("nextCycle")

    let nextCycles = ["Pausa curta", "Foco", "Pausa curta", "Foco", "Pausa longa", null];
    nextCycles = nextCycles[currentDurationIndex]
    divNextCycle.innerHTML = nextCycles

    if (minutes * 60 + seconds === durationInSeconds) {
      currentDurationIndex++;
      minutes = 0;
      seconds = 0;
    }else if (currentDurationIndex === durations.length) {
        clearInterval(cron);
        minutes = 0
        seconds = 0 
        currentDurationIndex = 0
    }
}


function addTask() {
    let box = document.createElement('input')
    box.setAttribute('type', 'checkbox')
    let taskList = document.createElement('label')
    let breakLine = document.createElement('br')
    let task = document.getElementById('inputTask').value
    let taskBox = document.getElementById('taskBox')
    taskList.textContent = task
    
    taskBox.appendChild(box)
    taskBox.appendChild(taskList)
    taskBox.appendChild(breakLine)
    
    box.style.width = "1.5em"
    box.style.height = "1.5em"
    box.style.marginBottom = "1.4em" 
    
    document.getElementById('inputTask').value = ""
}

document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask()
    }
})
