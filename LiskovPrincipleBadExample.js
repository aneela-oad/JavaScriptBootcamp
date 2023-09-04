class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  setWidth(width) {
    return (this.width = width);
  }
  setHeight(height) {
    return (this.height = height);
  }

  setArea() {
    return this.height * this.width;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
    console.log("---------------------");
    console.log("width and height of square: " + this.width, this.height);
  }
  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}
function increaseRectangleWidth(shape) {
  shape.setWidth(shape.width + 1);
  // console.log(`increased width ${shape.setWidth(shape.width + 1)}`);
}

const sqr = new Square(4, 4);
const rect = new Rectangle(4, 4);

increaseRectangleWidth(sqr);
increaseRectangleWidth(rect);

console.log("Area of Square: " + sqr.setArea());
console.log("Area of Rectangle: " + rect.setArea());
