/** source: https://github.com/tryber/nodejs-jwt-base-project */
const login = require('./controllers/loginController');
const userPost = require('./controllers/userPostController');
const userGet = require('./controllers/userGetController');
const userIdGet = require('./controllers/userIdGetController');
const categoryPost = require('./controllers/categoriesPostController');
const categoryGet = require('./controllers/categoriesGetController');
const post = require('./controllers/postController');
const getPost = require('./controllers/getPostController');

module.exports = {
  login,
  userPost,
  userGet,
  userIdGet,
  categoryPost,
  categoryGet,
  post,
  getPost,
};