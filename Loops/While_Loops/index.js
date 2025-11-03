// while Loop used when you want to repeat a block of code as long as a condition is true.

let i = 0; // Initial value of i
while (i < 5 /*Condition */) {
  console.log(i);
  i++; // Increment
}

// as you can see this loop has a different syntax than the for loop
// while loop is more flexible and can be used in more complex scenarios
// for example, you can use a while loop to iterate over an array
// while loop is also useful when you don't know how many times you need to repeat a block of code

//break and continue

let k = 0;
console.log("Break with Continue");
while (k < 11) {
  if (k % 2 === 0) {
    k++;
    continue;
  }
  if (k === 7) {
    break;
  }
  console.log(k);
  k++;
}
