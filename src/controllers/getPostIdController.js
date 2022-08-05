const service = require('../services/getPostId')
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.getPostId(id);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
    console.log(error);
  }

};