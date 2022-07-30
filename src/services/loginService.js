/* source: https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages */
/* source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#aula-241-orm-interface-da-aplicacao-com-o-banco-de-dados */

/** source: https://onestepcode.com/joi-js-custom-error-messages/ */
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const models = require('../database/models');

const login = async ({ email, password }) => {
  // Atera mensagens padrões do Joi
  const schema = Joi.object({ 
    email: Joi.string().not().empty().email()
    .required()
.messages({ 'string.empty': 'Some required fields are missing' }),
     password: Joi.string().not().empty().required()
     .messages({ 'string.empty': 'Some required fields are missing' }) });

     // Aula 241
  await schema.validateAsync({ email, password });

  const resonse = await models.User.findOne({ where: { email } });
   if (resonse === null) {
    const error = new Error('Invalid fields');
    error.name = 'NotFoundError';
    throw error;
   }

   const secret = process.env.JWT_SECRET;

   const token = jwt.sign({ data: resonse }, secret);
  return { token };
};

module.exports = {
  login,
};