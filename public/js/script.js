
//variables

const btnEnviar = document.querySelector('#enviar');
const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const radio = document.querySelector('#radio').checked;

const formulario = document.querySelector('#formulario');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


eventos();

function eventos() {

   document.addEventListener('DOMContentLoaded', iniciarApp);
   nombre.addEventListener('blur', validarCampos);
   telefono.addEventListener('blur', validarCampos);
   email.addEventListener('blur', validarCampos);
   mensaje.addEventListener('blur', validarCampos);
   formulario.addEventListener('submit', enviarEmail);
}







//funciones

function iniciarApp() {
   btnEnviar.disabled = true;

}


function validarCampos(e) {

   if (e.target.value.length > 0) {
      const error = document.querySelector('p.error');
      if (error) {
         error.remove();
      }
      e.target.classList.remove('bordes');
      e.target.classList.add('borde_verde');
   } else {
      e.target.classList.remove('borde_verde');
      e.target.classList.add('bordes');
      mostrarError('todos los campos son obligatorios');
   }

   if (e.target.type === 'email') {

      const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



      if (er.test(e.target.value)) {
         const error = document.querySelector('p.error');
         if (error) {
            error.remove();
         }


         e.target.classList.remove('bordes');
         e.target.classList.add('borde_verde');
      } else {
         e.target.classList.remove('borde_verde');
         e.target.classList.add('bordes');
         mostrarError('Email no valido');
      }

   }

  

   if (nombre.value !== '' && telefono.value !== '' && er.test(email.value) !== ''  && mensaje.value !== ''  ) {
      btnEnviar.disabled = false;

     

   } else {

   }

   

}



//mostrar mensaje de error



function mostrarError(mensaje) {
   const mensajeError = document.createElement('p');
   mensajeError.textContent = mensaje;

   mensajeError.classList.add('bordes', 'error');


   const errores = document.querySelectorAll('.error');
   if (errores.length === 0) {
      formulario.insertBefore(mensajeError, document.querySelector('.formulario_segundo'));
   }




}

function enviarEmail(e) {
   e.preventDefault();

   const spinner = document.querySelector('#spinner');
   spinner.style.display = 'flex';

   setTimeout(() => {
      spinner.style.display = 'none';

      const parrafo = document.createElement('p');
      parrafo.textContent = 'Formulario enviado correctamente ';
      
      parrafo.classList.add('borde_verde');
      formulario.insertBefore(parrafo,  document.querySelector('.formulario_segundo'));

      setTimeout(() => {
         parrafo.remove();
         resetearFormulario();
      }, 5000);
   }, 3000);


    

}


function resetearFormulario(){
   formulario.reset();
   iniciarApp();

}


/*index*/


