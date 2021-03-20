const bcrypt = require("bcrypt");
const saltRounds = 10;
//create User model
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		oauthId: {
			type: DataTypes.STRING,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
		},
	});

	User.beforeCreate(async user => {
		const hashedPassword = await bcrypt.hash(user.password, saltRounds);
		user.password = hashedPassword;
	});

	return User;
};
