<h1> BlogsApi </h1>

# Sobre
O projeto **BlogsApi** é um projeto que envolve os conhecimento sobre ORM E JWT. Nesse projeto, foi desenvolvido uma api para blogs seguindo os princípios do REST
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

- Lembre-se de para o `mysql` se voçês estiver usando localmente na porta `3306`, ou adapte, caso queira fzer uso da aplicação em containers;

- Esses servicos irão inicializar um container `blogs_api` e outro chamado `blogs_api_db`;
---
# Testando a aplicação
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
## 4 - Acesse o endpoint Get `/user/:id`
- O endpoint está acessível atrvés da URL `/user/:id`
## 5 - Acesse o endpoint Post `/categories`
- O endpoint está acessível atrvés da URL `/categories`
## 6 - Acesse o endpoint Get `/categories`
- O endpoint está acessível atrvés da URL `/categories`
## 7 - Acesse o endpoint Post `/post`
- O endpoint está acessível atrvés da URL `/post`
## 8 - Acesse o endpoint Get `/post`
- O endpoint está acessível atrvés da URL `/post`
## 9 - Acesse o endpoint Get `/post/:id`
- O endpoint está acessível atrvés da URL `/post:id`
## 10 - Acesse o endpoint Put `post/:id`
- O endpoint está acessível atrvés da URL `/post/id`
## 11 - Acesse o endpoint Delete `post/:id`
- O endpoint está acessível atrvés da URL `/post/:id`
## 11 - Acesse o endpoint Delete `user/me`
- O endpoint está acessível atrvés da URL `/user/me`
## 12 - Acesse o endpoint Get `/post/search?q=:serachTerm`
- O endpoint está acessível atrvés da URL `/post/serach`


