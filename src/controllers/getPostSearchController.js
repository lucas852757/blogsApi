const service = require('../services/getPostSearchService');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
 module.exports = async (req, res, _next) => {
  try {
    const { q } = req.query;
    const response = await service.getPostService(q);
    return res.status(200).json(response);
  } catch (error) {
    // next(error);
    console.log(error);
  }
};