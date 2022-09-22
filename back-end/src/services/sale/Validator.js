const { StatusCodes } = require('http-status-codes');
const { Product } = require('../../database/models');
const saleSchema = require('../../schemas/saleSchema');
const AppError = require('../../providers/AppError');

const getSaleProducts = async (products) => Promise.all(products.map(async (p) => {
    const product = await Product.findByPk(p.productId);
    product.quantity = p.quantity;
  if (!product) throw new AppError('Wrong product ID', StatusCodes.UNPROCESSABLE_ENTITY);
  return product;
  }));

const totalPriceValidate = (saleProducts, totalPrice) => {
  const dbPrice = saleProducts.reduce((acc, { quantity, price }) => acc + (quantity * price), 0)
  .toFixed(2);  
  if (dbPrice !== totalPrice.toFixed(2)) { 
    throw new AppError(`Wrong total price, try $${dbPrice}`, StatusCodes.UNPROCESSABLE_ENTITY); 
  }
};

const saleValidate = (body) => {
  const { error } = saleSchema.validate(body);
  if (error) throw new AppError(error.message, StatusCodes.BAD_REQUEST);
};

module.exports = { getSaleProducts, totalPriceValidate, saleValidate };