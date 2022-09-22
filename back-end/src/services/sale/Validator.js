const { StatusCodes } = require('http-status-codes');
const { Product } = require('../../database/models');
const saleSchema = require('../../schemas/saleSchema');
const AppError = require('../../providers/AppError');

const productValidate = async (products) => {
  const allProducts = await Product.findAll();
  const dbproductsIds = allProducts.map(({ id }) => id);
  const exists = products.every(({ productId }) => dbproductsIds.includes(productId));
  if (!exists) throw new AppError('Wrong product ID', StatusCodes.UNPROCESSABLE_ENTITY);
};

const saleValidate = (body) => {
  const { error } = saleSchema.validate(body);
  if (error) throw new AppError(error.message, StatusCodes.BAD_REQUEST);
};

module.exports = { productValidate, saleValidate };