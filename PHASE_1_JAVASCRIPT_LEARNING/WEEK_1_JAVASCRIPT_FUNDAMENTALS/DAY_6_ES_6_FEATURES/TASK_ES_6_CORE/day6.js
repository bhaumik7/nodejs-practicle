
// LET AND CONST

const username = "Bhaumik";
let age = 32;

console.log("Name",username);
console.log("Age",age);

// ARROW FUNCTION & TEMPLATE LITERALS

const greet = (username) =>{
    console.log(`Hello ${username}`);
};
greet(username);

// DESTRUCTURING OBJECTS

const user = {

    name : "Priya",
    age :29,
    isDeveloper : true

};

const {name,isDeveloper} = user;

console.log("Name",name);
console.log("isDeveloper",isDeveloper);

//DESTRUCTURING ARRAY

const skills =["Html","Css","Javascript","Node.js","Express.js"];

const [skills1,skills2,skills3]=skills;

console.log("Skill1",skills1);
console.log("Skills2",skills2);

//SPREAD OPERATORS
const newskills = [...skills,"MongoDB","Sql"];
console.log("All Skills",newskills);


