// Convert HTML Entities

/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
	const matching = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&apos;",
	};
	return str
		.split("")
		.map((char) => matching[char] || char)
		.join("");
}

// Tests
console.log(convertHTML("Dolce & Gabbana")); // should return "Dolce &amp; Gabbana".
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // should return "Hamburgers &lt; Pizza &lt; Tacos".
console.log(convertHTML("Sixty > twelve")); // should return "Sixty &gt; twelve".
console.log(convertHTML('Stuff in "quotation marks"')); // should return "Stuff in &quot;quotation marks&quot;".
console.log(convertHTML("Schindler's List")); // should return "Schindler&apos;s List".
console.log(convertHTML("<>")); // should return "&lt;&gt;".
console.log(convertHTML("abc")); // should return "abc".
