//create User model
module.exports = (sequelize, DataTypes) => {
    const Option = sequelize.define('Option', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      option: {
          type: DataTypes.STRING,
          allowNull: false
      },
      type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'types', // 'types' refers to table name
            key: 'id' // 'id' referes to column name in types table
        }
      },
      display: {
        type: DataTypes.BOOLEAN,
      },
    });

    Type.hasMany(Option);
  
    return Option;
  };