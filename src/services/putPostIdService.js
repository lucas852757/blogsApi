/** source: https://sebhastian.com/sequelize-update-example/ */
const Joi = require('joi');
const model = require('../database/models');

const putPostId = async (id, userId, { title, content }) => {
  const schema = Joi.object({ title: Joi.string().not()
    .empty().required()
    .messages({ 'any.required': 'Some required fields are missing' }),
content: Joi.string().not().empty().required()
.messages({ 'any.required': 'Some required fields are missing' }) });

await schema.validateAsync({ title, content });

  if (parseInt(id, 10) !== userId) {
    const error = new Error('Unauthorized user');
    error.name = 'UnauthorizedUserError';
    throw error;
  }
  await model.BlogPost.update({ title, content }, { where: { id } });

 const response = await model.BlogPost.findByPk(id, { include: [
{ model: model.User, as: 'user', attributes: { exclude: ['password'] } },
      { model: model.Category,
as: 'categories',
through: { attributes: [] } }] });
  return response;
};

module.exports = {
  putPostId,
};