const { StatusCodes } = require('http-status-codes');
const BaseService = require('../BaseService');
const { Sale, Sequelize, SaleProduct } = require('../../database/models');
const { productValidate, saleValidate } = require('./Validator');
const config = require('../../database/config/config');
const AppError = require('../../providers/AppError');

const sequelize = new Sequelize(config.development);

class SaleService extends BaseService {
  constructor(model = Sale) {
    super(model);
  }

  async create(body) {
    saleValidate(body);
    const { sale, product } = body;
    await productValidate(product);

    const result = await sequelize.transaction(async (t) => {
      const newSale = await this.model.create(sale, { transaction: t });
      await SaleProduct.bulkCreate(product.map(({ productId, quantity }) => ({
        saleId: newSale.id,
        productId,
        quantity,
      })), { transaction: t });
      return newSale.get();
    });
    
    return result;
  }

  async update(body) {
    const { saleId, productId } = body;
    const entity = await SaleProduct.update(body, { where: { saleId, productId } });
    if (!entity) {
      throw new AppError(`${this.model.tableName} does not exist`, StatusCodes.NOT_FOUND);
    }
    return body;
  }
}

module.exports = SaleService;
