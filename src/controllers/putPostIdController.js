const service = require('../services/putPostId');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const response = service.putPostId(id, { title, content });
    return res.status(200).json(response);
  } catch (error) {
    next(error);
    console.log(error);
  }
};