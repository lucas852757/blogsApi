const Joi = require('joi');

const validation = async ({ title, content, categoryIds }) => {
  const schema = Joi.object({ 
    title: Joi.string().required()
    .messages({ 'string.empty': 'Some required fields are missing' }), 
    content: Joi.string().required()
    .messages({ 'string.empty': 'Some required fields are missing' }), 
    categoryIds: Joi.array().min(1).required()
    .messages({ 'string.empty': 'Some required fields are missing',
  'array.min': '"categoryIds" not found' }) });

  await schema.validateAsync({ title, content, categoryIds }); 
};

module.exports = validation;