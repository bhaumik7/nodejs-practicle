const http = require("http");

const fs = require("fs");

const path = require("path");


const server = http.createServer((req, res) => {
    if (req.url == '/' || req.url == "/home") {

        const filepath = path.join(__dirname, "index.html");

        fs.readFile(filepath, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("Internal Server Error");
            }
            res.end(data);
        });

    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end('404 - Page Not Found');
    }
});
server.listen(3000, () => {

    console.log("server running at port 3000")

});

