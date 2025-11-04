// Arrow Function

const greetArrow = (name, callback) => {
  console.log(`Hello, ${name}!`);
  callback(name);
};

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greetArrow("John", greet);


