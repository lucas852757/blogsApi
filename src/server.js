require('dotenv').config();
const app = require('./api');
//
const controller = require('./controllers/loginController');
const error = require('./middlewares/errorMiddlewares');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', controller.login);

app.use(error);
app.listen(port, () => console.log('ouvindo porta', port));
