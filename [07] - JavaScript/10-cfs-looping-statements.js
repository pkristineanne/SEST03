// Looping Statements
// Repeatedly execute a block of code while a condition is met.
// Autosave must be off

// 1. for loop
/* 
Components of a for loop:
1. Initial Expression / Variable Initialization
2. Condition Expression
3. Increment/Decrement

*/
for (let i = 3; i <= 8; i++) {
  console.log("For Loop count:", i);
}

// Print even numbers form 1 - 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log("Number:", i);
  }
}

// 2. White loop
let count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}

// 3. Do-While Loop
// Execute the block of code atleast once
let counter = 1;
do {
  console.log("Do while loop count:", counter);
  counter++;
} while (counter <= 3);

// Break and Continue
// continue: skips the current iteration, and move on to the next iteration.
// break: terminate the loop
let number = 1;
while (number <= 20) {
  if (number == 15) {
    break;
  }
  if (number == 13) {
    number++;
    continue;
  }
  if (number % 2 == 1) {
    console.log("Number:", number);
  }
  number++;
}