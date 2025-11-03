// Function Scope
// Function Scope is a concept in JavaScript where variables declared inside a function are only accessible within that function.
// Variables declared outside a function are accessible throughout the entire program.

// Example
function example() {
  const name = "Kj";
  console.log(`Hello, ${name}!`);
}
example();
console.log(name); // ReferenceError: name is not defined
