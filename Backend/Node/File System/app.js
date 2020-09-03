/* ********************************************************** */

// These functions get executed asynchronously

// File system
const fs = require("fs");

// Create a file
fs.writeFile(
	"newFile.txt",
	"I was created through NodeJS file system module",
	(err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("File created successfully");

			// Read a file
			fs.readFile("newFile.txt", "utf8", (err, file) => {
				if (err) {
					console.log(err);
				} else {
					console.log(file);
				}
			});
		}
	}
);

// Rename a file
fs.rename("newFile.txt", "otherFile.txt", (err) => {
	if (err) console.log(err);
	else console.log("Successfully renamed file");
});

// Update a file
fs.appendFile("otherFile.txt", "Some more text", (err) => {
	if (err) console.log(err);
	else console.log("File updated");
});

// Delete a file
fs.unlink("otherFile.txt", (err) => {
	if (err) console.log(err);
	else console.log("successfully deleted file");
});

// Create a folder
fs.mkdir("File System", (err) => {
	if (err) console.log(err);
	else console.log("successfully created folder");
});

// Remove a folder
fs.rmdir("File System", (err) => {
	if (err) console.log(err);
	else console.log("successfully removed folder");
});

// List directory from a folder
fs.readdir('File System', (err, files) => {
    if (err) console.log(err);
    else {
        console.log(files);
    }
});

// Streams
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt');

// readStream.on('data', chunk => {
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);