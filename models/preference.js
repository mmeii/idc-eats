//create Preference model
module.exports = (sequelize, DataTypes) => {
    const Preference = sequelize.define('Preference', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      selected: {
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

    Preference.associate = (models) => {
      Preference.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
    };

    Preference.associate = (models) => {
      Preference.belongsTo(models.Type, {
        foreignKey: {
          allowNull: false,
        },
      });
    };
  
    return Preference;
  };