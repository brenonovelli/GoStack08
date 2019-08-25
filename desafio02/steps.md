# GoStack - Desafio 02

## Suggested structure

## Scripts and configs
### Nodemon + sucrase
**Add on Package.json**
```json
"scripts": {
    "dev": "nodemon src/server.js"
  },
```

**Create new file on root: nodemon.json**

Rodar Sucrase ao chamar o *Nodemon* e não o Node.
```json
{
"execMap": {
  "js": "sucrase-node"
  }
}
```








## Steps: commands used in the Terminal and configs

`yarn init -y`

`yarn add eslint -D`

`yarn eslint --init`

`rm package-lock.json`

`yarn`

`yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`

**EditorConfig** - Download plugin
* Right click on root folder and choose `Generator .editorconfig`

`yarn add express`

`yarn add sucrase nodemon -D`

**Sequelize**
* `yarn add sequelize`
* `yarn add sequelize-cli -D`
* Create new file: .sequelizerc
* Exporta os caminhos e pastas dos arquivos que serão utilizados pelo Sequelize.
* CommonJS

`yarn add pg pg-hstore`

**First migration**
* Creating the first migration to create the first DB table
* `yarn sequelize migration:create --name=create-users`
* `yarn sequelize db:migrate`

