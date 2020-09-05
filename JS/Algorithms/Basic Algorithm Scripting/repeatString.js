// Repeat a String Repeat a String

/* Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. */

function repeatStringNumTimesMe(str, num) {
    if (num <= 0) return "";
    let result = str;
    for (let i = 1; i < num; i++) {
        result += str;
    }
    return result;
}

// Recursion
function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
  }

console.log(repeatStringNumTimes("*", 3)); // should return "***".
console.log(repeatStringNumTimes("abc", 3)); // should return "abcabcabc".
console.log(repeatStringNumTimes("abc", 4)); // should return "abcabcabcabc".
console.log(repeatStringNumTimes("abc", 1)); // should return "abc".
console.log(repeatStringNumTimes("*", 8)); // should return "********".
console.log(repeatStringNumTimes("abc", -2)); // should return "".
// The built-in repeat() method should not be used.
console.log(repeatStringNumTimes("abc", 0)); // should return "".
