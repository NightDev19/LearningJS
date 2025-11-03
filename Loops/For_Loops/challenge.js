/*

Challenge: Separate all the odd and even numbers using for loop

Steps
1. Make a for loop that runs up to 10
2. Inside the loop, check if the current number is odd or even
3. If it's odd, console.log the odd numbers and odd
4. If it's even, console.log the even numbers and even

*/

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i, "even");
  } else {
    console.log(i, "odd");
  }
}
