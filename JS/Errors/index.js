// Handling Errors

// Try, catch, finally

try {
    console.log('Entering the try statement');
    Caca;
    console.log('You\'ll never see me.');
} catch(error) {
    console.log('Hm, think something\'s wrong, take a look at this error object');
    console.log(`Error name: ${error.name}`);
    console.log(`Error message: ${error.message}`);
    console.log(`Error stack: ${error.stack}`);
} finally {
    console.log('Finally! You can’t get rid of me, I\'ll always be there.');
}

// Throw a custom error

try {
    console.log('Entering the try statement');
    if (1) {
        throw new Error('I\'m a custom error');
    }
    console.log('You\'ll never see me.')
} catch(error) {
    console.log('Hey, I catched something. Look at this!');
    console.log(`Error message: ${error.message}`)
} finally {
    console.log('Finally! You can’t get rid of me, I\'ll always be there.');
}