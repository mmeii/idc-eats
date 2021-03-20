//create User model
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
    });

    User.associate = (models) => {
      User.hasMany(models.Selection, {
        onDelete: 'cascade',
      });
    };

    User.association = (models) => {
      User.hasMany(models.Preference, {
        onDelete: 'cascade',
      });
    };

    User.association = (models) => {
      User.hasMany(models.Weigh, {
        onDelete: 'cascade',
      });
    };
  
    return User;
  };