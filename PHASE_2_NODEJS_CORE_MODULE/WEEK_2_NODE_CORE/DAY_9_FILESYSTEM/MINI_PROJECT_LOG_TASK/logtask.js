
//Log File

const fs = require("fs");

//For New Date
const now = new Date();

const logEntry = `Run at : ${now.toTimeString()}\n`;

fs.appendFile("log.txt",logEntry,(err)=>{
    if(err){
        console.log("Error in log Entry or create file",err);
        return;
    }
    console.log("successfully Created File.")
});

fs.readFile("log.txt","utf8",(err,data)=>{
    if(err){
        console.log("Reading File Err",err);
        return;
    }
    console.log("Log.txt Content : ",data);
});
