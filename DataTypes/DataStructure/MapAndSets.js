// Challenge: Implement Map and Set in JavaScript
// ----------------------------------------------
// Demonstrates how to use Map and Set to manage data effectively.
// Includes adding, updating, retrieving, deleting, checking, and clearing operations.

// -----------------------------
// Map Implementation
// -----------------------------
/*
Map is a key-value pair data structure.
Each key is unique and used to access its corresponding value.
Maps are useful for associating data with specific identifiers.

Methods:
- set(key, value): Adds or updates a key-value pair in the Map.
- get(key): Retrieves the value associated with the given key.
- has(key): Checks if the Map contains the given key.
- delete(key): Removes the specified key-value pair.
- clear(): Removes all key-value pairs from the Map.
- size: Returns the number of entries in the Map.
*/

// 1. Create a new Map with user information
const user = new Map([
  ["name", "John"],
  ["age", 30],
  ["email", "john@example.com"],
]);
console.log("Initial user data:");
console.log(user);

// 2. Add new key-value pairs
user.set("address", "123 Main St");
user.set("phone", "555-1234");
console.log(`
Added address and phone:
Name: ${user.get("name")}
Age: ${user.get("age")}
Email: ${user.get("email")}
Address: ${user.get("address")}
Phone: ${user.get("phone")}
`);

// 3. Update an existing key
user.set("age", 31);
console.log(`
Updated age:
Name: ${user.get("name")}
Age: ${user.get("age")}
Email: ${user.get("email")}
Address: ${user.get("address")}
Phone: ${user.get("phone")}
`);

// 4. Check if a key exists
const hasAge = user.has("age");
console.log(`Has age: ${hasAge}`);

// 5. Delete a key-value pair
user.delete("age");
console.log(`
Deleted age:
Has name: ${user.has("name")}
Has age: ${user.has("age")}
Has email: ${user.has("email")}
Has address: ${user.has("address")}
Has phone: ${user.has("phone")}
`);

// 6. Get size of the Map
console.log(`Map size: ${user.size}`);

// 7. Iterate through the Map
console.log("Iterating over user entries:");
user.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// 8. Clear all entries
user.clear();
console.log(`Cleared all entries. Map size: ${user.size}`);

// -----------------------------
// Set Implementation
// -----------------------------
/*
Set is a collection of unique values.
Each value can only occur once, making it ideal for removing duplicates.

Methods:
- add(value): Adds a new value to the Set.
- has(value): Checks if the Set contains the given value.
- delete(value): Removes the specified value from the Set.
- clear(): Removes all values from the Set.
- size: Returns the number of values in the Set.
*/

// 1. Create a new Set with initial values
const fruits = new Set([
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "apple", // Duplicate values are ignored
  "banana",
]);

console.log("Initial Set values:");
console.log(fruits);

// 2. Add new values
fruits.add("pear");
fruits.add("pear"); // Duplicate ignored

// 3. Delete a value
fruits.delete("banana");

// 4. Check if a value exists
const hasApple = fruits.has("apple");
console.log(`Has apple: ${hasApple}`);

// 5. Get size of the Set
console.log(`Set size: ${fruits.size}`);

// 6. Iterate over Set values
console.log("Iterating over Set values:");
fruits.forEach((value) => console.log(value));

// 7. Clear all values
fruits.clear();
console.log(`Set size after clear: ${fruits.size}`);
