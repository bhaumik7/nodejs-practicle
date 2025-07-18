const os = require('os');

console.log("OS Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Info:", os.cpus().length + " cores");
console.log("CPU Details:", os.cpus()[0]); // Info of first core

console.log("Free Memory:", os.freemem() / 1024 / 1024, "MB");
console.log("Total Memory:", os.totalmem() / 1024 / 1024, "MB");

console.log("Uptime (seconds):", os.uptime());
console.log("User Info:", os.userInfo());
console.log("Home Directory:", os.homedir());
console.log("Hostname:", os.hostname());
console.log("OS Type:", os.type());
