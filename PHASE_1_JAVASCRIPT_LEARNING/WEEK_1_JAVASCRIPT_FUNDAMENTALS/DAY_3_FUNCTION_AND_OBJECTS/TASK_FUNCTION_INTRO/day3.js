//function declaration

function greet(){
    console.log("welcome to node.js Learning..");
}

//how to call a funcction
greet();

//function with parameters
function greetuser(name){

    console.log("hello "+name+" !");

}
//function assign name with parameters..
greetuser("Bhaumik");

//function with returns values.

function add(a,b){
    return a+b;
}
let result = add(5,6);
console.log("sum of this value",result);
 result = add(25,30);
console.log("sum of this value",result)

//function that returns objects.


function createuser(name,age,isDeveloper)
{
    return{
        name:name,
        age:age,
        isDeveloper:isDeveloper
    };  

}
let user= createuser("Bhaumik",25,true)
console.log("user object",user)

//function calling another function.

function printUser(userObj) {
    console.log("Name:", userObj.name);
    console.log("Age:", userObj.age);
    console.log("Is Developer:", userObj.isDeveloper);
}
printUser(user);



