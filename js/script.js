let working = true; //time type (working or resting)
let running = false;//if the timer is currently running
let sec = 0;
let minute = -1;    //temporary values

let formRestTime = document.getElementById('fRest')
let formWorkTime = document.getElementById('fWork')

let restTime = formRestTime.value;
let workTime = formWorkTime.value;

let timetxt = document.getElementById('timer')

let switcherWork = document.getElementById('work')
let switcherRest = document.getElementById('rest')

let timeSelector = document.getElementById('timeSelector')

let gear = document.getElementById('gear')
let form = document.getElementById('form')

let check = document.getElementById('check')

function timerWork(){
    var timer = setInterval(function(){

        if(running){

            displayTime();

            if(sec <= 0){
                minute --;
                sec = 60;
            }

            if(minute == -1){
                if(working){
                    working = false;
                    sec = 0;
                    minute = restTime;
                    switcherRest.classList.add('selected');
                    switcherWork.classList.remove('selected');
                }
                else{
                    working = true;
                    sec = 0;
                    minute = workTime;
                    switcherRest.classList.remove('selected');
                    switcherWork.classList.add('selected');
                }
            }
            sec -=1;
        }
    }, 1000);
}

// must be called once to initialize values
timerWork();

//displays the time remaining as such : "mm:ss"  ex : 00:05
function displayTime(){
    if (minute < 10){
        timetxt.textContent = '0' + minute +':';
    }
    else{
        timetxt.textContent = minute +':';
    }
    
    if(sec < 10){
        timetxt.textContent += '0' + sec;
        
    }else{
        timetxt.textContent += sec;
        
    }
}

let buttonStart = document.getElementById('start');
buttonStart.addEventListener('click', () =>{
    if(minute < 0){
        working = true;
        minute = workTime;
        sec = 0;
    }
    running = true;
    buttonStart.classList.add('ghost');
    buttonReset.classList.remove('ghost');
});

let buttonReset = document.getElementById('stop');
    buttonReset.addEventListener('click', () =>{
    minute = workTime;
    sec = 0;
    displayTime();
    running = false;
    working = true;
    buttonReset.classList.add('ghost');
    buttonStart.classList.remove('ghost');
    switcherRest.classList.remove('selected');
    switcherWork.classList.add('selected');
});

//shows parameters and hides the rest
gear.addEventListener('click', () =>{
    buttonStart.classList.add('ghost')
    buttonReset.classList.add('ghost')
    gear.classList.add('ghost')
    timeSelector.classList.add('ghost')
    switcherRest.classList.add('ghost')
    switcherWork.classList.add('ghost')
    timer.classList.add('ghost')
    form.classList.remove('ghost')
    
});

//hides parameters and shows the rest
check.addEventListener('click', () =>{
    if(running) buttonReset.classList.remove('ghost')
    else buttonStart.classList.remove('ghost')
    gear.classList.remove('ghost')
    timeSelector.classList.remove('ghost')
    switcherRest.classList.remove('ghost')
    switcherWork.classList.remove('ghost')
    timer.classList.remove('ghost')
    form.classList.add('ghost')
    restTime = formRestTime.value;
    workTime = formWorkTime.value;
    minute = workTime;
    sec = 0;
    displayTime();
});