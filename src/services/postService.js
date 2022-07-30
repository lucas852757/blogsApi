/** source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b */
/** source: https://itecnote.com/tecnote/node-js-get-last-inserted-id-sequelize/ */
/** source: https://www.bennadel.com/blog/3302-you-can-use-arrays-in-field-equality-checks-within-a-sequelize-where-clause-in-node-js.htm */

const Joi = require('joi');
const model = require('../database/models');
const findCategoriesId = require('../utils/findCategoriesId');

// eslint-disable-next-line max-lines-per-function
const post = async ({ title, content, categoryIds, id }) => {
  const schema = Joi.object({ 
    title: Joi.string().required()
    .messages({ 'string.empty': 'Some required fields are missing' }), 
    content: Joi.string().required()
    .messages({ 'string.empty': 'Some required fields are missing' }), 
    categoryIds: Joi.array().min(1).required()
    .messages({ 'string.empty': 'Some required fields are missing',
  'array.min': '"categoryIds" not found' }) });

  await schema.validateAsync({ title, content, categoryIds });
  console.log('-->', id);
// terminar hoje
const response = await model.Category.findAll({ where: { id: categoryIds } }); 

if (response.length !== categoryIds.length) {
  const error = new Error('"categoryIds" not found');
  error.name = 'CategoryIdsNotFoundError';
  throw error;
}

// console.log('-->', await findCategoriesId(categoryIds));

// const insertBlogPost = await model.BlogPost
// .create({ title, content, userId: id }/* , { include: { model: model.PostCategory } } */);
// const { id: idBlogPost } = insertBlogPost.toJSON();

/* const Category = await model.Category.findAll();
console.log(Category);
const response = await model.BlogPost
.findOne({ where: { id: idBlogPost } });
return response; */
};
 
module.exports = {
  post,
};