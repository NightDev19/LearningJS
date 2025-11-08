// Synchronous Programming
/*
An operation is a task that is executed in a single thread, one at a time.
*/

// Example

const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting);

/*
Execution Order

 1. Declare variables
 2. Assign values to variables
 3. Execute console.log()
 Output :
 Hello, John!
*/

// For Example with Function

function greet(name) {
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
}

greet("John");

// A long running Synchronous Function

/*
It may takes too long, it blocks everything else - including UI interaction
*/

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * 1000000);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

/*
DOM for HTML

document.querySelector('#generate').addEventListener('click', () => {
  const primes = generatePrimes(100);
  console.log(`Generated ${primes.length} primes`);
});

*/
primes = generatePrimes(100000);
console.log(primes);
