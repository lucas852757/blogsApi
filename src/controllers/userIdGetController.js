const service = require('../services/userIdPostService');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
  const response = await service.userId(id); 
  return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};