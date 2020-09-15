// Smallest Common Multiple

/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple
of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3.
The answer here would be 6.
*/

function smallestCommons(arr) {
    const range = [];
    for (let i = Math.max(...arr); i >= Math.min(...arr); i--) {
        range.push(i);
    }
    let sol = range[0];

    for (let i = range[1]; i >= range[range.length - 1]; i--) {
        if (sol % i) {
            sol += range[0];
            i = range[0];
        }
    }
    
	return sol;
}

// Tests
console.log(smallestCommons([1, 5])); // should return a number.
// console.log(smallestCommons([1, 5])); // should return 60.
// console.log(smallestCommons([5, 1])); // should return 60.
// console.log(smallestCommons([2, 10])); // should return 2520.
// console.log(smallestCommons([1, 13])); // should return 360360.
// console.log(smallestCommons([23, 18])); // should return 6056820.
