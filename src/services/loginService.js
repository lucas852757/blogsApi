/* source: https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages */
const Joi = require('joi');
// const models = require('../database/models');

const login = async ({ email, password }) => {
  const schema = Joi.object({ 
    email: Joi.string().required()
    // Troca mensagem. Origem da linha de código: stackoverflow
    .messages({ 'any.required': 'Some required fields are missing' }),
     password: Joi.string().required()
     .messages({ 'any.required': 'Some required fields are missing' }) });

  const error = schema.validateAsync({ email, password });
  console.log(error);
 // const resonse = await models.User.create({ email, password });
 // return resonse;
};

module.exports = {
  login,
};