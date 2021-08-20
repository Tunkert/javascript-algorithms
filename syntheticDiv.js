function syntheticDiv(constDiv, a, b, c, d) {
    let multipleOne = constDiv * a;
    let sumTwo = b + multipleOne;
    let multipleTwo = constDiv * sumTwo;
    let sumThree = multipleTwo + c;
    let multipleThree = constDiv * sumThree;
    let remainder = multipleThree + d;


    console.log("The new polynomial is " + a + "x^2 + " + sumTwo +
    "x + " + sumThree + " with a remainder of " + remainder + ".");
}

syntheticDiv(2, 1, -1, -14, 24);