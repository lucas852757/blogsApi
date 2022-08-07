const model = require('../database/models');

const deletePostId = async (id, userId) => {
  const findBlogPostId = await model.BlogPost.findByPk(id);
  if (findBlogPostId === null) {
    const error = new Error('Post does not exist');
    error.name = 'DoesNotExistError';
    throw error;
  }

  const findAllBlogPost = await model.BlogPost.findAll({ where: { userId } });
  
  const findIds = findAllBlogPost.map((post) => post.dataValues.id);
  if (!findIds.includes(parseInt(id, 10))) {
    const error = new Error('Unauthorized user');
    error.name = 'UnauthorizedUserError';
    throw error;
  }

  await model.BlogPost.destroy({ where: { userId } });
};

module.exports = {
  deletePostId,
};