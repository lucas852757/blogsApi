const service = require('../services/deleteMeService');
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
    return res.status(204).end();
  } catch (error) {
    next(error);
    console.log(error);
  }
};