let minutes = 0;
let seconds = 0;

let cron;

function start() {
    cron = setInterval(timer, 1000)
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