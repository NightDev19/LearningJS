// Literals
/*
Literals are the Fixed value that represent data directly in the code.
*/

// Numbers
let numberLiteral = 1; // Number that represents an integer
let pointLiteral = 1.5; // Number that represents a floating-point number
let hexLiteral = 0xff; // Number that represents a hexadecimal number
let binaryLiteral = 0b1010; // Number that represents a binary number
let octalLiteral = 0o77; // Number that represents an octal number
let bigintLiteral = BigInt(123456789012345678901234567890); // Number that represents a large integer

console.log(`
  Number

  Number Literals -> ${numberLiteral}
  Point Literals -> ${pointLiteral}
  Hexadecimal Literals -> ${hexLiteral}
  Binary Literals -> ${binaryLiteral}
  Octal Literals -> ${octalLiteral}
  BigInt Literals -> ${bigintLiteral}
  `);
//======================================================================================
// String
let doubleQuotesStringLiterals = "Hello World!"; // String that represents a double-quoted string
let singleQuotesStringLiterals = "Hello World!"; // String that represents a single-quoted string
let templateStringLiterals = `Hello World!`; // String that represents a template string

console.log(`
  String

  Double Quotes String Literals -> ${doubleQuotesStringLiterals}
  Single Quotes String Literals -> ${singleQuotesStringLiterals}
  Template String Literals -> ${templateStringLiterals}
  `);
//======================================================================================
// Boolean
let booleanLiteral = true; // or false

console.log(`
  Boolean

  Boolean Literals -> ${booleanLiteral}
  `);
//======================================================================================
// Null and Undefined
let nullLiteral = null; // Represents the absence of any object value
let undefinedLiteral = undefined; // Represents the absence of a value

console.log(`
  Null and Undefined

  Null Literal -> ${nullLiteral}
  Undefined Literal -> ${undefinedLiteral}
  `);
//======================================================================================
// Symbol
let symbolLiteral = Symbol("description"); // Unique and immutable primitive value
// we use toString to convert the symbol to a string representation
console.log(`
  Symbol

  Symbol Literal -> ${symbolLiteral.toString()}
  `);
//======================================================================================
// Object

let user = {
  name: "John",
  age: 30,
};
// we use JSON.stringify to convert the object to a string representation
// No .JSON.stringify() it will return [object Object]
console.log(`
  Object

  User Object -> ${JSON.stringify(user)}
  User Object get name -> ${user.name}
  User Object get age -> ${user.age}
  `);
//======================================================================================
// Array
let arrayLiteral = [1, 2, 3]; // Array that represents a list of values
// [0] it represent the indexes of the array elements
/*
   0       1       2       3       4       <- Indexes
[value1, value2, value3, value4, value5]   <- Values

*/
console.log(`
  Array

  Array Literal -> ${arrayLiteral[0]}
  `);
//======================================================================================
// Template Literal
let templateLiteral = `Hello, ${user.name}!`; // We used the Object Value to get the name property of the user object
console.log(`
  Template Literal

  Template Literal -> ${templateLiteral}
  `);
//======================================================================================