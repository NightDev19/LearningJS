// Do While Loops Executes at least once, even if the condition is false

do {
  console.log("This will execute at least once");
} while (false);

// Stop when the count is greater than 5
let count = 1;
do {
  console.log(`Iteration ${count}: This will execute at least once`);
  count++;
} while (count <= 5);

// Odd or even
let num = 0;
do {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
  // Stop when num is greater than 5
  if (num > 5) {
    break;
  }
  num++;
} while (num <= 20);
