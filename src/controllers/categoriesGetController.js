const service = require('../services/categoriesGetService');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
module.exports = async (red, res, next) => {
  try {
    const response = await service.categories();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};