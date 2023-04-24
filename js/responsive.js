// Creando un menú de hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
    navegacionFija();
});

function eventListeners(){
    const menuResponsive = document.querySelector('.navegacion-responsive');
    menuResponsive.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion-principal');
    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
    } else {
        navegacion.classList.add('mostrar');
    }
}

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

