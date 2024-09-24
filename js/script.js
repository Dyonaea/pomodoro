let working = true;
let running = false;
let sec = 0;
let minute = -1;



let formRestTime = document.getElementById('fRest')
let formWorkTime = document.getElementById('fWork')

let restTime = formRestTime.value;
let workTime = formWorkTime.value;

let timetxt = document.getElementById('timer')

let switcherWork = document.getElementById('work')
let switcherReset = document.getElementById('rest')

let timeSelector = document.getElementById('timeSelector')

let gear = document.getElementById('gear')
let form = document.getElementById('form')

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
                    switcherReset.classList.add('selected');
                    switcherWork.classList.remove('selected');
                }
                else{
                    working = true;
                    sec = 0;
                    minute = workTime;
                    switcherReset.classList.remove('selected');
                    switcherWork.classList.add('selected');
                }
            }
            sec -=1;
        }
    }, 10);
}
timerWork();

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
    buttonStop.classList.remove('ghost');
});

let buttonStop = document.getElementById('stop');

buttonStop.addEventListener('click', () =>{
    minute = workTime;
    sec = 0;
    displayTime();
    running = false;
    working = true;
    buttonStop.classList.add('ghost');
    buttonStart.classList.remove('ghost');
    switcherReset.classList.remove('selected');
    switcherWork.classList.add('selected');
});


gear.addEventListener('click', () =>{
    buttonStart.classList.add('ghost')
    buttonStop.classList.add('ghost')
    gear.classList.add('ghost')
    timeSelector.classList.add('ghost')
    switcherReset.classList.add('ghost')
    switcherWork.classList.add('ghost')
    timer.classList.add('ghost')
    form.classList.remove('ghost')
    
});
 
timeSelector.addEventListener('click', () =>{
    
    restTime = formRestTime.value;
    workTime = formWorkTime.value;
    minute = workTime;
    sec = 0;
    displayTime();
    console.log('aa');
});
