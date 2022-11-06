const model = require('../database/models');

const deletePostId = async (postId, userId) => {
  const intPostId = parseInt(postId, 10);
  
  const findBlogPostId = await model.BlogPost.findByPk(postId);
  if (findBlogPostId === null) {
    const error = new Error('Post does not exist');
    error.name = 'DoesNotExistError';
    throw error;
  }

  const found = await model.BlogPost.findAll({ where: { userId } });
  found.filter(({ dataValues }) => dataValues.userId === userId);
  
    if (!found.length) {
    
    const error = new Error('Unauthorized user');
    error.name = 'UnauthorizedUserError';
    throw error;
  } 

  await model.BlogPost.destroy({ where: { id: intPostId } });
};

module.exports = {
  deletePostId,
};