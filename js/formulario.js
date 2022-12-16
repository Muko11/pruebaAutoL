//var btnCrearCuenta = document.getElementById('b-crear-cuenta');
//var btnIniciarSesion = document.getElementById('b-iniciar-sesion');

function mostrarFormularioCrearCuenta() {
    document.getElementById('f-crear-cuenta').style.display = 'block';
    document.getElementById('f-iniciar-sesion').style.display = 'none';

    document.getElementById('b-iniciar-sesion').style.textDecoration = 'none';
    document.getElementById('b-crear-cuenta').style.textDecoration = 'underline';
    document.getElementById('b-crear-cuenta').style.transform = 'scale(1.1)';
    document.getElementById('b-iniciar-sesion').style.transform = 'scale(0.8)';
}

function mostrarFormularioLogin() {
    document.getElementById('f-crear-cuenta').style.display = 'none';
    document.getElementById('f-iniciar-sesion').style.display = 'block';

    document.getElementById('b-iniciar-sesion').style.textDecoration = 'underline';
    document.getElementById('b-crear-cuenta').style.textDecoration = 'none';
    document.getElementById('b-iniciar-sesion').style.transform = 'scale(1.1)';
    document.getElementById('b-crear-cuenta').style.transform = 'scale(0.8)';
}

function cambiarContraseña() {
    if (document.getElementById('checkContraseña').checked) {
        //!document.getElementById('checkContraseña').checked;
        document.getElementById('f-cambiar-contraseña').style.display = 'block';
        document.getElementById('f-datos').style.display = 'none';
    } else {
        document.getElementById('f-cambiar-contraseña').style.display = 'none';
        document.getElementById('f-datos').style.display = 'block';
    }
}

/* function ocultarCaracteristicas() {
    if (document.getElementById('checkCaracteristicas').checked) {
        document.getElementById('container-caracteristicas').style.display = 'none';
    } else {
        document.getElementById('container-caracteristicas').style.display = 'block';
    }
} */