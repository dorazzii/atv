const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

let tarefas = [
  { id: 1, titulo: 'Estudar Express.js', concluida: false },
  { id: 2, titulo: 'Fazer os exercícios de middleware', concluida: false },
  { id: 3, titulo: 'Revisar as rotas da API', concluida: true },
];

app.get('/', (req, res) => {
  res.send('API de Tarefas no ar');
});

app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});