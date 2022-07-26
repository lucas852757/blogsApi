const model = require('../database/models');

const userId = async (id) => {
  const response = await model
.User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

if (response === null) {
  const error = new Error('User does not exist');
  error.name = 'DoesNotExistError';

  throw error;
}
  return response;
};

module.exports = {
  userId,
};
