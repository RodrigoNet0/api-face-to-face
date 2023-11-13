const express = require('express');
const server = express();
const dados = require('./src/data/face.json')

server.get('/alunos', (req,res) => {
return res.json(dados)
});

server.listen(3000, () => {
console.log('Servidor funcionando...')
});