/* source: https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages */
/* source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#aula-241-orm-interface-da-aplicacao-com-o-banco-de-dados */
const Joi = require('joi');
const models = require('../database/models');

const login = async ({ email, password }) => {
  const schema = Joi.object({ 
    email: Joi.string().required()
    // Troca mensagem. Origem da linha de código: stackoverflow
    .messages({ 'any.required': 'Some required fields are missing' }),
     password: Joi.string().required()
     .messages({ 'any.required': 'Some required fields are missing' }) });

     // Aula 241
  const error = await schema.validateAsync({ email, password });

   if (error) {
    throw error;
   }
   const resonse = await models.User.create({ email, password });
   return resonse;
};

module.exports = {
  login,
};