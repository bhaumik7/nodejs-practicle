

let seconds = 0;
let minute =0;
let hours=0;
let timer = null;

function updatedDisplay(){

    const formatedTime = String(hours).padStart(2,"0") + ":"+
    String(minute).padStart(2,"0")+":"+
    String(seconds).padStart(2,"0");

    document.getElementById("display").innerText = formatedTime;
}

function start(){
    if(timer!==null){
        return;
    }

    timer=setInterval(()=>{
        seconds++;
        if(seconds>=60){
            seconds=0;
            minute++;
        }
        if(minute>=60){
            minute=0;
            hours++;
        }
        updatedDisplay();
    },1000);

}

function stop(){
    clearInterval(timer);
    timer=null;
    updatedDisplay();

}

function reset(){
    stop();
    seconds=0;
    minute=0;
    hours=0;
    updatedDisplay();
}
