/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Products = sequelize.define('products', {
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
    image_uri: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    category_id: {
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
    tableName: 'products',
    timestamps:false
  });

  Products.associate = function(models) {
    Products.belongsTo(models.category, {foreignKey: "category_id", as: "category", sourceKey: "id"})
    Products.hasMany(models.product_providers, {foreignKey: "products_id", as: 'productProviders', sourceKey: 'id'})
  }
  return Products;
};
