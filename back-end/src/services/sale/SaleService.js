const BaseService = require('../BaseService');
const CustomError = require('../../utils/customError');
const { Sale, Sequelize, SaleProduct } = require('../../database/models');
const config = require('../../database/config/config');

const sequelize = new Sequelize(config.development);

class SaleService extends BaseService {
  constructor(model = Sale) {
  super(model);
}

  async create(body) {
    const { sale, product } = body;
    console.log(this);
    const result = await sequelize.transaction(async (t) => {
    const newSale = await this.model.create(sale, { transaction: t });
      console.log(newSale);
      await SaleProduct.bulkCreate(product.map((item) => ({
        saleId: newSale.id,
        productId: item.productId,
        quantity: item.quantity,
      })), { transaction: t });
      return newSale.get();
    });
    return result;
  }

  async queryUpdate(body, query) {
    const entity = await SaleProduct.update(body, { where: query });
    if (!entity) throw new CustomError(`${this.model.tableName} does not exist`);
    return SaleProduct.findOne({ where: query });
}
}

module.exports = SaleService;
