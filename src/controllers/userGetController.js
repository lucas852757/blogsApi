const service = require('../services/userGetService');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
module.exports = async (req, res, next) => {
  try {
    const response = await service.user();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};