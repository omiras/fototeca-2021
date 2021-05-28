const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const path = require('path')

app.get('/', (req, res) => {
    res.send(`
    <p><a href="/anadir"> Añadir nueva foto</a></p>
    <p>Lista de fotos de la Fototeca</p>
    `);
})

app.get('/anadir', (req, res) => {
    res.render('nueva-imagen');
})

app.post('/anadir', (req, res) => {
    console.log(req.body);
    res.send('Fotografía recibida!')
})

app.listen(3000);