const service = require('../services/deletePostIdService');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: userId } = req;
    await service.deletePostId(id, userId);
    return res.status(204).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
};