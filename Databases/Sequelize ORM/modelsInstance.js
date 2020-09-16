const { Sequelize, DataTypes, Model } = require("sequelize");
require("dotenv").config();

// Create a Sequelize instance to connect to a database
const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: "mysql",
		logging: false,
	}
);

class User extends Model {}
User.init(
	{
		name: DataTypes.TEXT,
		favoriteColor: { type: DataTypes.TEXT, defaultValue: "green" },
		age: DataTypes.INTEGER,
		cash: DataTypes.INTEGER,
	},
	{ modelName: "User", sequelize }
);

(async () => {
	await sequelize.sync({ force: true });

	// Creating an instance
	const jane = User.build({ name: "Jane", age: 21 });
	// Persist it to the database
	await jane.save({ fields: ["name", "age"] }); // save can take an array of the fields you want to save

	// We can also use the create method which persists directly to the db
	const john = await User.create({ name: "John" });

	// Update a value and save again
	jane.favoriteColor = "blue";
	//await jane.save();

	// Delete an instance
	await john.destroy();

	// Get up to date data from db
	await jane.reload();
    
	// Increment or decrement
    await jane.increment('age', { by: 3 }); // Increment by 3
    //await jane.decrement('age'); // Decrement by 1
    await jane.reload();
	console.log(jane.toJSON());
})();
