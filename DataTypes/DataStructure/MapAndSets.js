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
*/

const user = new Map([
  ["name", "John"],
  ["age", 30],
  ["email", "john@example.com"],
]);
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
const hasage = user.has("age");
console.log(`Has age: ${hasage}`);

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

// Set
