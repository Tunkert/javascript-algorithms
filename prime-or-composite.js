function primeOrComposite(num) {
    let i = 2;
    while (i < num) {
	let prime = true;
	let k = 2;
	for(k; k < i; k++) {
	    if(i % k === 0 && k !== i) {
		prime = false;
	    }
	    if (!prime) {
		break;
	    }
	}
	if (prime) {
	    console.log(i + " is a prime number.");
	} else {
	    console.log(i + " is a composite number.");
	}
	i++;
    }
}

primeOrComposite(100);

