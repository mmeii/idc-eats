//create Preference model
module.exports = (sequelize, DataTypes) => {
    const Preference = sequelize.define('Preference', {
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
              model: 'users',
              key: 'id'
          }
      },
      option_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'options', // 'types' refers to table name
            key: 'id' // 'id' referes to column name in types table
        }
      },
      active: {
        type: DataTypes.BOOLEAN,
      },
    });

    User.hasMany(UserPreference);
    Category.hasMany(UserPreference);
  
    return UserPreference;
  };