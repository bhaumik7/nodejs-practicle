const express = require("express");
const router = express.Router();

// Capture dynamic username from URL
router.get("/:name", (req, res) => {
    const username = req.params.name;
    res.render("user", { username });
});

module.exports = router;
