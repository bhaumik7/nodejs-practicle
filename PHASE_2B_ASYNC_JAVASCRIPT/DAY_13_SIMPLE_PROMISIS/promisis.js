//simple promisis 
const simplepromisis = new Promise((resolve,rejected)=>{

    let success = true;
    
    if(success){
        resolve("Task Done.")
    }else{
        rejected("task Failed.");
    }

})

simplepromisis.then(res=>{console.log(res)}).catch(err=>{console.log(err)})

//promisis with settimeout

const settimeoutpromisis = new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        resolve("Data Fetched After 2 Sec.")
    },2000)
})

settimeoutpromisis.then(res=>console.log(res)).catch(err=>console.log(err));

//promisis chaining

new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        resolve(5);
    },1000);

}).then(num=>{
    console.log("step:1",num);
    return num *2;
}).then(result=>{
    console.log("step:2",result);
    return result + 10;
}).then(final =>{
    console.log("Final Result",final);
});


//Task Pizza Delivery

const pizza = new Promise((resolve,rejected)=>{
    const ready = true;

    if(ready){
        console.log("pizza delivery done")
    }else{
        console.log("pizza delivery Cancle")
    }
},1000);

pizza.then((res=>console.log(res))).catch(err=>{console.log(err)});