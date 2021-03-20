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
    });

    Selection.associate = (models) => {
      Selection.belongsTo(models.Restaurant, {
        foreignKey: {
            allowNull: false,
        },
      });
    };

    Selection.associate = (models) => {
        Selection.belongsTo(models.User, {
          foreignKey: {
              allowNull: false,
          },
        });
      };
Selection;
  };