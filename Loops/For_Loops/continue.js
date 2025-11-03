// Continue used when you want to skip the current iteration and move to the next one.
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i, "is odd"); // Print odd numbers
}
