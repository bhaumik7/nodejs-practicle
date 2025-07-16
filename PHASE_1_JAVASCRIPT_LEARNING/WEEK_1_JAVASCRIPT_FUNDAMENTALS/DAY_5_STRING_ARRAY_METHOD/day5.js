
// string arry method

//string method

let fullname = " Raval  Bhaumik ";

//original string print
console.log("actual string",fullname);

//string uppercase

console.log("Uppercase",fullname.toUpperCase());

//string lowercase

console.log("lowercase",fullname.toLowerCase());

//string total length

console.log("length of string",fullname.length);

//remove spaces from start and end using trim

console.log("trim",fullname.trim());

//using slice cut portion 

console.log("slice(0,4)",fullname.slice(0,4));

//replace part of string using replace

console.log("replace Bhaumik to Priya",fullname.replace("Bhaumik","Priya"));

let hobbies = "reading , singing , driving";
//splite string
let hobbiesarray = hobbies.split(" , ");
console.log("splite hobbies",hobbiesarray);

//ARRAY METHOD

let number = [9,8,7,6,5,4,3,2,1];

console.log("original array",number);

console.log("sorted array",number.sort());

console.log("Decending sort",number.sort(function(a,b){return b-a}))

console.log("Reversed array",number.reverse());

let name =["Raval","Bhaumik","Kumar"];
console.log(name.join(" "));







