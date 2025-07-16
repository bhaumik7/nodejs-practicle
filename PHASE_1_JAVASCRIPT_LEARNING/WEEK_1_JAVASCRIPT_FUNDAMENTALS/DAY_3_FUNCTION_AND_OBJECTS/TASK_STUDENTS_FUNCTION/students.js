//DAY 3 TASK CREATE STUDENTS FUNCTION A function that returns an object  Parameters   A separate function to display the object


//CREATE A FUNCTION NAME STUDENTS OBJECTS.

function students(name,age,rollno,grade,subjects){

    return{
        name:name,
        age:age,
        rollno:rollno,
        grade:grade,
        subjects:subjects
    };

}

function displaystudents(students){

    console.log("students details");
    console.log("student  name: ",students.name);
    console.log("students age: ",students.age);
    console.log("students rollno: ",students.rollno);
    console.log("students grade: ",students.grade);
    console.log("students subjects: ",students.subjects.join(", "))

}

//call the function

let student1 = students("Bhaumik",32,"7","A",["maths","science","english"]);
let student2 = students("Raval",32,"9","A",["maths","science","english"]);

displaystudents(student1);
displaystudents(student2);

