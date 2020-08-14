/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const product_providers = sequelize.define('product_providers', {
    products_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'products',
        },
        key: 'id'
      }
    },
    providers_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'providers',
        },
        key: 'id'
      }
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    available: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_providers',
    timestamps:false
  });

  product_providers.associate = function(models){
    product_providers.belongsTo(models.products, {foreignKey: "products_id"});
    product_providers.belongsTo(models.providers, {foreignKey: "providers_id"});
  }
  return product_providers
};
