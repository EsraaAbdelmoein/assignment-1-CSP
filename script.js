// script.js

// Part 1: Variables, Data Types & Type Casting
let studentName = "Esraa";
let studentAge = 34;
let isEnrolled = true;

document.write("Student Name: " + studentName + "<br>");
document.write("Student Age: " + studentAge + "<br>");
document.write("Is Enrolled: " + isEnrolled + "<br><br>");

// Type Casting
let studentAgeString = String(studentAge);
document.write("Before Conversion: " + typeof studentAge + "<br>");
document.write("After Conversion: " + typeof studentAgeString + "<br><br>");

// Part 2: Operators & User Interaction
let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

document.write("Addition: " + (num1 + num2) + "<br>");
document.write("Subtraction: " + (num1 - num2) + "<br>");
document.write("Multiplication: " + (num1 * num2) + "<br>");
document.write("Division: " + (num1 / num2) + "<br>");
document.write("Modulus: " + (num1 % num2) + "<br><br>");

// Part 3: Conditional Execution
let age = Number(prompt("Enter your age: "));
if (age >= 18) {
    document.write("You are eligible to vote!<br><br>");
} else {
    document.write("You are not eligible to vote yet.<br><br>");
}

// Part 4: Loops
// For Loop
for (let i = 1; i <= 10; i++) {
    document.write(i + " ");
}
document.write("<br><br>");

// While Loop
let userNumber;
do {
    userNumber = Number(prompt("Enter a number greater than 10: "));
} while (userNumber <= 10);
document.write("Valid number entered: " + userNumber);
