/** source: https://github.com/tryber/nodejs-jwt-base-project */
/** source: https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/jwt-json-web-token/acf1c24f-d531-4cf0-be9b-2384e37799d7/conteudos/d22aa12a-a9fd-448f-865a-ec8de7f521e6/implementando-jwt/b81401e2-ade1-4d90-94b9-e6d971915d36?use_case=side_bar */

require('dotenv').config();
const app = require('./api');
//
const routes = require('./routes');
const error = require('./middlewares/errorMiddlewares');

const validator = require('./authentication/validator');
// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.get('/categories', validator, routes.categoryGet);
app.get('/user/:id', validator, routes.userIdGet);
app.get('/user', validator, routes.userGet);

app.post('/post', validator, routes.post);
app.post('/categories', validator, routes.categoryPost);
app.post('/login', routes.login);
app.post('/user', routes.userPost);

app.use(error);
app.listen(port, () => console.log('ouvindo porta', port));
