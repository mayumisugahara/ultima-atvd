// server.js

// Importa o express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Porta para o servidor (3000 por padrão)

// Dados fictícios sobre os aplicativos mais utilizados no mundo
const appsData = [
  { id: 1, name: 'WhatsApp', category: 'Messaging', users: '2.24 billion' },
  { id: 2, name: 'Facebook', category: 'Social Media', users: '2.91 billion' },
  { id: 3, name: 'Instagram', category: 'Social Media', users: '2.35 billion' },
  { id: 4, name: 'WeChat', category: 'Messaging', users: '1.26 billion' },
  { id: 5, name: 'TikTok', category: 'Social Media', users: '1.0 billion' },
  { id: 6, name: 'YouTube', category: 'Video Sharing', users: '2.7 billion' }
];

// Rota principal que retorna a lista de apps mais utilizados
app.get('/api/apps', (req, res) => {
  res.json(appsData);
});

// Rota para pegar detalhes de um aplicativo específico
app.get('/api/apps/:id', (req, res) => {
  const appId = parseInt(req.params.id);
  const app = appsData.find(a => a.id === appId);

  if (app) {
    res.json(app);
  } else {
    res.status(404).send('App not found');
  }
});

// Inicia o servidor na porta definida
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
