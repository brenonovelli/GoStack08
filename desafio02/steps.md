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



## All commands used in the Terminal

  `yarn init -y`

  `yarn add express`

  `yarn add sucrase nodemon -D`

