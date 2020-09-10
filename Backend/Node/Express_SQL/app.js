const express = require("express");
const app = express();
require("dotenv").config();

const PORT_NUMBER = process.env.PORT || 3000;
const dbConnection = require("./database");

// Middlewares and Routers
app.get("/", (req, res) => {
	dbConnection.query("SELECT * FROM employee", (err, results, fields) => {
		if (err) {
			throw err;
		} else {
			res.send(results);
		}
	});
});

app.listen(PORT_NUMBER, () => {
	console.log(`Server running on port ${PORT_NUMBER}`);
});
