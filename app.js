const express = require('express');

// esta variable global , es de tipo array. Con ello, podemos usar entonces métodos de array, como 'push'
const imagenes = []

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }))

const path = require('path')

app.get('/', (req, res) => {
    // {
    //     imagenes
    // }

    // es lo mismo que 

    // {
    //     imagenes:imagenes
    // }

    res.render('index', {
        imagenes
    })
})

app.get('/anadir', (req, res) => {
    res.render('nueva-imagen', {
        error: false
    });
})

app.post('/anadir', (req, res) => {
    console.log(req.body);

    // voy a comprobar si ya existe una imagen con el mismo título

    // Alternativamente podrías hacer una búsqueda con un bucle
    const hayImagenMismoTitulo = imagenes.some(imagen => imagen.titulo == req.body.titulo);

    // Si la imagen no está repetida, la añadimos a la base de datos y le damos un mensaje de OK al usuario
    if (!hayImagenMismoTitulo) {
        imagenes.push({
            titulo: req.body.titulo
        });
        return res.send('Fotografía recibida!');
    }

    // Si la imagen está repetida, informar al usuario
    // una técnica seria renderizar la misma vista del formulario, pero con un mensaje error
    res.render('nueva-imagen', {
        error: true
    })

})

app.listen(3000);