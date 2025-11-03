// Map and Sets
// Map
/*
Map is Key-Value Pair
Map is a data structure that stores key-value pairs.
Each key is unique and is used to access its corresponding value.
Maps are useful when you need to associate data with a specific identifier.

Methods
- set(key, value): Adds a new key-value pair to the map.
- get(key): Retrieves the value associated with the given key.
- has(key): Checks if the map contains the given key.
- delete(key): Removes the key-value pair associated with the given key.
- clear(): Removes all key-value pairs from the map.
- size: Returns the number of key-value pairs in the map.
- keys(): Returns an iterator for the keys in the map.
- values(): Returns an iterator for the values in the map.
- entries(): Returns an iterator for the key-value pairs in the map.

*/

const user = new Map([
  ["name", "John"],
  ["age", 30],
  ["email", "john@example.com"],
]);
console.log(
  `Name: ${user.get("name")}, Age: ${user.get("age")}, Email: ${user.get("email")}`,
);

// Set
