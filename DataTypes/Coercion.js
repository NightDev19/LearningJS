// Coercion converts types in certain situations

// Primitive Types
/*
In primitive types, coercion is automatic and happens when JavaScript needs to convert a value from one type to another.
This can happen when performing arithmetic operations, comparisons, or when passing values to functions.

for Example:
- When adding a number and a string, JavaScript will convert the number to a string and concatenate them.
- When comparing a number and a string, JavaScript will convert the string to a number and then compare them.
- When passing a value to a function, JavaScript will convert the value to the expected type.

*/

let stringToNumber = "123" * 2;
console.log(stringToNumber);

const stringCoercion = String(123);
console.log(stringCoercion);

const numberCoercion = Number("123");
console.log(numberCoercion);
