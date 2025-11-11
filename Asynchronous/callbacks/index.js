// Callback us a function passed as an Argument to another function, to be executed later
// Example: Using a callback to handle asynchronous operations

function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' };
        callback(data);
    }, 2000); // Simulating a delay of 2 seconds
}

function processData(data) {
    console.log('Data received:', data);
}

// Using the fetchData function with a callback
fetchData(processData);

// Output after 2 seconds: Data received: { id: 1, name: 'John Doe' }
// This demonstrates how callbacks can be used to handle asynchronous operations in JavaScript.
// Callbacks are essential for managing asynchronous code execution, allowing you to define what should happen once the data is ready.