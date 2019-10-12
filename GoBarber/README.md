# GoBarber - Backend NodeJS

Anotações sobre o desenvolvimento da aplicação.

- `yarn dev` - start
- `yarn queue` - start fila
- `docker start redisbarber mongobarber database`

## Steps: commands used in the Terminal and configs

`yarn init -y`

### Styles configs

- `yarn add eslint -D`
- `yarn eslint --init`
- `rm package-lock.json`
- `yarn`
- `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`

### EditorConfig

- Download editor plugin
- Right click on root folder and choose `Generator .editorconfig`

### Express

- `yarn add express`

### Nodemon

- `yarn add nodemon -D`
- Add on Package.json:
  ```json
  "scripts": {
      "dev": "nodemon src/server.js"
    },
  ```

### Sucrase

- `yarn add sucrase -D`
- Create new file on root: nodemon.json.
- Script to run Sucrase not Node when running Nodemon:
  ```json
  {
    "execMap": {
      "js": "sucrase-node"
    }
  }
  ```

### Sequelize

- `yarn add sequelize`
- `yarn add sequelize-cli -D` - To use Sequelize on command line
- `yarn add pg pg-hstore` - To use dialect postgres
- Create new file: .sequelizerc
- Exporta os caminhos e pastas dos arquivos que serão utilizados pelo Sequelize.
- CommonJS

### First migration

- `yarn sequelize migration:create --name=create-users` - Creating the first migration to create the first DB table
- `yarn sequelize db:migrate` - Run pending migrations

### YUP

- JavaScript object schema validator and object parser.
- `yarn add yup`

### Bcryptjs

- `yarn add bcryptjs`

### Jsonwebtoken

- `yarn add jsonwebtoken`
- O método verify do JWT usa por padrão de callback na chamada async. Para contornar o padrão callback e usar async/await podemos usar o `promisify` da lib `util` do próprio NodeJS.

### Promisify from util

- Função para "transformar" um função de callback em async/await
- `import { promisify } from 'util';`
- `util` Biblioteca que vem por padrão no Node

## Multer

- `yarn add multer`
- Biblioteca para lidar com multipart form data

## Date-fns

- Lidar com datas no Node
- `yarn add date-fns@next`

## Mongo

- Montando a imagem do MongoDB pro GoBarber
- `docker run --name mongobarber -p 27017:27017 -d -t mongo`
- `yarn add mongoose` - lib para lidar com o Mongoose

## Nodemailer

- Lib para enviar email
- `yarn add nodemailer`

## Handlebars

- Lib para lidar com template engines para emails
- `yarn add express-handlebars nodemailer-express-handlebars`

## Redis

- Banco de dados não relacional chave/valor
- `docker run --name redisbarber -p 6379:6379 -d -t redis:alpine`
- `:alpine` para uma versão mais leve

## Sistemas de filas

- _Kue_ - Mais robusto.
- _BeeQueue_ - Mais leve e mais performance.
- Todos os trabalhos dentro de filas são chamados de _jobs_. Nomenclatura herdada do termo background jobs.

## BeeQueue

- Ferramenta de background jobs(fila) dentro do Node. Menos funcionalredreidades e mais perfomance.
- `yarn add bee-queue`

## Sentry

- Tratar erros
- `sentry.io`
- `yarn add @sentry/node@5.6.2`

## Express Async Error

- Resolve o problema do express não captar erros quando usa-se async.
- `yarn add express-async-errors`

## Youch

- Entrega o erro de forma mais amigável
- `yarn add youch`

## Dotenv

`yarn add dotenv`
