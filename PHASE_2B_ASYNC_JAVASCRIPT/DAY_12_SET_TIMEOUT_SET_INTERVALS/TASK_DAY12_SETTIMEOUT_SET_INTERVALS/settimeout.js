

//Set Time Out Using For Delay 
console.log("start");

setTimeout(()=>{
    console.log("start after 3 seconds")
},3000);

console.log("end");

//Cancle Time Out With Clear Time Out

const timerId =setTimeout(()=>{
    console.log("This Will Not Run");
},3000);

clearTimeout(timerId);  //cancle It Using This line.


//RealTIme  Using SetIntervals

setInterval(()=>{
    const now =new Date();
    console.log("Current Time : ",now.toLocaleTimeString());
},1000);