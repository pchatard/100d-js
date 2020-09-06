// Data types

// undefined, null, number, boolean, string, object, symbol

/* ************************************************************ */

// Array functions
const myArr = [1, 2, 3];

// Push 4 to the end of the array
myArr.push(4);
// Add 0 to the start of the array
myArr.unshift(0);

// Remove last element
const removed = myArr.pop();
//Remove first element
const removedFront = myArr.shift();

console.log(myArr, removed, removedFront);

/* ************************************************************ */

// Functions

// Basic function with a parameter
function sayHello(name) {
	console.log("Hello, " + name + "!");
}

sayHello("Pierre");

// Immediately invoked function expressions (IIFE)
(function() {
	console.log("I'm an IIFE");
})();

/* They used to be used in libraries to avoid scope issues between
variable names defined in your program and variable names defined in the library */

// Anonymous function
const magic = function () {
	return new Date();
};

// Can be converted to an arrow function
const newMagic = () => new Date();
const newMagicParameter = (param) => console.log(param);


/* ************************************************************ */

// Scope
// This is a global variable
var globalVariable = "global";

function test() {
	// This is a local scoped variable available only in this function
	var scoped = "scoped";
	console.log("test function: " + scoped);

	// This is a global variable because var keyword is omitted
	notScoped = "not scoped";
	console.log("test function: " + notScoped);
}

function test2() {
	console.log("test2 function: " + globalVariable);
	// undefined
	// console.log("test2 function: " + scoped);
	console.log("test2 function: " + notScoped);
}

test();
test2();

/* ************************************************************ */

// var, let, const

// This won't trigger any error
var myVar = "Hello";
var myVar = "Hey";
// This will trigger an error
let myNewVar = "Hello";
// let myNewVar = "Hey";

/* ************************************************************ */

// Hoisting

cat = 1;
console.log(cat);
var cat;
