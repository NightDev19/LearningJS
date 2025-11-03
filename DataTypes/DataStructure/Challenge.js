// Challenge: Sum of All Numbers in an Array
// ------------------------------------------
// A function that takes an array of numbers and returns the total sum of its elements.
// Demonstrates iteration and accumulation using array methods.

/*
Steps
1. Initialize a variable to store the sum.
2. Iterate through the array using forEach().
3. Add each number to the sum.
4. Return the sum.
*/

function getSum(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
}

// Your Code Here
