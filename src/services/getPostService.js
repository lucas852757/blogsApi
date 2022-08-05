/** source: https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-associations/043e2e8a-c28e-4b95-a949-b7c43221ca8d/conteudos/82c3bd70-4da0-4a85-bf56-cce8d3f8c186/eager-loading/650ad8d0-71a8-4f97-8c03-2642faec1f66?use_case=side_bar */
const model = require('../database/models');

const getPost = async () => {
  const response = await model.BlogPost.findAll({
    include: [
      { model: model.User, as: 'user', attributes: { exclude: ['password'] } },
      { model: model.Category,
as: 'categories',
        through: { attributes: [] } },
    ],
  });
  return response;
};

module.exports = {
  getPost,
};
