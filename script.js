let minutes = 0;
let seconds = 0;
let cron;
function start() {
    cron = setInterval(timer , 1000)
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

