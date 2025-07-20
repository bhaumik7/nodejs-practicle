
const express = require("express");
const path = require("path");

const app = express();

//serve static files in public folder 

app.use(express.static(path.join(__dirname, "public")));

//serve About.html and home.html
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"));
})

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.use((req,res)=>{
    res.send("Invalid Url")
})

const port = 3000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})

