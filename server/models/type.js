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
        values: ['diet', 'cuisine']
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

    Type.associate = (models) => {
      Type.hasMany(models.Category, {
        onDelete: 'cascade',
      })
    };
  
    return Type;
  };
