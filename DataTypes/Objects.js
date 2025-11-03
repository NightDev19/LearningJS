// Objects are mutable collections of key-value pairs, passed by reference and can hold complex data types.

/*
Properties:
- Data Properties     → Store values with attributes (key, value, writable, enumerable, configurable)
- Accessor Properties → Define Getters and Setters for properties
- Prototype Chain     → Enables inheritance and delegation of properties/methods
*/

// Data Properties
const DataProperties = {
  name: "John",
  lastName: "",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

// Accessor Properties
const AccessorProperties = {
  get fullName() {
    return `${this.name} ${this.lastName}`;
  },
  set fullName(value) {
    const [name, lastName] = value.split(" ");
    this.name = name;
    this.lastName = lastName;
  },
};

// Establish Prototype Chain properly
Object.setPrototypeOf(AccessorProperties, DataProperties);
const PrototypeChain = Object.create(AccessorProperties);

// Usage example
PrototypeChain.fullName = "John Doe";
console.log(PrototypeChain.fullName); // John Doe
console.log(PrototypeChain.address.city); // Anytown
