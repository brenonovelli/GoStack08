// Criando a estrutura da aplicação

import 'dotenv/config';

import express from 'express';
// Sintaxe nova permitida usar por causa do sucrase
// Sintaxe antiga: const express = require("express");
import path from 'path';
import cors from 'cors';
import Youch from 'youch';
import * as Sentry from '@sentry/node';
import 'express-async-errors';

import routes from './routes';
import sentryConfig from './config/sentry';

import './database';

class App {
  // Método constructor é chamado automaticamente quando a classe é instanciada.
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(cors());
    // Preparando para receber req no formato json
    this.server.use(express.json());
    // Preparando para receber arquivos estáticos
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
    // As rotas também são middlewares. Por isso pode chamar dentro do use.
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }
      return res.status(500).json({ erro: 'Internal server error.' });
    });
  }
}
export default new App().server;
