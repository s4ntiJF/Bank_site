const producto = document.querySelectorAll('#productos option');
const subproducto = document.querySelectorAll('#subproductos option');
const tipoDocumento = document.querySelectorAll('#tipo-documento option');
const nDocumento = document.querySelector('#n-documento');
const nombres = document.querySelector('#nombres');
const apellidos = document.querySelector('#apellidos');
const edad = document.querySelector('#edad');
const estadoCivil = document.querySelectorAll('#estado-civil option');
const correo = document.querySelector('#correo');
const ciudad = document.querySelector('#ciudad');
const direccion = document.querySelector('#direccion');
const formulario = document.querySelector('.formulario');
const obligatorio = document.querySelector('#obligatorio');
obligatorio.style.color = 'red';


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let mensajeError = [];

    if( nDocumento.value === '' || nDocumento.value == null ){
        mensajeError.push('Este campo es requerido');
    }

    if( nombres.value === '' || nombres.value == null ){
        mensajeError.push('Este campo es requerido');
    }

    if( apellidos.value === '' || apellidos.value == null ){
        mensajeError.push('Este campo es requerido');
    }

    if( edad.value === '' || edad.value == null ){
        mensajeError.push('Este campo es requerido');
    }

    if( correo.value === '' || correo.value == null ){
        mensajeError.push('Este campo es requerido');
    }

    if( ciudad.value === '' || ciudad.value == null ){
        mensajeError.push('Este campo es requerido');
    }

    if( direccion.value === '' || direccion.value == null ){
        mensajeError.push('Este campo es requerido');
    }

    obligatorio.innerHTML = mensajeError.join('<br>');
})
