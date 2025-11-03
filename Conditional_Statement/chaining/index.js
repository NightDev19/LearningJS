// Example: Optional Chaining with Conditional Statement

// Define an object with nested properties
// This represents a user with a name, profile details, and address
const user = {
  name: "Sherwin",
  profile: {
    age: 22,
    address: {
      city: "Manila",
      country: "Philippines",
    },
  },
};

// Conditional check using optional chaining (?.)
// The expression safely checks if `user` exists,
// then `profile` exists, and finally reads the `age` property.
// If any of those are undefined or null, it stops the evaluation
// and returns `undefined` instead of throwing an error.

if (user?.profile?.age > 18) {
  // If age exists and is greater than 18, log this message
  console.log(`${user.name} is an adult.`);
} else {
  // Otherwise, handle missing data or underage case
  console.log(`${user.name} is not an adult or profile info missing.`);
}
