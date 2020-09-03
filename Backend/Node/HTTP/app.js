const http = require("http");
const fs = require("fs");

// Create a server
// const server = http.createServer((req, res) => {
// 	if (req.url === "/") {
// 		res.write("Hello from NodeJS");
// 		res.end();
// 	}
// });

// server.listen("3000");

// Serve static files
http.createServer((req, res) => {
	// Create a readable stream
    const readStream = fs.createReadStream("./static/index.html");
    
	// Update the response header ("application/json", "image/png", etc)
    res.writeHead(200, { "Content-type": "text/html" });
    
	// Send the file via a pipe
	readStream.pipe(res);
}).listen(3000);
