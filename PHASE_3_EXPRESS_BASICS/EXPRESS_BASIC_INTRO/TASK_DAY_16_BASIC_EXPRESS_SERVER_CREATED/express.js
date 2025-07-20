const express = require("express");

const app =express();

//content or api or route..etc

app.get("/",(req,res)=>{
    res.send("Hello From Express Server")
});

app.listen(3000,()=>{
    console.log("server started on port 3000");
});