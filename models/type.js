//create Type model
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
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
    });

    Type.associate = (models) => {
      Type.hasMany(models.Category)
    };
  
    return Type;
  };
=======
	const Type = sequelize.define("Type", {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

	Type.associate = models => {
		Type.hasMany(models.Category);
	};

	return Type;
};
>>>>>>> 25595fec818a9720911ec21efe274bb691f5db12
