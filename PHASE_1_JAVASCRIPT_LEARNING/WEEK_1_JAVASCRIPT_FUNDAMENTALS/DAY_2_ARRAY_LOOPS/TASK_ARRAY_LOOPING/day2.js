

//CREATE A ARRAY
let Languages = ["Javascript","C","C++",".NET","JAVA"];

//FOR PRINT LENGTH OF ARRAY
console.log(Languages.length)

//FOR PRINT FIRST AND LAST LANGUAGES
console.log("FIRST LANGUAGE NAME",Languages[0]);
console.log("LAST LANGUAGE NAME:",Languages[Languages.length-1]);

//ADD NEW LANGUAGES

console.log(Languages.push("TypeScript"));

//REMOVE THE FIRST LANGUAGE

Languages.shift();


//PRINT USING FOR LOOP
console.log("PRINT USING FOR LOOP")
for(let i=0; i<Languages.length;i++){
    console.log(Languages[i])
}

//PRINT USING FOREACH
console.log("PRINT USING FOREACH LOOP")
Languages.forEach(function(Languages,index)  {

    console.log(index + 1 + "." + Languages)
    
});

//OTHER METHODS

console.log("INITIAL LANGUAGES",Languages)


//PUSH() FOR ADD AN ARRAY

Languages.push("Paython");
console.log("AFTER PUSH ",Languages);

//POP() FOR DELETE AN ARRAY ELEMENT 
Languages.pop();
console.log("AFTER POP REMOVE THE LAST ELEMENT",Languages)

//UNSHIFT FOR ADD FIRST ELEMENT OF ARRAY

Languages.unshift("PAYTHON");
console.log("UNSHIFT ADD FIRST VALUE OF ARRARY",Languages);

//SHIFT USING REMOVE THE FIRST ELEMENT OF ARRAY

Languages.shift();
console.log("SHIFT USING REMOVE FIRST VALUE OF ARRAY",Languages);

//INCLUDES() USING FOR CHEK VALUE IN ARRARY OR NOT

console.log("INCLUDES C++?",Languages.includes("C++"));
console.log("INCLUDES SWIFT?",Languages.includes("SWIFT"));

//INDEXOFF USING FOR GET THE INDEX OF A LANGUAGE.

console.log("INDEX OF c++",Languages.indexOf("C++"));

console.log("INDEX OF JAVA",Languages.indexOf("JAVA"));

