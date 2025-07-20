
const express = require("express")
const app = express();


app.get("/user/:id",(req,res)=>{

    const userId= req.params.id;
    res.send(`UserId:${userId}`)
})

app.get("/user/:id/post/:postid",(req,res)=>{

    const {id,postid} =req.params;
    res.send(`user id:${id}, post Id:${postid}`)
})

app.get("/search",(req,res)=>{
    const {name,city}=req.query;
    res.send(`search result: name:${name},city:${city}`);
})

app.get("/",(req,res)=>{
    res.send("Welcome to Routing WIth Params and Queries example:/user/:id For User Id, /user/:id/post/:postid For userid and post id multiple id, /search ?name=abc&city=surat ")
})


app.listen(3000,(req,res)=>{
    console.log("server started on port 3000")
})