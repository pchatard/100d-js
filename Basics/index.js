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