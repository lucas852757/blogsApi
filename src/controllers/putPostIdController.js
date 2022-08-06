const service = require('../services/putPostIdService');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.id;
    const { title, content } = req.body;
    const response = service.putPostId(id, userId, { title, content });
    return res.status(200).json(response);
  } catch (error) {
    next(error);
    console.log(error);
  }
};