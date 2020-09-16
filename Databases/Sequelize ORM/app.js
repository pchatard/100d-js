const { Sequelize, DataTypes, Model, STRING, TEXT } = require("sequelize");
require("dotenv").config();

// Create a Sequelize instance to connect to a database
const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: "mysql",
		logging: false, // logging: false disables the default console.log of each query performed
		freezeTableName: true, // Defines this for all Models
	}
);

// Defining a model
// By default, the table's name will be pluralized, so User model matches the Users table.
// 1. Using sequelize.define
// const User = sequelize.define(
// 	"User",
// 	// Model's attributes (the table's columns)
// 	{
// 		firstName: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 		},
// 		lastName: {
// 			type: DataTypes.STRING,
// 			// allowNull is true by default
// 		},
// 	},
// 	{
//         /* Model's options go here */
//         tableName: 'Person', // Defines the table name explicitly
// 	}
// );

// 2. Extending Model
class User extends Model {}
User.init(
	// Model's attributes (the table's columns)
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			unique: true,
			primaryKey: true,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "Doe",
		},
		lastName: {
			type: DataTypes.STRING,
			// allowNull is true by default
		},
		birthDate: {
			type: DataTypes.DATE,
			defaultValue: Sequelize.NOW,
		},
	},
	{
		/* Model's options go here */
		sequelize, // We need to pass the instance
		modelName: "User", // Give the Model's name
		freezeTableName: true, // Keeps User as the table name
		timestamps: true, // By default, Sequelize provide the following two columns and updates it automatically
		updatedAt: false,
		createdAt: "creationDate",
	}
);

// The User model can then be accessed by sequelize.Models.User
console.log(User === sequelize.models.User);

async function databaseTesting() {
	try {
		await sequelize.authenticate();
		console.log("Connection established successfully");
	} catch (error) {
		console.error("Unable to connect to database");
	}
	try {
		await sequelize.sync({ force: true, match: /ize$/ }); //
		console.log("User table was created successfully");
	} catch (error) {
		console.error("An error occured while creating the User table");
	}
	try {
		await sequelize.drop({ match: /^101/ }); // Checks if database name starts with 101
		console.log("User table was deleted successfully");
	} catch (error) {
		console.error("An error occured while deleting the User table");
	}
}

databaseTesting();

// Synchronizing all models at once
// sequelize.sync();

// In production, Migrations should be used instead of sync()

// Deleting all tables
// sequelize.drop();

// Testing the connection
// sequelize
// 	.authenticate()
// 	.then(() => console.log("Connection established successfully"))
// 	.catch((error) => console.error("Unable to connect to database"));

// Closing the connection (if necessary)
// sequelize
// 	.close()
// 	.then(() => console.log("Connection closed"))
// 	.catch((error) => console.error("An error occured"));
