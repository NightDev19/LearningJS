// if statement used to check if a condition is true
/*
if (condition) {
  // code to execute if condition is true
}

for example
*/
let age = 18;
let gender = "male";
if (age >= 18) {
  console.log("You are an adult.");
}

// also it can be nested

if (age >= 18) {
  // add new condition
  if (gender === "male") {
    console.log("You are a male adult.");
  }
}
