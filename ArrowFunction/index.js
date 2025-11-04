// Arrow function is a concise way to write functions in JavaScript.
// It is a shorter syntax compared to traditional function expressions.
// It also has lexical this binding, meaning it inherits the this value from the surrounding scope.
// It is often used as a callback function or as a method in an object.

// For example of arrow function as a callback function:
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// For example of arrow function as a method in an object:
const person = {
  name: "John",
  age: 30,
  greet: () =>
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    ),
};
person.greet(); // Output: Hello, my name is undefined and I am undefined years old.


// no parameter arrow function

const noParamArrowFunction = () => console.log("No parameter arrow function");

// no parameter arrow function with return statement

const noParamArrowFunctionWithReturn = () => {
  return "No parameter arrow function with return statement";
};
