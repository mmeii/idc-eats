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
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
		},
	});

	return User;
};
