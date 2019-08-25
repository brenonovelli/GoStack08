# GoStack - Desafio 02

## Estrutura sugerida

## Scripts e configs
  ### Nodemon + sucrase
  Package.json
    Add:
      ```
      "scripts": {
          "dev": "nodemon src/server.js"
        },
      ```

  New file on root: nodemon.json
    Content:
    ```
    {
    "execMap": {
      "js": "sucrase-node"
      }
    }
    ```



## Todos os comandos usados no terminal

  `yarn init -y`
  `yarn add express`
  `yarn add sucrase nodemon -D`

