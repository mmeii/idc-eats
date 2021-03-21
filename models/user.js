const { Sequelize } = require(".");

//create User model
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    oauthId: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
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
