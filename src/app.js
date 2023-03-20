const express = require('express');
const req = require('express/lib/request');
const app = express();
const PORT = 3001;

app.get('/api', (req, res) => {
    res.json({mensaje : 'hola mundo'}).status(200);
});

app.listen(PORT, () => { 
    console.log('Estoy escuchando en el puerto ' + PORT);
});
