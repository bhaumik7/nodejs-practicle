
//Fake Api Call Using .then

fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
        console.log("Using Async And Await Below OutPUt")
    })
    .catch(err => console.log(err))


//Fake Api Call Using Async&Await



async function getUser() {
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await result.json();
        console.log("sucess get data", data)
    }
    catch (err) {

        console.log("error ingetting data", err)

    }
}

getUser();