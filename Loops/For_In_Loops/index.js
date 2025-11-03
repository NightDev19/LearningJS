// for...in loop used to iterate over the properties of an object

data = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in data) {
  console.log(key + ": " + data[key]); // unlike maps that use key-value pairs, for...in loop iterates over the properties of an object
}

