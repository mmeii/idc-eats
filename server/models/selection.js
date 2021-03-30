//create Selection model
module.exports = (sequelize, DataTypes) => {
    const Selection = sequelize.define('Selection', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      committed: {
        type: DataTypes.BOOLEAN,
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

    Selection.associate = (models) => {
      Selection.belongsTo(models.Restaurant, {
        foreignKey: {
            allowNull: false,
        },
      });
      Selection.belongsTo(models.User, {
        foreignKey: {
            allowNull: false,
        },
      });
    };
    
    return Selection;
  };