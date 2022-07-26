/** source: https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/jwt-json-web-token/acf1c24f-d531-4cf0-be9b-2384e37799d7/conteudos/d22aa12a-a9fd-448f-865a-ec8de7f521e6/implementando-jwt/b81401e2-ade1-4d90-94b9-e6d971915d36?use_case=side_bar */

/** source : https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#aula-243-jwt-json-web-token */

const jwt = require('jsonwebtoken');
// const model = require('../database/models');
const secret = process.env.JWT_SECRET;
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    try {
      jwt.verify(token, secret);
      next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
};