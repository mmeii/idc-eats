//create Restaurant model
module.exports = (sequelize, DataTypes) => {
    const Restaurant = sequelize.define('Restaurant', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      yelp_id: {
        type: DataTypes.INTEGER,
      },
      name: {
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

    Restaurant.associate = (models) => {
      Restaurant.hasMany(models.Selection, {
        onDelete: 'cascade',
      });
      Restaurant.belongsToMany(models.Category, { through: 'Restaurant_Category' });
    };

    return Restaurant;
  };