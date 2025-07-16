
let word = document.getElementById("demo"); 
console.log(word);


//changes content
word.innerText="hello form javascript";

//changing styles
word.style.color="red";
word.style.fontSize="20px";

//event handling

function sayHi() {
  alert("Hello, DOM!");
}


//ADDING ELEMENT BY DYNAMICALLY

let newEl = document.createElement("h2");
newEl.innerText = "This is new!";
document.body.appendChild(newEl);

