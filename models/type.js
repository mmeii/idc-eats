//create Type model
module.exports = (sequelize, DataTypes) => {
    const Type = sequelize.define('Type', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Type;
  };