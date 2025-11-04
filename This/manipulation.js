// "this" keyword can be manipulate with bind, call and apply

// bind
/*
 * The bind method creates a new function that, when called, has its this keyword set to the provided value.
 * It allows you to "bind" the context of a function to a specific object.
 *
 * Example:
 * const person = {
 *   name: 'John',
 *   greet: function() {
 *     console.log(`Hello, my name is ${this.name}`);
 *   }
 * };
 *
 * const greetJohn = person.greet.bind(person);
 * greetJohn(); // Output: Hello, my name is John
 */

// Another Example :

function greet1() {
  return `Hello, ${this.name}`;
}
const obj1 = { name: "Kj" };
const boundGreet = greet1.bind(obj1);
console.log(boundGreet()); // Output: Hello, my name is Kj

// call
/*
 * The call method invokes a function with a specified this value and arguments provided individually.
 * It allows you to call a function with a specific context and arguments.
 *
 * Example:
 * const person = {
 *   name: 'John',
 *   greet: function(greeting) {
 *     console.log(`${greeting}, my name is ${this.name}`);
 *   }
 * };
 *
 * person.greet.call(person, 'Hello'); // Output: Hello, my name is John
 */

// apply
/*
 * The apply method invokes a function with a specified this value and arguments provided as an array.
 * It allows you to call a function with a specific context and arguments passed as an array.
 *
 * Example:
 * const person = {
 *   name: 'John',
 *   greet: function(greeting) {
 *     console.log(`${greeting}, my name is ${this.name}`);
 *   }
 * };
 *
 * person.greet.apply(person, ['Hello']); // Output: Hello, my name is John
 */

// Mix Another Example of Apply and Call

function greet2(greetings, punctuation) {
  return `${greetings}, my name is ${this.name}${punctuation}`;
}

const obj2 = { name: "Kj" };
console.log(greet2.call(obj2, "Hello", "!")); // Output: Hello, my name is Kj!
console.log(greet2.apply(obj2, ["Hello", "!"])); // Output: Hello, my name is Kj!
