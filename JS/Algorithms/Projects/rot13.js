// Caesars Cipher

/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation),
but do pass them on.
*/

function rot13(str) {
	const letters = str.split("");
	const decodedStr = letters
		.map((letter) => {
			const letterCode = letter.charCodeAt(0);
			const differenceFromA = letterCode - "A".charCodeAt(0);
			if (differenceFromA >= 0 && letterCode <= "Z".charCodeAt(0)) {
				return differenceFromA % 26 < 13
					? String.fromCharCode(
							"Z".charCodeAt(0) - 13 + (differenceFromA + 1)
					  )
					: String.fromCharCode(letterCode - 13);
			}
			return letter;
		})
		.join("");
	return decodedStr;
}

// Tests
console.log(rot13("SERR PBQR PNZC")); // should decode to FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // should decode to FREE PIZZA!
console.log(rot13("SERR YBIR?")); // should decode to FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
