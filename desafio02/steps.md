# GoStack - Desafio 02

## Steps: commands used in the Terminal and configs

`yarn init -y`

### Styles configs
* `yarn add eslint -D`
* `yarn eslint --init`
* `rm package-lock.json`
* `yarn`
* `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`

### EditorConfig
* Download editor plugin
* Right click on root folder and choose `Generator .editorconfig`


### Express
* `yarn add express`

### Nodemon
* `yarn add nodemon -D`
* Add on Package.json:
  ```json
  "scripts": {
      "dev": "nodemon src/server.js"
    },
  ```

### Sucrase
* `yarn add sucrase -D`
* Create new file on root: nodemon.json.
* Script to run Sucrase not Node when running Nodemon:
  ```json
  {
  "execMap": {
    "js": "sucrase-node"
    }
  }
  ```

### Sequelize
* `yarn add sequelize`
* `yarn add sequelize-cli -D` - To use Sequelize on command line
* `yarn add pg pg-hstore` - To use dialect postgres
* Create new file: .sequelizerc
* Exporta os caminhos e pastas dos arquivos que serão utilizados pelo Sequelize.
* CommonJS

### First migration
* `yarn sequelize migration:create --name=create-users` - Creating the first migration to create the first DB table
* `yarn sequelize db:migrate` - Run pending migrations

