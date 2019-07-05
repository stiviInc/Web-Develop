/*
    Create an object with the literal object notation (normal notation) with the following characteristics:
        1.- radius property can be read and write
        2.- area property only can be read!
*/

const circle = {
  radius: 1,
  color: "white",
  get area() {
    return this.radius * 2;
  },
  set changeColor(col) {
    this.color = col;
  },
  get getColor() {
    return this.color;
  }
};

circle.changeColor = "black";
console.log(circle.getColor);
