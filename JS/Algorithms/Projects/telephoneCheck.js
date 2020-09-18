// Telephone Number Validator

/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number.
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
Your job is to validate or reject the US phone number based on any combination of the formats provided above.
The area code is required. If the country code is provided, you must confirm that the country code is 1.
Return true if the string is a valid US phone number; otherwise return false.
*/

function telephoneCheckMe(str) {
	// Eliminates invalid characters
	const invalidCharRegex = /[^\d- ()]+/g;
	if (invalidCharRegex.test(str)) {
		return false;
	}
	// Eliminates incomplete numbers (< 10 digits)
	const digitsRegex = /\d/g;
	const digitsMatches = str.match(digitsRegex);
	if (digitsMatches.length < 10 || digitsMatches.length > 11) {
		return false;
	}
	// Eliminates invalid country code
	if (digitsMatches.length === 11 && digitsMatches[0] !== "1") {
		return false;
	}
	// Eliminates parentheses with more than 3 numbers inside
	const parenthesesRegex = /\(.*\)/g;
	if (
		parenthesesRegex.test(str) &&
		str.match(parenthesesRegex)[0].length > 5
	) {
		return false;
	}
	// Eliminates invalid first character
	const firstCharRegex = /^-/;
	if (firstCharRegex.test(str)) {
		return false;
	}
	// Eliminates non matching parentheses
	const nonMatchingParenthesesRegex1 = /\(.*/;
	if (
		nonMatchingParenthesesRegex1.test(str) &&
        str.match(nonMatchingParenthesesRegex1)[0].split('').findIndex(el => el === ')') === -1
	) {
        return false;
	}
	const nonMatchingParenthesesRegex2 = /.*\)/;
	if (
		nonMatchingParenthesesRegex2.test(str) &&
        str.match(nonMatchingParenthesesRegex2)[0].split('').findIndex(el => el === '(') === -1
	) {
        return false;
	}

	return true;
}

function telephoneCheck(str) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}

// Tests
console.log(telephoneCheck("555-555-5555")); // should return a boolean.
console.log(telephoneCheck("1 555-555-5555")); // should return true.
console.log(telephoneCheck("1 (555) 555-5555")); // should return true.
console.log(telephoneCheck("5555555555")); // should return true.
console.log(telephoneCheck("555-555-5555")); // should return true.
console.log(telephoneCheck("(555)555-5555")); // should return true.
console.log(telephoneCheck("1(555)555-5555")); // should return true.
console.log("length", telephoneCheck("555-5555")); // should return false.
console.log("length", telephoneCheck("5555555")); // should return false.
console.log("parentheses match", telephoneCheck("1 555)555-5555")); // should return false.
console.log(telephoneCheck("1 555 555 5555")); // should return true.
console.log(telephoneCheck("1 456 789 4444")); // should return true.
console.log("letter", telephoneCheck("123**&!!asdf#")); // should return false.
console.log("length", telephoneCheck("55555555")); // should return false.
console.log("parentheses length", telephoneCheck("(6054756961)")); // should return false
console.log("country", telephoneCheck("2 (757) 622-7382")); // should return false.
console.log("country", telephoneCheck("0 (757) 622-7382")); // should return false.
console.log("start", telephoneCheck("-1 (757) 622-7382")); // should return false
console.log("country", telephoneCheck("2 757 622-7382")); // should return false.
console.log("length", telephoneCheck("10 (757) 622-7382")); // should return false.
console.log("country", telephoneCheck("27576227382")); // should return false.
console.log("country", telephoneCheck("(275)76227382")); // should return false.
console.log("country", telephoneCheck("2(757)6227382")); // should return false.
console.log("country", telephoneCheck("2(757)622-7382")); // should return false.
console.log("parentheses match", telephoneCheck("555)-555-5555")); // should return false.
console.log("parentheses match", telephoneCheck("(555-555-5555")); // should return false.
console.log("letter", telephoneCheck("(555)5(55?)-5555")); // should return false.
