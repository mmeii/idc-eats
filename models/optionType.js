//create Option_Type model
module.exports = (sequelize, DataTypes) => {
    const OptionType = sequelize.define('OptionType', {
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
  
    return OptionType;
  };