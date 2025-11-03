// Array is a data structure that stores a collection of elements of the same type.
// Ordered list with dynamic size and constant time complexity for insertion and deletion at the end.

/*
Methods
push()    -> Adds an element to the end of the array.
pop()     -> Removes the last element from the array.
map()     -> Creates a new array with the results of calling a provided function on every element in the calling array.
filter()  -> Creates a new array with all elements that pass the test implemented by the provided function.
forEach() -> Executes a provided function once for each array element.
*/

let arr = [];

// push(element)
arr.push(1);
arr.push(2);
arr.push(3);
console.log(`Added 1, 2, and 3 to the array: ${arr}`);

// pop()
arr.pop();
console.log(`Removed the last element: ${arr}`);

// map(callback)
const doubled = arr.map((element) => element * 2);
console.log(`Doubled elements: ${doubled}`);

// filter(callback)
const even = arr.filter((element) => element % 2 === 0);
console.log(`Filtered even numbers: ${even}`);
console.log(`Original array after filtering: ${arr}`);

// forEach(callback)
console.log("Elements in the array using forEach:");
arr.forEach((element) => console.log(element));
