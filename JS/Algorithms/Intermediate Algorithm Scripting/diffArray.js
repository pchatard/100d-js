// Diff Two Arrays

/*
Compare two arrays and return a new array with any items
only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
	const result = [...arguments].reduce((arr1, arr2) => {
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
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // should return an array.
console.log(
	diffArray(
		["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
		["diorite", "andesite", "grass", "dirt", "dead shrub"]
	)
); // should return ["pink wool"].
console.log(
	diffArray(
		["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
		["diorite", "andesite", "grass", "dirt", "dead shrub"]
	)
); // should return an array with one item.
console.log(
	diffArray(
		["andesite", "grass", "dirt", "pink wool", "dead shrub"],
		["diorite", "andesite", "grass", "dirt", "dead shrub"]
	)
); // should return ["diorite", "pink wool"].
console.log(
	diffArray(
		["andesite", "grass", "dirt", "pink wool", "dead shrub"],
		["diorite", "andesite", "grass", "dirt", "dead shrub"]
	)
); // should return an array with two items.
console.log(
	diffArray(
		["andesite", "grass", "dirt", "dead shrub"],
		["andesite", "grass", "dirt", "dead shrub"]
	)
); // should return [].
console.log(
	diffArray(
		["andesite", "grass", "dirt", "dead shrub"],
		["andesite", "grass", "dirt", "dead shrub"]
	)
); // should return an empty array.
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // should return [4].
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // should return an array with one item.
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); // should return ["piglet", 4].
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); // should return an array with two items.
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); // should return ["snuffleupagus", "cookie monster", "elmo"].
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); // should return an array with three items.
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); // should return [1, "calf", 3, "piglet", 7, "filly"].
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); // should return an array with six items.
