 const Joi = require('joi');
const model = require('../database/models');

const categories = async (name) => {
  const schema = Joi.object({ name: Joi.string().required() });

  // Dispara erro
  await schema.validateAsync({ name });

  const inserCategory = await model.Category.create({ name });
  const response = inserCategory.dataValues;
  return response;
};

module.exports = {
  categories,
};