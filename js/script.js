let working = true;
let running = false;
let sec = 0;
let minute = 0;

let timetxt = document.getElementById('timer')

let switcherWork = document.getElementById('work')
let switcherRest = document.getElementById('rest')

function timerWork(){
    var timer = setInterval(function(){
        if(running){

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
            if(sec <= 0){
                minute --;
                sec = 60;
            }
            if(minute == -1){
                
                running = false;
            }
            sec -=1;
        }
    }, 1);
}
timerWork();

let buttonStart = document.getElementById('start');
buttonStart.addEventListener('click', () =>{
    if(minute <= 0){
        minute = 2;
        sec = 0;

    }
    running = true;
    buttonStart.classList.add('ghost');
    buttonStop.classList.remove('ghost');
});

let buttonStop = document.getElementById('stop');

buttonStop.addEventListener('click', () =>{
    running = false;
    buttonStop.classList.add('ghost');
    buttonStart.classList.remove('ghost');
});



