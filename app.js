
const express = require('express');
const app = express();

const puerto = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.set("views", __dirname + ('/views'))

app.use(express.static(__dirname + '/public'));

app.use('/', require('./router/rutasWeb'));




app.listen(puerto, () =>{
    console.log('Escuchando en el puerto',puerto)
})



