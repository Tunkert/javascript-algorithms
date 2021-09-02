class Roots {
  constructor(number1) {
    this.number1 = number1;
  }
  // Getters
  get secondRoot() {
    return this.squareRoot();
  }

  get thirdRoot() {
    return this.cubeRoot();
  }

  // Methods
  // Square root method
  squareRoot() {
    let unSquare = "This is not a perfect square.";
    for(let i = 0; i < this.number1; i++) {
      if (i * i === this.number1) {
        return i;
      }
    }
    return unSquare;
  }

  // Cube root Method
  cubeRoot() {
      let unCube = "This is not a perfect cube.";
      for(let j = 0; j < this.number1; j++) {
          if (j * j * j === this.number1) {
              return j;
          }
      }
      return unCube;
  }
}

isSquare = new Roots(8);

console.log(isSquare.secondRoot);

isCube = new Roots(27);

console.log(isCube.thirdRoot);
