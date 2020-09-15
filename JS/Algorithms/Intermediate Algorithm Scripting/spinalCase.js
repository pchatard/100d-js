// Spinal Tap Case

/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCaseMe(str) {
	const regexSpliter = /\s+|_+/g;
	const newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
	const words = newStr.replace(regexSpliter, "-").toLowerCase();
	return words;
}

function spinalCase(str) {
	return str
		.split(/\s|_|(?=[A-Z])/)
		.join("-")
		.toLowerCase();
}

// Tests
console.log(spinalCase("This Is Spinal Tap")); // should return "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap")); // should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show")); // should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh")); // should return "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things")); // should return "all-the-small-things".
