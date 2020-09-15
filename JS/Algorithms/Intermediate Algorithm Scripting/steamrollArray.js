// Steamroller

/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
	const flatArr = [];

	function flatten(arg) {
		if (!Array.isArray(arg)) {
			flatArr.push(arg);
		} else {
			for (var a in arg) {
				flatten(arg[a]);
			}
		}
    }
    
    arr.forEach(flatten);
	return flatArr;
}

// Tests
console.log(steamrollArray([[["a"]], [["b"]]])); // should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])); // should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])); // should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])); // should return [1, {}, 3, 4].
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
