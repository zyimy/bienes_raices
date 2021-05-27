const cookies = document.querySelector('.cookies');
const boton_Aceptar = document.querySelector('.boton_aceptar');


boton_Aceptar.addEventListener('click', () => {
    cookies.classList.remove('active');
    localStorage.setItem('cookieBannerDisplayed', 'true');
});

setTimeout(() => {
    if(!localStorage.getItem('cookieBannerDisplayed'));
        cookies.classList.add('active');
    
  



}, 2000);