/*
Let vs Const

Let
- Reassigning
- Redeclaring
- Block Scope
- Hoisting
- Temporal Dead Zone

Const
- Cannot be reassigned
- Cannot be redeclared
- Block Scope
- Hoisting
- Temporal Dead Zone

*/

// Let

let x = 1;
x = 2;
console.log(x);

// Hoisting
console.log(z); // ReferenceError: Cannot access 'z' before initialization
let z = 3;

// Const

const y = 1; // Cannot reassign
// y = 2; // Error: Assignment to constant variable.
console.log(y);

// Hoisting
console.log(w); // ReferenceError: Cannot access 'w' before initialization
const w = 4;

// Declaring a Variable

let name;

// initializing a Variable

name = "John";
console.log(name);

// Updateing a Variable

name = "Jane";
console.log(name);

// Declaring and initializing a Variable

let age = 25;
console.log(age);
