/** source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b */
/** source: https://itecnote.com/tecnote/node-js-get-last-inserted-id-sequelize/ */
/** source: https://www.bennadel.com/blog/3302-you-can-use-arrays-in-field-equality-checks-within-a-sequelize-where-clause-in-node-js.htm */

// const Joi = require('joi');
const model = require('../database/models');
const validation = require('../utils/joiValidate');

// eslint-disable-next-line max-lines-per-function
const post = async ({ title, content, categoryIds, id }) => {
  // Joi para validation
  await validation({ title, content, categoryIds, id });
const findAllCategories = await model.Category.findAll({ where: { id: categoryIds } }); 

if (findAllCategories.length !== categoryIds.length) {
  const error = new Error('"categoryIds" not found');
  error.name = 'CategoryIdsNotFoundError';
  throw error;
}

const insertBlogPost = await model.BlogPost
 .create({ title, content, userId: id });
const { id: idBlogPost } = insertBlogPost.toJSON();

categoryIds.map(async (categoryId) => {
  const findId = await model.Category.findByPk(categoryId);
  const { id: idCategory } = findId.toJSON();
  await model.PostCategory.bulkCreate([{ postId: idBlogPost, categoryId: idCategory }]);
});

const response = await model.BlogPost
.findOne({ where: { id: idBlogPost } });
return response;
};
 
module.exports = {
  post,
};