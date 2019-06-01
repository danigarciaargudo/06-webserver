const express = require('express')
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

//EXPRESS HBS ENGINE
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'dAniel',
        anio: new Date().getFullYear()
    });
})
app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
})
app.get('/data', (req, res) => {
    let salida = { nombre: 'Laura', apellidos: 'Andújar Aparicio', url: req.url };
    res.send(salida);
})

app.listen(3000, () => {
    console.log('Escuchando puerto 3000')
});