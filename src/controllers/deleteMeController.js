const service = require('../services/');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
module.exports = async (req, res, next) => {
  try {
    const { id } = req;
    await service.deleteMe(id);
  } catch (error) {
    next(error);
    console.log(error);
  }
};