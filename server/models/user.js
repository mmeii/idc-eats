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
		},
		password: {
			type: DataTypes.STRING,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: new Date(),
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: new Date(),
		},
	});

	User.addScope("defaultScope", { include: ["Preference"] });

	User.associate = models => {
		User.hasMany(models.Selection, {
			onDelete: "cascade",
		});
		User.hasMany(models.Preference, {
			as: "Preference",
		});
		User.hasMany(models.Weight, {
			onDelete: "cascade",
		});
	};

	User.beforeCreate(async user => {
		if (user.password) {
			const hashedPassword = await bcrypt.hash(user.password, saltRounds);
			user.password = hashedPassword;
		}
	});

	return User;
};
