const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'API Sistema de Gestión de Citas Médicas - Activa'
  });
});

module.exports = app;