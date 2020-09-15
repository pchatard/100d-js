// Sorted Union

/*
Write a function that takes two or more arrays and returns a new array
of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order,
but with no duplicates in the final array.

The unique numbers should be sorted by their original order,
but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUniqueMe(...arrs) {
	const unique = [];
	arrs.forEach((arr) => {
		arr.forEach((value) => {
			const index = unique.findIndex((el) => el === value);
			if (index === -1) {
				unique.push(value);
			}
		});
	});
	return unique;
}

function uniteUnique(...arrays) {
	//make an array out of the given arrays and flatten it (using the spread operator)
	const flatArray = [].concat(...arrays);

	// create a Set which clears any duplicates since it's a regulat set and not a multiset
	return [...new Set(flatArray)];
}

// Tests

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].
