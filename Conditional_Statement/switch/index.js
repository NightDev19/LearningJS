// Unlike if else if else statement, switch statement is used to check multiple conditions and execute different code blocks based on the result of each condition.

let age = 18;

switch (true) {
  case age >= 18:
    console.log("You are an adult.");
    break;
  case age >= 13:
    console.log("You are a teenager.");
    break;
  default:
    console.log("You are a child.");
}

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  default:
    console.log("It's not Monday or Tuesday.");
}

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("It's an apple!");
    break;
  case "banana":
    console.log("It's a banana!");
    break;
  default:
    console.log("It's not an apple or a banana.");
}
