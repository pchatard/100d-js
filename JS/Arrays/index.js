// Array functions

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach: do not mutate array, do not return anything
myArray.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
}) 

// map: apply a function on each item and returns a new array based on results
const myMapped = myArray.map((item, index) => item * 2);
console.log(`Mapped: ${myMapped}`);

// filter: apply a condition to each item and returns a new array with truthy results
const myOdds = myArray.filter((item, index) => item % 2 !== 0);
console.log(`Odds: ${myOdds}`);

// reduce
const sum = myArray.reduce((result, item) => result + item, 0);
console.log(`Sum: ${sum}`);

// some: returns a boolean which is true if at least 1 item fulfill the condition
const containsNine = myArray.some((item, index) => item === 9);
console.log(`Contains 9: ${containsNine}`);

// every: Returns a boolean which is true if every items fulfill the condition
const areNegative = myArray.every((item, index) => item < 0);
console.log(`Negative array: ${areNegative}`);

// find: returns first item that satisfies a condition. If not found, returns undefined
const five = myArray.find(item => item === 5);
const twelve = myArray.find(item => item === 12);
console.log(five, twelve); // 5, undefined

// findIndex: same as find but returns the index or -1 if not found.