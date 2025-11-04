// "this" keyword refers to the current object in which it is used.

/*
 * In JavaScript, the "this" keyword refers to the current object in which it is used.
 * It is a special variable that is automatically available within the scope of a function.
 * The value of "this" depends on how the function is called and the context in which it is executed.
 *
 * For example, in a method of an object, "this" refers to the object itself.
 * In a function called as a standalone function, "this" refers to the global object (window in a browser environment).
 * In an event handler, "this" refers to the element that triggered the event.
 *
 * Understanding how "this" works is crucial for writing clean and maintainable code.
 */

// For example

const obj = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

obj.sayHello(); // Output: Hello, my name is John

// also it can be used on arrow function

const person = {
  name: "Kj",
  greet: () => `Hello ${this.name}`,
};

console.log(person.greet()); // Output: Hello undefined

// Using callbacks

function logThis() {
  console.log(this);
}

[1, 2, 3, 4, 5].forEach(logThis, { name: "Kj" }); // Logs { name: 'Kj' }

// Using arrow functions

// using classes

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const human = new Person("Kj");
human.greet(); // Output: Hello, my name is Kj
