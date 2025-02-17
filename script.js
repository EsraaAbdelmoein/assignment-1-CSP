// Part 1: Variables, Data Types & Type Casting
let studentName = "Esraa Abdelmoein";
let studentAge = 34;
let isEnrolled = true;

document.write("Student Name: " + studentName + "<br>");
document.write("Student Age: " + studentAge + "<br>");
document.write("Is Enrolled: " + isEnrolled + "<br><br>");

// Type Casting
let studentAgeString = String(studentAge);
document.write("Before Conversion: " + typeof studentAge + "<br>");
document.write("After Conversion: " + typeof studentAgeString + "<br><br>");

document.write("<h1> Step 2 </h1>");

let num1 = Number(prompt("Please enter a number", "2"));
let num2 = Number(prompt("Please enter another number", "2"));

// Using +
document.write("This is adding two variables together " + (num1 + num2));
// Using -
document.write(" <br> This is subtracting two variables together " + (num1 - num2));
// Using *
document.write(" <br> This is multiplying two variables together " + (num1 * num2));
// Using /
document.write(" <br> This is dividing two variables together " + (num1 / num2));
// Using %
document.write(" <br> This is when modulus is used on the two variables together " + (num1 % num2));

document.write("<h1> Step 3 </h1>");

let age = Number(prompt("Please enter your age", "18"));
if (age >= 18) {
    // You are eligible to vote!
    document.write("You are eligible to vote! ");
} else {
    // You are not eligible to vote yet
    document.write("You are not eligible to vote yet ");
}

document.write("<h1> Step 4 </h1>");

for (let i = 1; i <= 10; i++) {
    document.write(" " + i);
}

let num3 = 0;

do {
    num3 = Number(prompt("Please enter a number greater than 10", "14"));
} while (num3 <= 10);

document.write("<h1> Perfect job! You are amazing! </h1>");
