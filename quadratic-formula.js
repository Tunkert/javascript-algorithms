function quadraticFormula(a, b, c) {
  if (b * b - 4 * a * c < 0) {
    console.log("There are no real solutions.");
  } else if (b * b - 4 * a * c === 0) {
    var solution = (-1 * b) / (2 * a);
    console.log("The solution is x = " + solution);
  } else {
    var solution1 = (-1 * b + Math.pow(b * b - 4 * a * c, 0.5)) / (2 * a);
    var solution2 = (-1 * b - Math.pow(b * b - 4 * a * c, 0.5)) / (2 * a);
    console.log("The solution with the lower value is x = " + solution2 + ".");
    console.log(
      " The solution with the higher value is x = " + solution1 + "."
    );
  }
}
quadraticFormula(1, 10, 25);
