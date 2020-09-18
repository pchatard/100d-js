// Roman Numeral Converter

/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
	const arr = [];
	while (num > 0) {
		switch (true) {
			case num >= 1000:
				arr.push("M");
				num -= 1000;
				break;
			case num >= 900:
				arr.push("CM");
				num -= 900;
				break;
			case num >= 500:
				arr.push("D");
				num -= 500;
				break;
			case num >= 400:
				arr.push("CD");
				num -= 400;
				break;
			case num >= 100:
				arr.push("C");
				num -= 100;
                break;
            case num >= 90:
                arr.push("XC");
                num -= 90;
                break;
			case num >= 50:
				arr.push("L");
				num -= 50;
				break;
			case num >= 40:
				arr.push("XL");
				num -= 40;
				break;
			case num >= 10:
				arr.push("X");
				num -= 10;
				break;
			case num >= 9:
				arr.push("IX");
				num -= 9;
				break;
			case num >= 5:
				arr.push("V");
				num -= 5;
				break;
			case num >= 4:
				arr.push("IV");
				num -= 4;
				break;
			default:
				arr.push("I");
				num--;
				break;
        }
	}
	return arr.join("");
}

// Tests
console.log(convertToRoman(2)); // should return "II".
console.log(convertToRoman(3)); // should return "III".
console.log(convertToRoman(4)); // should return "IV".
console.log(convertToRoman(5)); // should return "V".
console.log(convertToRoman(9)); // should return "IX".
console.log(convertToRoman(12)); // should return "XII".
console.log(convertToRoman(16)); // should return "XVI".
console.log(convertToRoman(29)); // should return "XXIX".
console.log(convertToRoman(44)); // should return "XLIV".
console.log(convertToRoman(45)); // should return "XLV"
console.log(convertToRoman(68)); // should return "LXVIII"
console.log(convertToRoman(83)); // should return "LXXXIII"
console.log(convertToRoman(97)); // should return "XCVII"
console.log(convertToRoman(99)); // should return "XCIX"
console.log(convertToRoman(400)); // should return "CD"
console.log(convertToRoman(500)); // should return "D"
console.log(convertToRoman(501)); // should return "DI"
console.log(convertToRoman(649)); // should return "DCXLIX"
console.log(convertToRoman(798)); // should return "DCCXCVIII"
console.log(convertToRoman(891)); // should return "DCCCXCI"
console.log(convertToRoman(1000)); // should return "M"
console.log(convertToRoman(1004)); // should return "MIV"
console.log(convertToRoman(1006)); // should return "MVI"
console.log(convertToRoman(1023)); // should return "MXXIII"
console.log(convertToRoman(2014)); // should return "MMXIV"
console.log(convertToRoman(3999)); // should return "MMMCMXCIX"
