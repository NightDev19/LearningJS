// Fields can be define directly in the class for readability and consistency.

class Rectangle1 {
  height = 0; // Public Field
  width; // declared but undefined
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Private Fields
/*
Private members starts with # and are accessible only inside the class
*/

class Rectangle2 {
  #height = 0;
  #width;
  constructor(h, w) {
    this.#height = h;
    this.#width = w;
  }

  #calculateArea() {
    // Private method
    return this.#height * this.#width;
  }

  showArea() {
    console.log(`Area ${this.#calculateArea()}`);
  }
}

const rect = new Rectangle2(10, 20);
rect.showArea();

// Using Inheritance
class Square extends Rectangle2 {
  constructor(side) {
    super(side, side);
  }
}

const square = new Square(10);
square.showArea();
