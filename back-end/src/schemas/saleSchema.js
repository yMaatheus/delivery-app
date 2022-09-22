const Joi = require('joi');

const saleSchema = Joi.object({
  sale: Joi.object({
  userId: Joi.number().required(),
  sellerId: Joi.number().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  }).required(),
  product: Joi.array().items(Joi.object({
    productId: Joi.number().required(),
    quantity: Joi.number().required(),
  })).required(),
});

module.exports = saleSchema;