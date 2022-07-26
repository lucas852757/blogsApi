const model = require('../database/models');

const categories = async () => {
  const response = await model.Category.findAll();
  return response;
};

module.exports = {
  categories,
};