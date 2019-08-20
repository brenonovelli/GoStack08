// Corrigido
const express = require("express");

const server = express();

server.use(express.json());

const projects = [];
let numberOfRequests = 0;

/* Middlewares */

// Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(item => item.id == id);

  if (!project) {
    return res.status(400).json({ error: "Project not found." });
  }

  return next();
}

// Crie um middleware global chamado em todas requisições que imprime (console.log) uma contagem de quantas requisições foram feitas na aplicação até então;
/*

server.use((req, res, next) => {
  count++;
  console.log(count);

  return next();
});

*/

function logRequests(req, res, next) {
  numberOfRequests++;

  console.log(`Número de requisições: ${numberOfRequests}`);

  return next();
}

server.use(logRequests);

/* Rotas */

// POST /projects: A rota deve receber id e title dentro corpo de cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] }; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com àspas duplas.

server.post("/projects", (req, res) => {
  const project = req.body;
  const { id, title } = req.body;
  projects.push(project);

  return res.json({
    message: `#${id} - O projeto ${title} foi cadastrado com sucesso.`
  });
});

// GET /projects: Rota que lista todos projetos e suas tarefas;
server.get("/projects/", (req, res) => {
  return res.json(projects);
});

// PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;
server.put("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(item => item.id == id);
  project.title = title;

  return res.json(project);
});

// DELETE /projects/:id: A rota deve deletar o projeto com o id presente nos parâmetros da rota;
server.delete("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(item => item.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

// POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;
server.post("/projects/:id/tasks", checkProjectExists, (req, res) => {
  const { title } = req.body;
  const { id } = req.params;
  const project = projects.find(item => item.id == id);

  project.tasks.push(title);

  return res.json(project);
});

server.listen(3000);
