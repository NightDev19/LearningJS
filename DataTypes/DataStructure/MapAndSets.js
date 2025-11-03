// Map and Sets
// Map
/*
Map is Key-Value Pair
Map is a data structure that stores key-value pairs.
Each key is unique and is used to access its corresponding value.
Maps are useful when you need to associate data with a specific identifier.

Methods
- set(key, value): Adds a new key-value pair to the map. || Also it updates the value if the key already exists.
- get(key): Retrieves the value associated with the given key.
- has(key): Checks if the map contains the given key.
- delete(key): Removes the key-value pair associated with the given key.
- clear(): Removes all key-value pairs from the map.
- size(): Returns the number of key-value pairs in the map.
*/

const user = new Map([
  ["name", "John"],
  ["age", 30],
  ["email", "john@example.com"],
]);
// Add
user.set("address", "123 Main St");
user.set("phone", "555-1234");
console.log(
  `
   Added address and phone
   Name: ${user.get("name")}
   Age: ${user.get("age")}
   Email: ${user.get("email")}
   Address: ${user.get("address")}
   Phone: ${user.get("phone")}`,
);
// Edit
user.set("age", 31);
console.log(
  `
   Updated age
   Name: ${user.get("name")}
   Age: ${user.get("age")}
   Email: ${user.get("email")}
   Address: ${user.get("address")}
   Phone: ${user.get("phone")}`,
);

// Check
const hasage = user.has("age");
console.log(`Has age: ${hasage}`);
// Delete
user.delete("age");
console.log(
  `
   Deleted age
   Name: ${user.has("name")}
   Age: ${user.has("age")}
   Email: ${user.has("email")}
   Address: ${user.has("address")}
   Phone: ${user.has("phone")}`,
);
// Delete All
user.clear();
console.log(
  `
   Cleared map
   Name: ${user.has("name")}
   Age: ${user.has("age")}
   Email: ${user.has("email")}
   Address: ${user.has("address")}
   Phone: ${user.has("phone")}`,
);
// Size
console.log(
  `
   Size of map: ${user.size}`,
);

// Set
/*
Set is a collection of unique Values

Methods
- add(value): Adds a new value to the set.
- has(value): Checks if the set contains the given value.
- delete(value): Removes the given value from the set.
- clear(): Removes all values from the set.
- size(): Returns the number of values in the set.
*/

const set = new Set([
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
]);

// Add
set.add("pear");
set.add("pear");

// Delete
set.delete("banana");

// Check
const hasApple = set.has("apple");
console.log(`Has apple: ${hasApple}`);

// Size
const size = set.size;
console.log(`Size: ${size}`);

// Clear
set.clear();
console.log(`Size after clear: ${set.size}`);
