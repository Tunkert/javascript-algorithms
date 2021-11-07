for (let i = 0; i < 100; i++) {
    const problemHeading = document.querySelectorAll('h3')[i];
    const problemParagraph = document.querySelectorAll('p')[i + 2];
    const problemSolution = document.querySelectorAll('li')[i];

    const coeffOne = Math.floor(Math.random() * 10 + 1);
    const coeffTwo = Math.floor(Math.random() * 10 + 1);
    const coeffThree = Math.floor(Math.random() * 10 + 1);
    const constOne = Math.floor(Math.random() * 10 + 1);
    const constTwo = Math.floor(Math.random() * 10 + 1);
    const powerOne = Math.floor(Math.random() * 10 + 1);
    const powerTwo = Math.floor(Math.random() * 10 + 1);
    const powerThree = Math.floor(Math.random() * 10 + 1);

    problemHeading.innerHTML = `Problem ${i + 1}`;
    problemParagraph.innerHTML = `Simplify: (${coeffOne}x<sup>${powerOne}</sup>`;
    problemParagraph.innerHTML += ` + ${constOne})(${coeffTwo}x<sup>${powerTwo}</sup>`;
    problemParagraph.innerHTML += ` + ${coeffThree}x<sup>${powerThree}</sup> `;
    problemParagraph.innerHTML += `+ ${constTwo})`;

    problemSolution.innerHTML = `${coeffOne * coeffTwo}x<sup>${powerOne + powerTwo}</sup>`;
    problemSolution.innerHTML += ` + ${coeffOne * coeffThree}x<sup>${powerOne + powerThree}</sup>`;
    problemSolution.innerHTML += ` + ${coeffOne * constTwo}x<sup>${powerOne}</sup>`;
    problemSolution.innerHTML += ` + ${constOne * coeffTwo}x<sup>${powerTwo}</sup>`;
    problemSolution.innerHTML += ` + ${constOne * coeffThree}x<sup>${powerThree}</sup>`;
    problemSolution.innerHTML += ` + ${constOne * constTwo}`;
    if (powerOne + powerTwo === powerOne + powerThree && powerOne === powerTwo && powerOne === powerThree) {
        problemSolution.innerHTML += `, simplifies to: ${coeffOne * coeffTwo + coeffOne * coeffThree}`;
        problemSolution.innerHTML += `x<sup>${powerOne + powerTwo}</sup> + `;
        problemSolution.innerHTML += `${coeffOne * constTwo + constOne * coeffTwo + constOne * coeffThree}`;
        problemSolution.innerHTML += `x<sup>${powerOne}</sup> + ${constOne * constTwo}`;
    } else if (powerOne + powerTwo === powerOne + powerThree && powerOne === powerTwo) {
        problemSolution.innerHTML += `, simplifies to: ${coeffOne * coeffTwo + coeffOne * coeffThree}`;
        problemSolution.innerHTML += `x<sup>${powerOne + powerTwo}</sup> + `;
        problemSolution.innerHTML += `${coeffOne * constTwo + constOne * coeffTwo}x<sup>${powerOne}`;
        problemSolution.innerHTML += `</sup> + ${constOne * coeffThree}x<sup>${powerThree}</sup>`;
        problemSolution.innerHTML += ` + ${constOne * constTwo}`;
    } else if (powerOne + powerTwo === powerOne + powerThree) {
        problemSolution.innerHTML += `, simplifies to: ${coeffOne * coeffTwo + coeffOne * coeffThree}`;
        problemSolution.innerHTML += `x<sup>${powerOne + powerTwo}</sup> + `;
        problemSolution.innerHTML += `${coeffOne * constTwo}x<sup>${powerOne}</sup>`;
        problemSolution.innerHTML += ` + ${constOne * coeffTwo}x<sup>${powerTwo}</sup>`;
        problemSolution.innerHTML += ` + ${constOne * coeffThree}x<sup>${powerThree}</sup>`;
        problemSolution.innerHTML += ` + ${constOne * constTwo}`;
    }  
}
