// 1. Comparison Operators
// Return: Either true or false

let num1 = 10;
let num2 = 5;

console.log("Equal to (==);", num1 == num2);
console.log("Equal to (==):", num1 == 10);

// Type coercion: automatic convertion of the data type if necessary
console.log("Equal to (==):", num1 == "10");

// Not Equal to: allows us to compare if 2 values is not equal to each other (!=)
console.log("Not Equal to (!=);", num1 != num2);
console.log("Not Equal to (!=):", num1 != 10);

// Type coercion: automatic convertion of the data type if necessary
console.log("Not Equal to (!=):", num1 != "10");

// Strict Equal to (===): check if two values are equal in value and in data type
// it does not support type coercion
console.log("Strict Equal to (===):", num2 === 5);
console.log("Strict Equal to (===):", num2 === "5");

// Strict Not Equal to (!==): check if two values are NOT equal in value and in data type
// it does not support type coercion
console.log("Strict Equal to (!==):", num2 === 5);
console.log("Strict Equal to (!==):", num2 === "5");


console.log("Greater Than:", num1 > num2);
console.log("Less Than:", num1 < num2);

console.log("Greater Than or Equal to (>=):", num1 >= num2);
console.log("Greater Than or Equal to (>=):", num1 >= 10);
console.log("Greater Than or Equal to (>=):", num1 >= 12);

console.log("Less Than or Equal to (<=):", num1 >= num1);
console.log("Less Than or Equal to (<=):", num1 >= 5);
console.log("Less Than or Equal to (<=):", num1 >= 4);

// 2. Logical Operators
// AND - && 
// OR - ||
// NOT - !
// let us combine 2 conditions together

let sunny = true;
let warm = true;

// AND: true on if all the conditions are true, otherwise false.
console.log("Is it sunny AND warm?", sunny && warm);

// OR: true if atleast one of the condition is true, otherwise false.
console.log("Is it sunny AND warm?", sunny || warm);

// Not: inverts the value of booleans
console.log("NOT sunny:", !sunny)

// implicit type coercion: automatically converted like equal and not equal to
// explicit type coercion: you are going to  tell what to convert

