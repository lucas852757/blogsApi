const service = require('../services/categoriesPostService');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
module.exports = async (req, res, next) => {
  try {
    const { name } = req.body;
    const response = await service.categories(name);
    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
