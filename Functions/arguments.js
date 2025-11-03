// Arguments Objects is an Array-like object that contains the arguments passed to a function.

// Example usage:

function sums() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sums(1, 2, 3)); // 6

// Destructuring Arguments Array
function example([a, b, c]) {
  console.log(a, b, c);
}

example([1, 2, 3]);

// Destructuring Arguments Object
function example({ x, y, z }) {
  console.log(x, y, z);
}

example({ x: 1, y: 2, z: 3 });
// Output: 1 2 3

// Accessing individual arguments:
function sum(...numbers /*Spread Operator used to pass multiple arguments */) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  console.log(total);
}
sum(1, 2, 3); // Output: 6
