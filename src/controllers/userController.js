const userService = require('../services/userService');

/** @type {import('express').RequestHandler} */
module.exports = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const response = await userService.user({ displayName, email, password, image });
    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
