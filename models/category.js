//create Category model
module.exports = (sequelize, DataTypes) => {
	const Category = sequelize.define("Category", {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		yelp_category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		display_category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		type_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "types", // 'categoryTypes' refers to table name
				key: "id", // 'id' refers to column name in types table
			},
		},
		selected: {
			type: DataTypes.BOOLEAN,
		},
	});

	Category.associate = (models) => {
		Category.hasMany(models.Preference)
	};

	Category.associate = (models) => {
		Category.hasMany(models.Weight, {
			onDelete: 'cascade',
		});
	};

	Category.associate = (models) => {
		Category.belongsTo(models.Type, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Category;
};
