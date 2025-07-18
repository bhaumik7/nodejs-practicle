
const fs = require('fs');

//Create File
fs.writeFileSync("sync.txt","This is sync file.");

fs.writeFile("async.txt","This is Async File.",(err)=>{
    
    if(err){
        
        console.log("Error Generating File",err);
        return;
    }
    console.log("Async File Created.");
})

//Read File

let data = fs.readFileSync("sync.txt","utf8");
console.log("sync Read File",data);

fs.readFile("async.txt","utf8",(err,asyncdata)=>{
   if(err)
    {
        
        console.log("Error reading File.",err);
        return;
    } 
    console.log("This is Async FIle Read",asyncdata);

});

// Append to a file synchronously

fs.appendFileSync("sync.txt","\nThis Is Append COntent Using AppendFile Sync.");

console.log("Sync Append Done");

//Append To Asynchronously

fs.appendFile("async.txt","\n This Is Append Content Using AppendFile async",(err)=>{
    if(err){
        console.log("Error Appending File",err);
        return;
    }
    console.log("Async Append Done");
});

// Read File Content With Append File

 data =fs.readFileSync("sync.txt","utf8");
console.log("This is Read file Appending Content Also",data);

fs.readFile("async.txt","utf8",(err,data)=>{
    if(err){
        console.log("Error File With Appening Data",err)
        return;
    }
    console.log("This is final Async FIle Reading Appending Data Also",data);
});

//Rename file name

fs.renameSync("sync.txt","Rename_sync.txt");
console.log("Rename Successfully sync.txt to Rename_sync.txt");


fs.rename("async.txt","Rename_async.txt",(err)=>{
    if(err){
        console.log("Error Generating In Rename",err);
        return;
    }
    console.log("Rename Successfully async.txt to Rename_async.txt");
});

//Delete File

fs.unlinkSync("Rename_sync.txt");
console.log("File sucessfully Deleted..");

fs.unlink("Rename_async.txt",(err)=>{
    if(err){
        console.log("error In delete FIle",err);
        return;
    }
    console.log("file Deleted sucessfully..");
});