//importing library using require
const Readline = require('readline')

const rl = Readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("what Is Your Name ? ",function(name){
    console.log(`hello ${name}`);
    rl.close();
});