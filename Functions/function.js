// Function declaration defines a named function using the function keyword

/*
Syntax
function functionName(parameters) {
  // function body
}
*/
// Example

function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Kj"); // this is how to call a function
//or
console.log(greet("Kj"));

/*
Functional expression defines a function as a part of an expression often assigned to a variable

const functionName = function(parameters){
  // function body
  return value; // optional
}
*/
// example

const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3));

// Arrow function expression defines a function using the arrow syntax

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(2, 3));
