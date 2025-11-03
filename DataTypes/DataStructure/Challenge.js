/*
Challenge

Implement a function that takes an array of numbers and returns the sum of all the numbers.

Steps
1. Initialize a variable to store the sum.
2. Iterate through the array.
3. Add each number to the sum.
4. Return the sum.

*/

const arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach((num) => {
  sum += num;
});
console.log(sum);
