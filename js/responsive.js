// Creando un menú de hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
    navegacionFija();
});

function eventListeners(){
    const navegacionResponsive = document.querySelector('.navegacion-responsive');
    navegacionResponsive.addEventListener('click', menuResponsive);
}

function menuResponsive(){
    const navegacionPrincipal = document.querySelector('.navegacion');
    if( navegacionPrincipal.classList.contains('mostrar') ){
        navegacionPrincipal.classList.remove('mostrar');
    } else {
        navegacionPrincipal.classList.add('mostrar');
    }
}

// Fijar el menu 

function navegacionFija(){
    const barra = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function() {
        if( footer.getBoundingClientRect().top < 0 ){
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    })
}

