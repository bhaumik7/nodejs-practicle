
const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","hbs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

hbs.registerPartials(path.join(__dirname,"views/partials"));


//Routes

app.get("/",(req,res)=>{
    res.render("form");
});

app.post("/submit",(req,res)=>{

    const formdata = req.body;

    res.render("success",{data:formdata});
});

//start server

app.listen(3000,()=>{
    console.log("server started on port 3000");
});


