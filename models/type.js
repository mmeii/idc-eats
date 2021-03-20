//create Type model
module.exports = (sequelize, DataTypes) => {
	const Type = sequelize.define("Type", {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

	Type.associate = models => {
		Type.hasMany(models.Category);
	};

	return Type;
};
