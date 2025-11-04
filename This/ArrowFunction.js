// like others "this" keyword can be used in arrow functions inside the classed

class Person {
  name = "Alice";
  greet = () => {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const alice = new Person();
alice.greet();
