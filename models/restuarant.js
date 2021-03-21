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
    });

    Restaurant.associate = (models) => {
      Restaurant.hasMany(models.Selection, {
        onDelete: 'cascade',
        });
    };

    Restaurant.associate = (models) => {
      Restaurant.belongsToMany(models.Category, { through: 'Restaurant_Category' });
  };   

    return Restaurant;
  };