// Slice and Splice

/* You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n) {
    const arr = [...arr2];
    arr.splice(n, 0, ...arr1);
    return arr;
}

// Tests

console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // should return [4, 1, 2, 3, 5].
console.log(frankenSplice([1, 2], ["a", "b"], 1)); // should return ["a", 1, 2, "b"].
console.log(
	frankenSplice(
		["claw", "tentacle"],
		["head", "shoulders", "knees", "toes"],
		2
	)
); // should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
// All elements from the first array should be added to the second array in their original order.
// The first array should remain the same after the function runs.
// The second array should remain the same after the function runs.
