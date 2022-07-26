const model = require('../database/models');

const user = async () => {
  const response = await model.User.findAll({ attributes: { exclude: ['password'] } });
  return response;
};

module.exports = {
  user,
};