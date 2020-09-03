const test = require("./test");

// Console.log
console.log("Hello, World from Node");

/* ********************************************************** */

// Modules demo
console.log(`Result from test.js function: ${test(2, 2)}`);

/* ********************************************************** */

// Events
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Defines what happens when 'example' is triggered
eventEmitter.on("example", (num) => {
	console.log("This is an example event. ");
	console.log(`Test function of 3 and ${num} gives ${test(3, num)}`);
});

// Trigger or emits an 'example' event, with or without parameters
eventEmitter.emit("example", 2);

// A class can extend from EventEmitter and its instances can then emit events

// Events get executed synchronously.

/* ********************************************************** */

// Readline
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question(`What is your name? \n`, (userInput) => {
	if (userInput.trim() !== "") {
		console.log(`Hello ${userInput}!`);
		rl.close();
	} else {
		rl.setPrompt("You probably have one, come on!\n");
		rl.prompt();
		rl.on("line", (userInput) => {
			if (userInput.trim() !== "") {
				rl.close();
			} else {
				rl.setPrompt("Wrong again\n");
				rl.prompt();
			}
		});
	}
});

rl.on("close", () => {
	console.log("Bye");
});

