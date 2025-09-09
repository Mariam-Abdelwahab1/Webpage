let myName = "Mariam Abdelwahab";
let myAge = 24;
let isStudent = false;
document.writeln("Name: " + myName + "<br>");
document.writeln("Age: " + myAge + "<br>");
document.writeln("Are you a student? " + isStudent + "<br><br>");

let x = 20;
let y = 5;
document.writeln("Addition: " + (x + y) + "<br>");
document.writeln("Subtraction: " + (x - y) + "<br>");
document.writeln("Multiplication: " + (x * y) + "<br>");
document.writeln("Division: " + (x / y) + "<br>");
document.writeln("Modulus: " + (x % y) + "<br>");

document.writeln("<br>");

let my_favourite_fruits = ["Banana", "Mango", "Apple", "watermelon", "Blueberry"];
document.writeln(my_favourite_fruits[0], "<br>");
document.writeln(my_favourite_fruits[4], "<br>");
my_favourite_fruits.push("Pineapple");
my_favourite_fruits.shift();

document.writeln("<br>");

let student = {
    name: "Mariam",
    age: 24,
    grade: "A",
    subjects: ["Math", "Science", "English"]
}
document.writeln("Student Name: " + student.name + "<br>");
document.writeln("Student Grade: " + student.grade + "<br>");
student.isGraduadted = true;



