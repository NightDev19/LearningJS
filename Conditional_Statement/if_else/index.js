// if else statement used to execute code if condition is true or false
/*
if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}
*/

// example
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// you can use it also in the array
let numbers = [1, 2, 3, 4, 5];
if (numbers.length > 0) {
  console.log("Array is not empty.");
  if (numbers.length % 2 === 0) {
    console.log("Array length is even.");
  } else {
    console.log("Array length is odd.");
  }
} else {
  console.log("Array is empty.");
}
