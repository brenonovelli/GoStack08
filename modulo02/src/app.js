// Criando a estrutura da aplicação

import express from 'express';
// Sintaxe nova permitida usar por causa do sucrase
// Sintaxe antiga: const express = require("express");

import routes from './routes';

import './database';

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
export default new App().server;
