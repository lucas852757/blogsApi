const service = require('../services/postService');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
module.exports = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req;
    const response = await service.post({ title, content, categoryIds, id });
    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};