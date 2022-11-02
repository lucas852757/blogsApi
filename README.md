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
## 2 - Acesse o endpoint Post `/user`
## 3 - Acesse o endpoint Get `/user`
## 4 - Acesse o endpoint Get `/use/:id`
## 5 - Acesse o endpoint Post `/categories`
## 6 - Acesse o endpoint Get `/categories`
## 7 - Acesse o endpoint Post `/post`
## 8 - Acesse o endpoint Get `/post`
## 9 - Acesse o endpoint Get `/post/:id`
## 10 - Acesse o endpoint Put `post/:id`
## 11 - Acesse o endpoint Delete `post/:id`
## 11 - Acesse o endpoint Delete `user/me`
## 12 - Acesse o endpoint Get `/post/search?q=:serachTerm`

