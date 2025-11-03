/*
Challenge: Count Odd Numbers Until a Stop Value

Objective:
Write a program that uses a while loop to iterate through an array of numbers and count how many odd numbers appear before a specific stop value.

Requirements

- Use a while loop, not a for loop.
- Use both continue and break statements.
- The loop must run in O(n) time (single pass).
- The stop value ends the loop immediately when found.
*/

// Challenge: Count odd numbers before stopValue
let numbers = [2, 5, 8, 11, 13, 7, 9, 3]; // Sample data
let stopValue = 7; // Stop counting when this number appears
let count = 0;
let i = 0;
while (i < numbers.length) {
  console.log(`i=${i}, value=${numbers[i]}`); // For Debug only
  if (numbers[i] % 2 === 0) {
    console.log("  -> even, skipping"); // For Debug only
    i++;
    continue;
  }
  if (numbers[i] === stopValue) {
    console.log("  -> stopValue found, breaking"); // For Debug only
    break;
  }
  console.log("  -> odd, counting"); // For Debug only
  count++;
  i++;
}
console.log(`Total odd numbers before ${stopValue}: ${count}`);
