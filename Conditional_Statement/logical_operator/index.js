//Conditional Logic with &&, ||, and ??

let x = 15; // sample value

// Runs only if x > 10
x > 10 && console.log("x is large");     

// Runs only if x < 5 is false
x < 5 || console.log("x is not small");  

// Uses "Default" if userInput is null or undefined
let userInput = null;
let value = userInput ?? "Default";      

console.log("value:", value);
