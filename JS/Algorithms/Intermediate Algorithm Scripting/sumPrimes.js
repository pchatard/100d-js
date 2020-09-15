// Sum All Primes

/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
For example, 2 is a prime number because it is only divisible by 1 and 2.
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function primes(n) {
	const arr = [2];
	for (let i = 3; i <= n; i++) {
		for (let j = 2; j <= i; j++) {
			if (i % j !== 0) {
				continue;
			} else if (i === j) {
				arr.push(i);
			} else {
				break;
			}
		}
	}
	return arr;
}

function sumPrimes(num) {
	return primes(num).reduce((prev, curr) => prev + curr, 0);
}

// Tests
console.log(sumPrimes(10)); // should return a number.
console.log(sumPrimes(10)); // should return 17.
console.log(sumPrimes(977)); // should return 73156.
