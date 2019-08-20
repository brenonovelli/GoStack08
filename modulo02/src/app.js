// Criando a estrutura da aplicação

const express = require("express");
// Na nova versão do JS poderia ser chamado da seguinte forma:
// import express form 'express';
const routes = require("./routes");

class App {
  // Método constructor é chamado automaticamente quando a classe é instanciada.
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Preparando para receber req no formato json
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    // As rotas também são middlewares. Por isso pode chamar dentro do use.
  }
}

module.exports = new App().server;
