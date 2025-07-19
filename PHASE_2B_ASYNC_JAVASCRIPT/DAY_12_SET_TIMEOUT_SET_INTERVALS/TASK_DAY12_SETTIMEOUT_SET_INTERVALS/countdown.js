
//CountDown from 5 to 0

let Count = 5;

const CountDown = setInterval(()=>{

    console.log(Count);
    Count--;
    if(Count<0){
        clearInterval(CountDown);
        console.log("Finished CountDown..")
    }

},1000);