
function readDataPromisis(){
   return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            resolve("File Read Sucessfully Using Promisis..");
        },1000);
    });
}

readDataPromisis()
.then(data=>console.log("success : ",data))
.catch(err=>console.log("failed",err));