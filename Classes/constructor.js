// Constructor is a special method used to initialize an object created from a class.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect);

// constructor that can be called in the methods of the class Rectangle
// Inheritance for example

class Square extends Rectangle {
  constructor(sideLength) {
    // Since we extend the Rectangle class, we need to call its constructor using super()
    super(sideLength, sideLength); // For the constructor of Rectangle class [this.width, this.height] = [sideLength, sideLength]
  }
  // Now we can use the rectangle attributes width and height to calculate area and perimeter of the square
  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }

  getFourSides() {
    return [this.width, this.height, this.width, this.height];
  }
}

const square = new Square(5);
console.log(square);
console.log(square.getFourSides());
