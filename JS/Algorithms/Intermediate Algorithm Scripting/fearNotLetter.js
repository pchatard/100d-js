// Missing Letters

/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    const arr = str.split('');
    const missing = arr.reduce((prev, current) => {
        const code = current.charCodeAt(0);
        if (code === prev + 1) {
            return code;
        } else {
            return prev;
        }
    }, arr[0].charCodeAt(0));
    if (missing === arr[arr.length-1].charCodeAt(0)) {
        return undefined;
    } else {
        return String.fromCharCode(missing + 1);
    }
}

// Tests

console.log(fearNotLetter("abce")); // should return "d".
console.log(fearNotLetter("abcdefghjklmno")); // should return "i".
console.log(fearNotLetter("stvwx")); // should return "u".
console.log(fearNotLetter("bcdf")); // should return "e".
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // should return undefined.