// Symmetric difference

// Return elements from two sets which are in either of the two but not in both
// Example : A = [1, 2, 3] and B = [2, 3, 4] ==> A ^ B = [1, 4]
// Should work for two or more sets

function sym(...sets) {
	const result = sets.reduce((arr1, arr2) => {
		const joined = arr1.concat(arr2);
		const duplicates1 = arr1.filter((elem) => arr2.indexOf(elem) !== -1);
		const duplicates2 = arr2.filter((elem) => arr1.indexOf(elem) !== -1);
		const duplicates = duplicates1.concat(duplicates2);
		const filtered = [
			...new Set(joined.filter((el) => duplicates.indexOf(el) === -1)),
		];
		return filtered;
	});
	return result;
}

// Tests
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
console.log(
	sym(
		[3, 3, 3, 2, 5],
		[2, 1, 5, 7],
		[3, 4, 6, 6],
		[1, 2, 3],
		[5, 3, 9, 8],
		[1]
	)
);

/* ****************************************************************** */
