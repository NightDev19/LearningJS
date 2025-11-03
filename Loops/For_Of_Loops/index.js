// For of Loops Used to iterate over arrays and strings

// Example 1: Iterating over an array
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// Example 2: Iterating over a string
const message = "Hello, World!";
for (const char of message) {
  console.log(char);
}

// Example 3: Iterating over a set
const numbers = new Set([1, 2, 3, 4, 5]);
for (const number of numbers) {
  console.log(number);
}

// Example 4: Iterating over a map
const person = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
]);
for (const [key, value] of person) {
  console.log(`${key}: ${value}`);
}
