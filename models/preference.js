//create Preference model
module.exports = (sequelize, DataTypes) => {
    const Preference = sequelize.define('Preference', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      // user_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: "users", // 'categoryTypes' refers to table name
      //     key: "id", // 'id' refers to column name in types table
      //   },
      // },
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
      Preference.belongsTo(models.Category, {
        foreignKey: {
          allowNull: false,
        },
      });
      Preference.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
    };
  
    return Preference;
  };