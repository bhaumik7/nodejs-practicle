

const express = require("express");
const logger = require("./middleware/logger")
const morgan = require("morgan");



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(logger);

app.use(morgan("dev"))


app.get("/",(req,res)=>{
    res.send("Welcome To Middleware !")
});

app.get("/about",(req,res)=>{

    res.send("This is About Page.")

})

app.get("/home",(req,res)=>{
    res.send("This is home page.")
})

app.post("/data",(req,res)=>{
    res.json({
        message:"data receive",
        body:req.body
    })
})





app.listen(3000,()=>{
    console.log("server started on port 3000")
})