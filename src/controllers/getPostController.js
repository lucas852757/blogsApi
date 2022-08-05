const service = require('../services/getPostService');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
module.exports = async (req, res, next) => {
  try {
    const response = await service.getPost();
    return res.status(200).json(response);
  } catch (error) {
    next(error);
    console.log(error);
  }
};