
function getData(){
   return new Promise((resolve,rejected)=>{
       setTimeout(()=>{
        resolve("Data Received")
       },2000);
    });
}


 async function showData(){

    console.log("Data Fatching");
    const result =await getData();
    console.log(result)

}

showData();