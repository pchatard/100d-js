// Pig Latin

/* Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster,
move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end. */

function translatePigLatin(str) {
	const consonantRgx = /^[b-df-hj-np-tv-z]{1,}/;
    const consonant = str.match(consonantRgx);
	if (consonant) {
		return str.slice(consonant[0].length) + consonant[0] + "ay";
	}
	return str + "way";
}

// Tests
console.log(translatePigLatin("california")); // should return "aliforniacay".
console.log(translatePigLatin("paragraphs")); // should return "aragraphspay".
console.log(translatePigLatin("glove")); // should return "oveglay".
console.log(translatePigLatin("algorithm")); // should return "algorithmway".
console.log(translatePigLatin("eight")); // should return "eightway".
// Should handle words where the first vowel comes in the middle of the word.
console.log(translatePigLatin("schwartz")); // should return "artzschway".
// Should handle words without vowels.
console.log(translatePigLatin("rhythm")); // should return "rhythmay".
