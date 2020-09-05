// Reverse a String

// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
	return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // should return a string.
console.log(reverseString("hello")); // should become "olleh".
console.log(reverseString("Howdy")); // should become "ydwoH".
console.log(reverseString("Greetings from Earth")); // should return "htraE morf sgniteerG".
