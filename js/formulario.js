const producto = document.querySelector('#productos');
const subProducto = document.querySelector('#subproductos');
const tipoDocumento = document.querySelector('#tipo-documento');
const nDocumento = document.querySelector('#n-documento');
const nombres = document.querySelector('#nombres');
const apellidos = document.querySelector('#apellidos');
const edad = document.querySelector('#edad');
const estadoCivil = document.querySelector('#estado-civil');
const correo = document.querySelector('#correo');
const ciudad = document.querySelector('#ciudad');
const direccion = document.querySelector('#direccion');
const inputList = document.querySelectorAll('.campo-input');
const form = document.querySelector('.formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let condicion = validarFormulario();
    if( condicion === true ){
        enviarFormulario();
    }
})

function validarFormulario(){
    let condicion = true;
    inputList.forEach(elemento => {
        elemento.lastElementChild.innerHTML = '';
        elemento.firstElementChild.style.color = '';
        elemento = producto.style.border = '';
        elemento = subProducto.style.border = '';
        elemento = tipoDocumento.style.border = '';
        elemento = nDocumento.style.border = '';
        elemento = nombres.style.border = '';
        elemento = apellidos.style.border = '';
        elemento = edad.style.border = '';
        elemento = estadoCivil.style.border = '';
        elemento = correo.style.border = '';
        elemento = ciudad.style.border = '';
        elemento = direccion.style.border = '';
    })

    if( producto.selectedIndex === 0 || producto.selectedIndex == null ){
        inputsInvalidos('productos', 'Este campo es requerido', 'producto-label', 'campo__field--productos');
        condicion = false;
    }

    if( subProducto.selectedIndex === 0 || subProducto.selectedIndex == null ){
        inputsInvalidos('subproductos', 'Este campo es requerido', 'label-subproducto', 'campo__field--subproductos');
        condicion = false;
    }

    if( tipoDocumento.selectedIndex === 0 || tipoDocumento.selectedIndex == null ){
        inputsInvalidos('tipo-documento', 'Este campo es requerido', 'label-tipoDocumento', 'campo__field--tipoDocumento');
        condicion = false;
    }

    if( nDocumento.value.lenght < 1 || nDocumento.value.trim() === '' ){
        inputsInvalidos('n-documento', 'Este campo es requerido', 'label-nDocumento', 'campo__field--nDocumento');
        condicion = false;
    }

    if( nombres.value.lenght < 1 || nombres.value.trim() === '' ){
        inputsInvalidos('nombres', 'Este campo es requerido', 'label-nombres', 'campo__field--nombres');
        condicion = false;
    }

    if( apellidos.value.lenght < 1 || apellidos.value.trim() === '' ){
        inputsInvalidos('apellidos', 'Este campo es requerido', 'label-apellidos', 'campo__field--apellidos');
        condicion = false;
    }

    if( edad.value.lenght < 1 || edad.value.trim() === '' ){
        inputsInvalidos('edad', 'Este campo es requerido', 'label-edad', 'campo__field--edad');
        condicion = false;
    }

    if( estadoCivil.selectedIndex === 0 || estadoCivil.selectedIndex == null ){
        inputsInvalidos('estado-civil', 'Este campo es requerido', 'label-estado', 'campo__field--estado');
        condicion = false;
    }

    if( correo.value.lenght < 1 || correo.value.trim() === '' ){
        inputsInvalidos('correo', 'Este campo es requerido', 'label-correo', 'campo__field-correo');
        condicion = false;
    }

    if( ciudad.value.lenght < 1 || ciudad.value.trim() === '' ){
        inputsInvalidos('ciudad', 'Este campo es requerido', 'label-ciudad', 'campo__field--ciudad');
        condicion = false;
    }

    if( direccion.value.lenght < 1 || direccion.value.trim() === '' ){
        inputsInvalidos('direccion', 'Este campo es requerido', 'label-direccion', 'campo__field--direccion');
        condicion = false;
    }

    return condicion;
}

function inputsInvalidos(clase, mensaje, elemento, obligatorios){
    let ultimoElemento = document.querySelector(`.${clase}`);
    ultimoElemento.lastElementChild.innerHTML = mensaje;
    let camposInvalidos = document.querySelector(`.${obligatorios}`);
    camposInvalidos = producto.style.border = '1px solid red';
    camposInvalidos = subProducto.style.border = '1px solid red';
    camposInvalidos = tipoDocumento.style.border = '1px solid red';
    camposInvalidos = nDocumento.style.border = '1px solid red';
    camposInvalidos = nombres.style.border = '1px solid red';
    camposInvalidos = apellidos.style.border = '1px solid red';
    camposInvalidos = edad.style.border = '1px solid red';
    camposInvalidos = estadoCivil.style.border = '1px solid red';
    camposInvalidos = correo.style.border = '1px solid red';
    camposInvalidos = ciudad.style.border = '1px solid red';
    camposInvalidos = direccion.style.border = '1px solid red';
    let primerElemento = document.querySelector(`.${elemento}`);
    primerElemento.firstElementChild.style.color = 'red';
}

function enviarFormulario(){
    form.reset();
    form.lastElementChild.innerHTML = 'Los campos fueron enviados correctamente';
}

form.addEventListener('keyup', (e) => {
    e.preventDefault();
    let condicion = validarFormulario();
    if( condicion === true ){
        enviarFormulario();
    }
})

