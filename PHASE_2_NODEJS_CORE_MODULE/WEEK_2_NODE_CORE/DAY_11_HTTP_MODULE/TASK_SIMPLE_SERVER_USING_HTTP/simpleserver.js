
const http = require('http');

const server =http.createServer((req,res)=>{

    res.write("Hello from server..");
    res.end();
});

server.listen(3000,()=>{
    console.log("server started on port http://localhost:3000")
})


