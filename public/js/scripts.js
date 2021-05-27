const nav = document.querySelector('.bloque-cabecera-inicio');
const redes = document.querySelector('.contenedor-redes-inicio');
const cabecera = document.querySelector('.bloque-cabecera-inicio');



window.addEventListener('scroll', function (e) {
    nav.classList.toggle('active', window.scrollY > 0)


})



window.addEventListener('scroll', eliminarClase);




function eliminarClase(e) {

    if (window.pageYOffset > 10) {
        redes.classList.add('hidden');


    } else {
        redes.classList.remove('hidden');
    }


}










