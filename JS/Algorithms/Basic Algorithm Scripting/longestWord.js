// Find the Longest Word in a String

/* Return the length of the longest word in the provided sentence.

Your response should be a number. */

function findLongestWordLengthMe(str) {
	const words = str.split(" ");
	let max = 0;
	words.forEach((word) => {
		if (word.length > max) {
			max = word.length;
		}
	});
	return max;
}

function findLongestWordLength(s) {
	return s.split(" ").reduce(function (x, y) {
		return Math.max(x, y.length);
	}, 0);
}

console.log(
	findLongestWordLength("The quick brown fox jumped over the lazy dog")
); // should return a number.
console.log(
	findLongestWordLength("The quick brown fox jumped over the lazy dog")
); // should return 6.
console.log(findLongestWordLength("May the force be with you")); // should return 5.
console.log(findLongestWordLength("Google do a barrel roll")); // should return 6.
console.log(
	findLongestWordLength(
		"What is the average airspeed velocity of an unladen swallow"
	)
); // should return 8.
console.log(
	findLongestWordLength(
		"What if we try a super-long word such as otorhinolaryngology"
	)
); // should return 19.
