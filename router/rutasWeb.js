
const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    res.render("index", {titulo:'Pagina de inicio'})
})

router.get('/nosotros', (req, res) =>{
    res.render("nosotros", {titulo:'Pagina de Nosotros'})
})

router.get('/anuncios', (req, res) =>{
    res.render("anuncios", {titulo:'Pagina de Anuncios'})
})

router.get('/blog', (req, res) =>{
    res.render("blog", {titulo:'Pagina de Blog'})
})

router.get('/contacto', (req, res) =>{
    res.render("contacto", {titulo:'Pagina de contacto'})
})


module.exports = router;