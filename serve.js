const express = require('express');
const path = require('path');


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());


app.post('/api/formulario', (req, res) => {
    console.log('Dados recebidos:', req.body); 
    res.send('Formulário recebido com sucesso!');
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});