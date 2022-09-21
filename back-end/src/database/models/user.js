'use strict';
//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
  });
  User.associate = (models) => {
    User.hasMany(models.Sale,
      { foreignKey: 'userId', as: 'userId' } );
  };
  User.associate = (models) => {
    User.hasMany(models.Sale,
      { foreignKey: 'sellerId', as: 'sellerId' } );
  };
  return User;
};

module.exports = userModel

