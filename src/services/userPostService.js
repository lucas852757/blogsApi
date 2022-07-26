const Joi = require('joi');
const jwt = require('jsonwebtoken');
const model = require('../database/models');

const user = async ({ displayName, email, password, image }) => {
  const schema = Joi.object({ 
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(), 
    password: Joi.string().min(6).required(),
    image: Joi.string().required() });

    await schema.validateAsync({ displayName, email, password, image });

     const response = await model.User.findOne({ where: { email } });
    
     if (response !== null) {
      const error = new Error('User already registered');
      error.name = 'AlreadyRegisteredError';
      throw error;
     }

     const insertUser = await model.User.create({ displayName, email, password, image });
     const secret = process.env.JWT_SECRET;
     
   const token = jwt.sign({ data: insertUser.dataValues }, secret);
  return { token };
}; 

module.exports = {
  user,
};