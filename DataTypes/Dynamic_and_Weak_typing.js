// Dynamic typing allows variables to hold values of different types at different times.

let name = "Sherwin";
console.log(name);
name = 123;
console.log(name);
name = true;
console.log(name);

// Weak typing means that type checking is not strict and can lead to unexpected results.

const result = 42 + "1"; // "421 number coerced to string"
console.log(result);
