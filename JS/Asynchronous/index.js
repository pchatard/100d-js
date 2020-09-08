// Promises

const myProm = new Promise((resolve, reject) => {
	setTimeout(1000);
	if (Math.random() < 0.5) {
		resolve("test");
	} else {
		reject("error");
	}
});

myProm
	.then((resolvedValue) => console.log(resolvedValue))
    .catch((error) => console.log(error));
    
// Async / Await

async function asyncTest() {
    try {
        console.log(await myProm);
    } catch(error) {
        console.log(error);
    }
}

asyncTest();