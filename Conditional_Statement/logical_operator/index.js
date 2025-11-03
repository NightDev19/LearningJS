// Conditional Logic with &&, ||, ??, and !

let x = 15; // sample value

// Executes only if x > 10
x > 10 && console.log("x is large");

// Executes only if x < 5 is false
x < 5 || console.log("x is not small");

// Uses "Default" if userInput is null or undefined
let userInput = null;
let value = userInput ?? "Default";

console.log("value:", value);

x = 0; // lets change the value of x to 0
// Executes only if x is falsy (0, null, undefined, false, "")
!x && console.log("x is false");
