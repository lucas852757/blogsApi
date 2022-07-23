const models = require('../database/models');

const login = async ({ email, password }) => {
  console.log(email);
 const resonse = await models.User.create({ email, password });
 return resonse;
};

module.exports = {
  login,
};