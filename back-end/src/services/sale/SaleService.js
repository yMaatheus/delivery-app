const { StatusCodes } = require('http-status-codes');
const fs = require('fs').promises;
const Models = require('../../database/models');
const BaseService = require('../BaseService');
const { Sale, Sequelize, SaleProduct } = require('../../database/models');
const { getSaleProducts, totalPriceValidate, saleValidate } = require('./Validator');
const config = require('../../database/config/config');
const AppError = require('../../providers/AppError');

const sequelize = new Sequelize(config.development);

class SaleService extends BaseService {
  /**
   * @constructor
   * @param {import('sequelize/types').ModelDefined<{},{}>} 
   */
  constructor(model = Sale) {
    super(model);
  }

  static async getSaleDetails(where) {
    const query = await fs.readFile('./src/database/queries/getSaleDetails.sql', 'utf8');
    const [entity] = await Models.sequelize.query(query, {
      replacements: [where.id],
      type: Models.sequelize.QueryTypes.SELECT,
    });
    return entity;
  }

  async create(body) {
    saleValidate(body);
    const { sale, product } = body;
    const saleProducts = await getSaleProducts(product);
    totalPriceValidate(saleProducts, sale.totalPrice);
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

  async getOneDetails(where) {
    const entity = await SaleService.getSaleDetails(where);
    if (!entity) {
      throw new AppError(`${this.model.tableName} does not exist`, StatusCodes.NOT_FOUND);
    }
    return entity;
  }
}

module.exports = SaleService;
