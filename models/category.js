//create Category model
module.exports = (sequelize, DataTypes) => {
    const Category  = sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      category: {
          type: DataTypes.STRING,
          allowNull: false
      },
      type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'types', // 'categoryTypes' refers to table name
            key: 'id' // 'id' referes to column name in types table
        }
      },
      display: {
        type: DataTypes.BOOLEAN,
      },
    });

    Type.hasMany(Category);
  
    return Category;
  };