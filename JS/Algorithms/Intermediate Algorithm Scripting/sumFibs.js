// Sum All Odd Fibonacci Numbers

/*
Given a positive integer num, return the sum of
all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1.
Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci
numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function fibonacci(n) {
	const arr = [1, 1];
	while (arr[arr.length - 1] < n) {
		arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	}
	return arr;
}

function sumFibs(num) {
	// Create Fibonacci array under num
	const fib = fibonacci(num);
	// Filter the array with only odd numbers and reduce it to its sum
	return fib
		.filter((number) => number % 2 === 1 && num >= number)
		.reduce((prev, curr) => prev + curr, 0);
}

// Tests
console.log(sumFibs(1)); // should return a number.
console.log(sumFibs(1000)); // should return 1785.
console.log(sumFibs(4000000)); // should return 4613732.
console.log(sumFibs(4)); // should return 5.
console.log(sumFibs(75024)); // should return 60696.
console.log(sumFibs(75025)); // should return 135721.
