const service = require('../services/loginService');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    const response = await service.login({ email, password });
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};