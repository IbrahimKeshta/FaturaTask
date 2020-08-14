/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define('category', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: {
          tableName: 'category',
        },
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'category',
    timestamps:false
  });

  Category.associate = function(models) {
    // models.category.belongsTo(models.category, {foreignKey: 'parent_id' , as: 'parentCategory'})

    models.category.hasOne(models.category, {as: 'father', foreignKey: 'id', sourceKey:'parent_id'});
    models.category.hasMany(models.category, {as: 'children', foreignKey: 'parent_id', sourceKey: 'id'});
  }
return Category;
};

