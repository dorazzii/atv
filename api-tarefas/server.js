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
  const { concluida } = req.query;

  if (concluida !== undefined) {
    const filtro = concluida === 'true';
    const tarefasFiltradas = tarefas.filter((t) => t.concluida === filtro);
    return res.json(tarefasFiltradas);
  }

  res.json(tarefas);
});

app.get('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id);
  const tarefa = tarefas.find((t) => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

  res.json(tarefa);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});