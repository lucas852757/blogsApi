const model = require('../database/models');

const deleteMe = async (id) => {
  await model.User.destroy({ where: { id } }); 
};

module.exports = {
  deleteMe,
};