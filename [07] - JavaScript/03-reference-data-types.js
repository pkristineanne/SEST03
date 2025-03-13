// Arrays: collection of values
// Item/Element: individual value
// Index: location of the element inside of the array
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log("Data Type:", typeof numbers);
console.log("Numbers:", numbers);
console.log("First Element:", numbers[0]);
console.log("Last Element:", numbers[numbers.length - 1]);
console.log("Undefined:", numbers[9]);
console.log("Length:", numbers.length);

// Object Oriented Programming (OOP)
// Properties: Information about the object
// Methods: Functionalities that an object can do
let car = {
  color: "red",
  model: "sedan",
  year: 1970,
  start() {
    console.log("The engine starts");
  },
  stop: function () {
    console.log("The engine stops");
  },
};
console.log("Car:", car);
console.log("Data Type:", typeof car);
console.log("Color of the car:", car.color);
console.log("Model of the car:", car.model);
car.start();
car.stop();

// 1. Functions
// reusable block of code that can be executed whenever needed.
function greet() {
  console.log("Hello! Welcome to the world of functions.");
  console.log("Let's go!");
}

// Calling a function
greet();
greet();
greet();

// 2. Function definition with parameters
// Parameters: placeholders
// Arguments: values passed to a functions parameters
function greetIndividual(name) {
  console.log("Hello", name);
}

greetIndividual("Rico");
greetIndividual("Gerome");
greetIndividual("Justin");
greetIndividual("Anne");
greetIndividual("Eyben");
