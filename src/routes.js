/** source: https://github.com/tryber/nodejs-jwt-base-project */
const login = require('./controllers/loginController');
const userPost = require('./controllers/userPostController');
const userGet = require('./controllers/userGetController');
const userIdGet = require('./controllers/userIdGetController');

module.exports = {
  login,
  userPost,
  userGet,
  userIdGet,
};