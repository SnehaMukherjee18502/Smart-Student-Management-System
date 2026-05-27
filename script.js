// Main array to store all students
let students = [];


// FUNCTION TO ADD STUDENT


function addStudent(name, roll, marks) {

    let student = [name, roll, marks];

    students.push(student);

    console.log(name + " added successfully.");
}



// FUNCTION TO DISPLAY STUDENTS


function displayStudents() {

    console.log("\n***** ALL STUDENTS *****");

    if (students.length === 0) {
        console.log("No students found.");
        return;
    }

    for (let i = 0; i < students.length; i++) {

        console.log("\nStudent " + (i + 1));

        console.log("Name : " + students[i][0]);

        console.log("Roll : " + students[i][1]);

        console.log("Marks: " + students[i][2]);

        console.log("Grade: " + calculateGrade(students[i][2]));
    }
}



// FUNCTION TO SEARCH STUDENT


function searchStudent(roll) {

    let found = false;

    for (let i = 0; i < students.length; i++) {

        if (students[i][1] === roll) {

            console.log("\n***** STUDENT FOUND *****");

            console.log("Name : " + students[i][0]);

            console.log("Roll : " + students[i][1]);

            console.log("Marks: " + students[i][2]);

            console.log("Grade: " + calculateGrade(students[i][2]));

            found = true;

            break;
        }
    }

    if (found === false) {
        console.log("Student not found.");
    }
}



// FUNCTION TO CALCULATE GRADE


function calculateGrade(marks) {

    if (marks >= 90) {
        return "A+";
    }

    else if (marks >= 80) {
        return "A";
    }

    else if (marks >= 70) {
        return "B";
    }

    else if (marks >= 60) {
        return "C";
    }

    else if (marks >= 40) {
        return "D";
    }

    else {
        return "Fail";
    }
}


// FUNCTION TO FIND TOPPER


function findTopper() {

    if (students.length === 0) {
        console.log("No students available.");
        return;
    }

    let topper = students[0];

    for (let i = 1; i < students.length; i++) {

        if (students[i][2] > topper[2]) {

            topper = students[i];
        }
    }

    console.log("\n***** TOPPER *****");

    console.log("Name : " + topper[0]);

    console.log("Roll : " + topper[1]);

    console.log("Marks: " + topper[2]);
}



// FUNCTION TO UPDATE MARKS


function updateMarks(roll, newMarks) {

    let found = false;

    for (let i = 0; i < students.length; i++) {

        if (students[i][1] === roll) {

            students[i][2] = newMarks;

            console.log("Marks updated successfully.");

            found = true;

            break;
        }
    }

    if (found === false) {
        console.log("Student not found.");
    }
}



// FUNCTION TO DELETE STUDENT


function deleteStudent(roll) {

    let found = false;

    for (let i = 0; i < students.length; i++) {

        if (students[i][1] === roll) {

            students.splice(i, 1);

            console.log("Student deleted successfully.");

            found = true;

            break;
        }
    }

    if (found === false) {
        console.log("Student not found.");
    }
}



// FUNCTION TO FIND AVERAGE MARKS


function averageMarks() {

    if (students.length === 0) {
        console.log("No students available.");
        return;
    }

    let total = 0;

    for (let i = 0; i < students.length; i++) {

        total = total + students[i][2];
    }

    let average = total / students.length;

    console.log("\nAverage Marks: " + average);
}



// FUNCTION TO SHOW PASS/FAIL COUNT


function passFailCount() {

    let pass = 0;

    let fail = 0;

    for (let i = 0; i < students.length; i++) {

        if (students[i][2] >= 40) {
            pass++;
        }

        else {
            fail++;
        }
    }

    console.log("\nPass Students: " + pass);

    console.log("Fail Students: " + fail);
}



// SAMPLE DATA


addStudent("Sneha", 1, 95);

addStudent("Rahul", 2, 82);

addStudent("Priya", 3, 67);

addStudent("Aman", 4, 38);



// FUNCTION CALLS


displayStudents();

searchStudent(2);

findTopper();

averageMarks();

passFailCount();

updateMarks(4, 55);

deleteStudent(3);

displayStudents();