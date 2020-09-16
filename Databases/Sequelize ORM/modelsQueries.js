// Select queries
const users = await User.findAll();
// findByPk(id): find by primary key
// findOne(): find the first row matching
// findOrCreate() returns a matching row or create one, as well as a boolean
// findAndCountAll() returns an object with the count and rows matching a query

// Select queries with specific fields
const usersNames = await User.findAll({
	attributes: ["name", ["age", "years"]],
}); // SELECT name, age AS years FROM users;

// Where clause
// We can use different operators with the Op object
const usersId = await User.findAll({
	where: {
		id: 2,
		age: { [Op.eq]: 21 },
	},
});

// A list of operators can be found at https://sequelize.org/master/manual/model-querying-basics.html#operators

// Update queries
await User.update({ age: 23 }, { where: { lastName: "Doe" } });

// Delete queries
await User.destroy({ where: { age: 21 } });

// Ordering and grouping by using the order and group options into a query

// Limits and pagination
User.findAll({ limit: 10 }); // Get only 10 rows
User.findAll({ offset: 5 }); // Skip 5 rows

// Utility methods
const number = await User.count({ where: { age: 21 } });
const max = await User.max("age", { where: { age: { [Op.gt]: 20 } } });
const min = await User.min("age", { where: { age: 21 } });
const sum = await User.sum("age", { where: { age: 21 } });
