const express = require("express");
const path = require("path");

const homeRouter = require("./Router/home");
const userRouter = require("./Router/user");

const app = express();

// Set view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", homeRouter);
app.use("/user", userRouter);

// 404 fallback
app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
