const model = require('../database/models');

const getPostId = async (id) => {
  const response = await model.BlogPost.findByPk(id, {
    include: [
      { model: model.User, as: 'user', attributes: { exclude: ['password'] } },
      { model: model.Category,
as: 'categories',
        through: { attributes: [] } },
    ],
  });

  if (response === null) {
    const error = new Error('Post does not exist');
    error.name = 'DoesNotExistError';
    throw error;
  }

  return response;
};

module.exports = {
  getPostId,
};
