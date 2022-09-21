'use strict';
//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const saleModel = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: DataTypes.INTEGER, allowNull: false, foreignKey: true},
    sellerId: {type: DataTypes.INTEGER, allowNull: false, foreignKey: true},
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
		saleDate: DataTypes.DATE,
		status: {type: DataTypes.STRING, defaultValue: 'Pendente'},
  }, {
    tableName: 'sales',
    timestamps: true,
    createdAt: 'saleDate',
    updatedAt: false,
    underscored: true,
  });
  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' } );      
  };
  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { foreignKey: 'sellerId', as: 'seller' } );
  };
  return Sale;
};

module.exports = saleModel

