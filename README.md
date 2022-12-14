<h1> BlogsApi </h1>

# Sobre
O projeto **BlogsApi** é um projeto que envolve os conhecimentos sobre ORM E JWT, adquiridos na **Trybe**. Nesse projeto, foi desenvolvido uma api para blogs seguindo os princípios do REST
, utilizando o Sequelize como um ORM e autenticação em JWT.

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:
- dotenv
- express
- express-async-errors
- joi
- jsonwebtoken
- mysql2
- sequelize

## Como baixar o projeto
1. Clone o repositório
```Bash
 git clone git@github.com:lucas852757/blogsApi.git
```
2. Entre na pasta do repositóirio que você acabou de clonar:
```Bash
cd BlogsApi
```
3. Instale as dependências [Caso existam]
```Bash
npm install
```
## Como executar o projeto com o Docker
Antes de começar, seu docker-compose precisa estar na versção 1.29 ou superior. Veja [aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou na [documentação](https://docs.docker.com/compose/install/) como instalá-lo.

>: information_source: Rode os serviços `node` e `db` como o comando: `docker-compose up -d --build`.

- Lembre-se de parar o `mysql` se vocês estiver usando localmente na porta `3306`, ou adapte, caso queira fazer uso da aplicação em containers;

- Esses servicos irão inicializar um container `blogs_api` e outro chamado `blogs_api_db`;
---
## Como executar o projeto sem o Docker
- Instale as dependências [Caso existam]
```Bash
npm install
```
- Para testar o projeto, tenha o **node** instalado em seu computador

# Testando a aplicação
<details>
  <summary>
  Antes de testar o api:
  </summary>

  - Antes de testar a api, crie o arquivo .env na raiz aplicação em /blogsApi/.env . Este arquivo é importante, porque contém variávies de ambientes utilizadas por esta aplicação: 
  ```Bash
  #### SERVER VARS
  NODE_ENV=development
  API_PORT=3002

  #### DATABASE VARS
  MYSQL_HOST=localhost
  MYSQL_PORT=3306
  MYSQL_DB_NAME=blogs-api
  MYSQL_USER=root
  MYSQL_PASSWORD=password

  #### SECRECT VARS
  JWT_SECRET=suaSenhaSecreta

  ```
  >:aviso: Se você  receber esta menssagem abaixo, ajuste o valor da variável de ambiente  API_PORT=3002, para um valor que não dê conflito.
  ```Bash
  (node:17711) [SEQUELIZE0002] DeprecationWarning: The logging-option should be either a function or false. Default: console.log
(Use `node --trace-deprecation ...` to show where the warning was created)
node:events:368
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::3000
    at Server.setupListenHandle [as _listen2] (node:net:1334:16)
    at listenInCluster (node:net:1382:12)
    at Server.listen (node:net:1469:7)
    at Function.listen (/home/lucas/Documents/trybe_19_b/projetos/sd-019-b-project-blogs-api/node_modules/express/lib/application.js:618:24)
    at Object.<anonymous> (/home/lucas/Documents/trybe_19_b/projetos/sd-019-b-project-blogs-api/src/server.js:37:5)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
Emitted 'error' event on Server instance at:
    at emitErrorNT (node:net:1361:8)
    at processTicksAndRejections (node:internal/process/task_queues:83:21) {
  code: 'EADDRINUSE',
  errno: -98,
  syscall: 'listen',
  address: '::',
  port: 3000
}
  ```
  - Digite no terminal:
  ```Bash
  npm run prestart // tecle enter
  npm run seed // tecle enter
  ```
  - É necessário iniciar este projeto! Então, para isso digite no terminal:
  ```Bash
  npm start
  ```
</details>

## 1 - Acesse o endpoint Get `/login`
- O endpoint está acessível atrvés da URL `/login`
- O corpo da requisição deverá ter o seguinte formato:
```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```
  <details>
    <summary><strong>Os seguinte pontos são cobertos</strong></summary>
  
   - Se o requisição não contém todos os dados preenchidos(não pose haver campos em branco), o resultado será como mostrado abaixo, com status `http 400`:
   ```json
    {
      "message": "Some required fields are missing"
    }
   ```
  - Se a requisicão receber um par de `email` e `password` errados/inválidos, o resultado será como mostrado abaixo, com status `http400`:
  ```json
    {
      "message": "Invalid fields"
    }
  ```
  - Se o login foi realizado com sucesso, o resultado retornado deverá ser como mostrado abaixo, com status `http 200`:
  ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJkaXNwbGF5TmFtZSI6Ikxld2lzIEhhbWlsdG9uIiwiZW1haWwiOiJsZXdpc2hhbWlsdG9uQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaW1hZ2UiOiJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzEvMTgvTGV3aXNfSGFtaWx0b25fMjAxNl9NYWxheXNpYV8yLmpwZyJ9LCJpYXQiOjE2Njc0MzIzNzh9.OcDCr7vq3CeWOvk6WpePTFaa7jacQqZvvuv17-CExAY"
    }
  ```
  </details>

  ---

## 2 - Acesse o endpoint Post `/user`
- O endpoint está acessível atrvés da URL `/user`
- O endpoint adiciona um novo `user` a sua tabela no banco de dados.
- A requisição deve seguir o seguinte formato abaixo:
```Bash
{
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
```
<details>
  <summary>
    Os seguintes pontos são cobertos:
  </summary>

  - Se a requisição não tiver o campo `displayName` devidamente preenchido com 8 ou mais caracteres, o resultadod retornado será exibido conforme abaixo, com status `http 400`:

  ```json
    {
      "message": "\"displayName\" length must be at least 8 characters long"
    }
  ```
  - Se a requisição não tiver o campo `email` devidamente preenchido com o formato `<prefixo@sufixo>`, o resultado retornado será exibido conforme abaixo, com status `http 400`:

  ```json
    {
      "message": "\"email\" must be a valid email"
    }
  ```
- Se a requisição não tiver o campo `password`devidamente preenchido com 6 o mais caracteres, o resultado retornado será exibido conforme abaixo, com status `http 400`:

```json
    {
      "message": "\"password\" length must be at least 6 characters long"
    }
```
- Se a requisição enviar enviar um campo `email` com um email já existente, o resultado retornado será exibido conforme abaixo, com status `http 409`:

```json
    {
      "message": "User already registered"
    }
```

- Se o user for criado com sucesso, o resultado retornado será exibido conforme abaixo, com status `http 201`:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJkaXNwbGF5TmFtZSI6IkJyZXR0IFdpbHRzaGlyZSIsImVtYWlsIjoiYnJldHRAZW1haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpbWFnZSI6Imh0dHA6Ly80LmJwLmJsb2dzcG90LmNvbS9fWUE1MGFkUS03dlEvUzFnZlJfNnVmcEkvQUFBQUFBQUFBQWsvMUVySkdnUldaRGcvUzQ1L2JyZXR0LnBuZyJ9LCJpYXQiOjE2Njc0MzczOTF9.0uD0KDs7iaE-1xrnDQ5HshWBfiyEC3qWdhfPMMUI2WY"
}
```
</details>

---

## 3 - Acesse o endpoint Get `/user`
- O endpoint está acessível atrvés da URL `/login`
- O endpoint trás todos os `users` do banco de dados

<details>
  <summary>
    Os seguinites pontos são cobertos
  </sumary>
  
  - Ao listar todos os usuários com sucesso, o resultado retornado será exibido como abaixo, com o status `http 200`:
```json
[
  {
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  {
    "id": 2,
    "displayName": "Michael Schumacher",
    "email": "MichaelSchumacher@gmail.com",
    "image": "https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg"
  },
  {
    "id": 3,
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
]
```

</details>

---
## 4 - Acesse o endpoint Get `/user/:id`
- O endpoint está acessível atrvés da URL `/user/:id`
- O endpoint é responsávaiel por trazer o `user` baseado no `id` do banco de dados
<details>
  <summary>
    Os seguintes pontos são cobertos
  </summary>

  - Ao listart um usuário com sucesso, o resultado retornado será como exibido abaixo, com status `http 200`;
  ```json
  {
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  }
  ```
  - Se um usuário for inexistente, o resultado retornado será como exibido abaixo, com status `http 404`:
  
  ```json
  {
    "message": "User does not exist"
  }
  ```
</details>

---

## 5 - Acesse o endpoint Post `/categories`
- O endpoint está acessível atrvés da URL `/categories`
- O endpoint adiciona uma nova categoria na sua tabela do banco de dados
- A requisição deverá ter o formato abaixo:
```Bash
{
  "name":"New category"
}
```

<details>
  <summary>
    Os seguintes pontos são cobertos
  </summary>

  - Se a requisição não tiver o campo `name`, o resultado retornado será como exibido abaixo, com status `http 400`:
  ```json
  {
    "message": "\"name\" is required"
  }
  ```
  - Se a requisição tiver o campo `name` vazio, o resultado retornado será como exibido abaixo, com status `http 400`:
  ```json
  {
    "message": "\"name\" is not allowed to be empty"
  }
  ```
  - Se uma nova cateogoria for criada com sucesso, o resultado retornado será exibido como abaixo, com status `http 2001`:
  ```json
  {
    "id": 3,
    "name": "Typescript"
  }
  ```
</details>

---

## 6 - Acesse o endpoint Get `/categories`
- O endpoint está acessível atrvés da URL `/categories`
- O endpoint tráz todas as categorias criadas na sua tabela do banco de dados

<details>
  <summary>
    Os seguintes pontos são cobertos
  </summary>
  
  - Se o retorno da requisição for realizado com sucesso, o resultado retornado será como exibido abaixo, com status `http 200`:
  ```json
  [
  {
    "id": 1,
    "name": "Inovação"
  },
  {
    "id": 2,
    "name": "Escola"
  },
  {
    "id": 3,
    "name": "Typescript"
  },
  ]
  ```
</details>

----

## 7 - Acesse o endpoint Post `/post`
- O endpoint está acessível atrvés da URL `/post`
- O endpoint adiciona um novo blog post e vincuá-lo as categorias da sua tabela no banco de dados
- A requisição deve ter o seguinte formato:
```Bash
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
```
<details>
  <summary>
    Os seguintes pontos são cobertos
  </summary>

  - Se a requisição não estiver com todos os campos corretamentes preenchidos (não pode haver espacos em branco), o resultado retornado será como exibido abaixo, com status code `http 400`:
  ```json
  {
    "message": "Some required fields are missing"
  }
  ```

  - Se a requisição não tiver o campo `categoryIds` preenchido com um array com no mínimo uma categoria existente, o resultado retornado será como exibido abaixo, com status `http 400`:
  ```json
  {
    "message": "\"categoryIds\" not found"
  }
  ```

  - Se o blog post for criado com sucesso, o resultado retornado será como exibido abaixo, com status `http 201`:
  ```json
  {
    "id": 3,
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "userId": 1,
    "published": "2022-11-03T23:44:51.000Z",
    "updated": "2022-11-03T23:44:51.000Z"
  }
  ```
</details>

---

## 8 - Acesse o endpoint Get `/post`
- O endpoint está acessível atrvés da URL `/post`
- O endpoint tráz todos os blog posts,o user dono e as categorias do banco de dados

<details>
  <summary>
    Os seguintes pontos são cobertos
  </summary>
  
</details>

## 9 - Acesse o endpoint Get `/post/:id`
- O endpoint está acessível atrvés da URL `/post:id`
## 10 - Acesse o endpoint Put `post/:id`
- O endpoint está acessível atrvés da URL `/post/id`
- O endpoint tráz o blog post do `id` se ele existir na tabela do banco de dados

<details>
  <summary>
    Os seguintes pontos são cobertos
  </summary>

  - Se o retorno for realizado com sucesso, o resultado retornado será exibido como abaixo, com status `http 200`:
  ```json
  {
    "id": 1,
    "title": "Post do Ano",
    "content": "Melhor post do ano",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 1,
        "name": "Inovação"
      }
    ]
  }
  ```
  - Se o id não existir no banco de dados, o resultado retornado será exibido como abaixo, com status `http 404`:
  ```json
  {
    "message": "Post does not exist"
  }
  ```

</details>

## 11 - Acesse o endpoint Delete `post/:id`
- O endpoint está acessível atrvés da URL `/post/:id`
- O endpoint deleta o blog post realicinado ao `id` do user
- O user que não é dono do post não consegue deletá-lo

<details>
  <summary>
    Os seguintes pontos são cobertos
  </summary>

  - Se o user não for o dono do post, o resultdado retornado será como exibido abaixo, com status `http 401`:
  ```json
  {
    "message": "Unauthorized user"
  }
  ```
  - Se o user for o dono do post, não será retornado nenhum resultado como resposta, apenas o status `http 204`

  - Se o post não existe, o resultado retornao será como exibido abaixo, com status `http 401`:
  ```json
  {
    "message":"Post does not exist"
  }
  ```
</details>

## 12 - Acesse o endpoint Delete `user/me`
- O endpoint está acessível atrvés da URL `/user/me`
- O endpoint deleata voçẽ do banco de dados
<details>
  <summary>
    Os seguintes pontos são cobertos
  </summary>

  - Se o user for deletado, não será retornado nenhum resultado, apenas o status `http 204`
</details>

## 12 - Acesse o endpoint Get `/post/search?q=:serachTerm`
- O endpoint está acessível atrvés da URL `/post/serach`
- O endpoint tráz um array de posts de acordo com o termo de pesquisa
- O endpoint tráz um array de posts contendo np título ou no conteúdo o termo de pesquisa
- O endpoint tráz um array vazio, se nenhum post satisfaz a sua pesquisa
- Query para para a requisição:
```js
http://localhos:port/post/search?q=termoDeBusca
```
<details>
  <summary>
    Os seguintes pontos são cobertos
  </summary>

  - Se a requisição for feita pelo título, o resultado retornado será como exibido abaixo, com status `http 200`:

  ```json
  // Get post/search?q=vamos
  [
  {
    "id": 2,
    "title": "Vamos que vamos",
    "content": "Foguete não tem ré",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "password": "123456",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 2,
        "name": "Escola"
      }
    ]
  }
  ]
  ```
- Se a requisição for feita pelo conteúdo, o resultado retornado será como exibido abaixo, com status `http 200`:
```json
  // Get post/search?q=Foguete não tem ré
[
  {
    "id": 2,
    "title": "Vamos que vamos",
    "content": "Foguete não tem ré",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "password": "123456",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 2,
        "name": "Escola"
      }
    ]
  }
]
```
- Se a busca for vazia, o resultado retornado será como exibido abaixo, contendo todos os blog post, com status `http 200`:
```json
[
  {
    "id": 1,
    "title": "Post do Ano",
    "content": "Melhor post do ano",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "password": "123456",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 1,
        "name": "Inovação"
      }
    ]
  },
  {
    "id": 2,
    "title": "Vamos que vamos",
    "content": "Foguete não tem ré",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "password": "123456",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 2,
        "name": "Escola"
      }
    ]
  }
]
```
- Se a busca conter um termo que não existe nos posts, o resultado retornado será como exibido abaixo, com status `http 200`:
```json
 // Get post/search?q=linux
 []
```
</details>
