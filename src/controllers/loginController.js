const service = require('../services/loginService');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
 module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const response = await service.login({ email, password });
     return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
