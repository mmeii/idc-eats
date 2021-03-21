//create Weight model
module.exports = (sequelize, DataTypes) => {
    const Weight = sequelize.define('Weight', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "users", // 'categoryTypes' refers to table name
				key: "id", // 'id' refers to column name in types table
			},
      },
      category_id: {
        type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "categories", // 'categoryTypes' refers to table name
				key: "id", // 'id' refers to column name in types table
			},
      },
      value: {
          type: DataTypes.INTEGER
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
      }
    });

    Weight.associate = (models) => {
      Weight.belongsTo(models.User, {
        foreignKey: {
            allowNull: false,
        },
      });
    };

    Weight.associate = (models) => {
        Weight.belongsTo(models.Category, {
          foreignKey: {
              allowNull: false,
          },
        });
      };
    
    return Weight;
};