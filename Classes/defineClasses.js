// There are two main ways to define classes in JavaScript: using the class keyword and using a constructor function.

// Class Declaration
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// Class Expression
const Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
};

// Class Instance
const person = new Person("John", 30);
console.log(person.name); // Output: John
console.log(person.age); // Output: 30

// Note : Class Declaration are not hoisted, meaning they cannot be used before they are declared in the code.
