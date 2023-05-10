let minutes = 0;
let seconds = 0;
let durations = [25,5,25,5,25,15];
let currentDurationIndex = 0
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

    document.getElementById("counter").innerText = `${minutes} : ${seconds}`
   
    const currentDuration = durations[currentDurationIndex];
    const durationInSeconds = currentDuration * 60;
  
    if (minutes * 60 + seconds === durationInSeconds) {
      currentDurationIndex++;
      if (currentDurationIndex === durations.length) {
        clearInterval(cron);
        minutes = 0
        seconds = 0 
        currentDurationIndex = 0
      }
      minutes = 0;
      seconds = 0;
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

    document.getElementById('inputTask').value = ""
}

