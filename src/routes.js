/** source: https://github.com/tryber/nodejs-jwt-base-project */
const login = require('./controllers/loginController');
const user = require('./controllers/userController');

module.exports = {
  login,
  user,
};