// Criando o rotas

const { Router } = require("express");
// Importa apenas uma parte do express

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

module.exports = routes;
