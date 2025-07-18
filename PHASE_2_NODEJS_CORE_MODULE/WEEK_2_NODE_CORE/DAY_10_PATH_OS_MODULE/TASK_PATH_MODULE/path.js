const path = require('path');

const filePath = __filename;
const dirPath = __dirname;

console.log("Full File Path:", filePath);
console.log("Directory Path:", dirPath);

console.log("Base Name:", path.basename(filePath));
console.log("Directory Name:", path.dirname(filePath));
console.log("Extension Name:", path.extname(filePath));

const newPath = path.join(__dirname, 'folder', 'file.txt');
console.log("Joined Path:", newPath);

const absPath = path.resolve('folder', 'file.txt');
console.log("Absolute Path:", absPath);
