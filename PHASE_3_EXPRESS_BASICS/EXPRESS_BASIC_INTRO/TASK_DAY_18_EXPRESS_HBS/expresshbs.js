
const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();


app.set("view engine","hbs");
app.set("views",path.join(__dirname,"views"));

//Register partials serve
hbs.registerPartials(path.join(__dirname,"views/partials"))


//static files serve
app.use(express.static(path.join(__dirname,"public")));

//routes
app.get("/",(req,res)=>{
    res.render("index",{
        title:"Home Page",
        name:"Raval Bhaumik"
    })
});

app.get("/about",(req,res)=>{
    res.render("about",{
        title:"About Page",
        company:"Technical Gujarat"
        
    })
});

app.listen(3000,()=>{
    console.log("server started on port 3000")
})

