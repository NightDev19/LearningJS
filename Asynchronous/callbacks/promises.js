// Promises are a way to handle asynchronous operations in JavaScript.
// They represent a value that may be available now, or in the future, or never.
// Promises can be in one of three states: pending, fulfilled, or rejected.
// 
// Example: Using a Promise to handle asynchronous operations

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'John Doe' };
            resolve(data); // Resolve the promise with the data
        }, 2000); // Simulating a delay of 2 seconds
    });
}

function processData(data) {
    console.log('Data received:', data);
}

// Using the fetchData function with a promise
fetchData()
    .then(processData) // Handle the resolved value
    .catch(error => console.error('Error:', error)); // Handle any errors

// Output after 2 seconds: Data received: { id: 1, name: 'John Doe' }
// This demonstrates how promises can be used to handle asynchronous operations in JavaScript.
// Promises provide a cleaner and more manageable way to work with asynchronous code compared to callbacks.
// They allow chaining of operations and better error handling, making the code more readable and maintainable.
// Promises are a fundamental part of modern JavaScript, especially with the rise of async/await syntax.
// Promises are widely used in APIs, libraries, and frameworks to handle asynchronous operations.
// They are a key feature of JavaScript's asynchronous programming model.

// Resolve and Reject are methods used to control the state of a promise.
// Resolve is called when the asynchronous operation completes successfully, while Reject is called when it fails.
// 
// Example: Using resolve and reject in a promise

function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false; // Change this to true to simulate an error
            if (error) {
                reject('Failed to fetch data'); // Reject the promise with an error message
            } else {
                const data = { id: 1, name: 'John Doe' };
                resolve(data); // Resolve the promise with the data
            }
        }, 2000); // Simulating a delay of 2 seconds
    });
}

// Using the fetchDataWithError function with a promise
fetchDataWithError()
    .then(processData) // Handle the resolved value
    .catch(error => console.error('Error:', error)); // Handle any errors

// Output after 2 seconds: Data received: { id: 1, name: 'John Doe' }
// If error is true, it will output: Error: Failed to fetch data
// This demonstrates how resolve and reject methods are used to control the state of a promise.
// They allow you to handle both successful and failed asynchronous operations in a structured way.
// Using resolve and reject makes it clear what happens when the operation succeeds or fails, improving code clarity and maintainability.


// Async/Await is a syntax that allows you to write asynchronous code in a more synchronous style.
// It is built on top of promises and makes the code easier to read and maintain.
// 
// Example: Using async/await to handle asynchronous operations

async function fetchDataAsync() {
    const data = await fetchData(); // Wait for the promise to resolve
    return data; // Return the resolved value
}

async function main() {
    try {
        const data = await fetchDataAsync(); // Call the async function and wait for it to complete
        processData(data); // Process the received data
    } catch (error) {
        console.error('Error:', error); // Handle any errors
    }
}

// Start the main function
main();

// Output after 2 seconds: Data received: { id: 1, name: 'John Doe' }
// This demonstrates how async/await can be used to handle asynchronous operations in JavaScript.
// Async/await provides a more straightforward way to work with promises, making the code look synchronous while still being asynchronous.
// It simplifies error handling and makes the code more readable, especially when dealing with multiple asynchronous operations.
// Async/await is widely used in modern JavaScript development, making it easier to write and maintain asynchronous code.
// It is a powerful feature that enhances the developer experience and improves code clarity.

