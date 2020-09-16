const { Sequelize } = require("sequelize");
require("dotenv").config();

// Create a Sequelize instance to connect to a database
const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{ host: process.env.DB_HOST, dialect: "mysql", logging: false } // logging: false disables the default console.log of each query performed
);

// Testing the connection
sequelize
	.authenticate()
	.then(() => console.log("Connection established successfully"))
	.catch((error) => console.error("Unable to connect to database"));

// Closing the connection (if necessary)
// sequelize
// 	.close()
// 	.then(() => console.log("Connection closed"))
// 	.catch((error) => console.error("An error occured"));
