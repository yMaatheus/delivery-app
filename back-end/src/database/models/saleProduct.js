'use strict';
//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'salesProducts',
    timestamps: false,
		underscored: true,
  });

	SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });

    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };
  
  return SaleProduct;
};
