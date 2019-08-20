const express = require("express");

const server = express();

server.use(express.json()); // Falando ao express: o corpo das req é json

const users = ["Breno", "Diego", "Bart", "Gabi"];

// Middlewares - Global
server.use((req, res, next) => {
  console.log(`Metódo: ${req.method}; URL: ${req.url};`);

  return next();
});

// Middlewares - Local
function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "User name is required." });
  }
  return next();
}
function checkUserInArray(req, res, next) {
  const user = users[req.params.index];

  if (!user) {
    return res.status(400).json({ error: "User does not exists." });
  }

  req.user = user;

  return next();
}

// Exibindo todos usuário
server.get("/users/", (req, res) => {
  return res.json(users);
});

// Exibindo um usuário
server.get("/users/:index", checkUserInArray, (req, res) => {
  return res.json(req.user);
});

// Criando um usuário
server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

// Editando um usuário
server.put("/users/:index", checkUserInArray, checkUserExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

// Apagando um usuário
server.delete("/users/:index", (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);
  // splice percorre o vetor, chega ao index passado e apaga 1 após

  return res.send();
});

server.listen(3000);

/* Notes

  Query params
    [url]?name=breno
      const name = req.query.name;
      const { id } = req.query;

  Route params
    [url]/users/:id
      const id = req.params.id;
      const { id } = req.params;

  Request body
    { "name": "Breno", "email": "jobs@breno.com.br" }
    const name = req.body.name;
    const { name } = req.body;

  CRUD - Create, Read, Update, Delete
  
  Middleware
    Uma função chamada no meio do caminho. Pode ser global ou local.
    A global será chamada em qualquer requisisção. A local é autoexplicativa.

*/
