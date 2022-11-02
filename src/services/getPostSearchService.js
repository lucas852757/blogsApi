const { Op } = require('sequelize');
const model = require('../database/models');

const getPostService = async (q) => {
  const response = await model.BlogPost
  .findAll({ where: { [Op.or]: [{ title: { [Op.like]: `%${q}%` } }, 
  { content: { [Op.like]: `%${q}%` } }] },
include: [{ model: model.User, as: 'user' },
  { model: model.Category,
    as: 'categories',
    through: { attributes: [] } }] });
  console.log(response);

  return response;
};

module.exports = {
  getPostService,
};
