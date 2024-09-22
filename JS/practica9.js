document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let comentarios = document.getElementById('comentarios').value;
    let contrasena = document.getElementById('contrasena').value;
    let acepto = document.getElementById('acepto').checked;

    if (!validarNombre(nombre)) return;
    if (!validarEmail(email)) return;
    if (!validarComentarios(comentarios)) return;
    if (!validarContrasena(contrasena)) return;
    if (!validarAcepto(acepto)) return;

    alert("Formulario enviado correctamente.");
});

function validarNombre(nombre) {
    if (nombre === "") {
        alert("El campo de nombre es obligatorio.");
        return false;
    }
    return true;
}

function validarEmail(email) {
    let patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        alert("El campo de correo electrónico es obligatorio.");
        return false;
    } else if (!patronEmail.test(email)) {
        alert("Introduce un correo electrónico válido.");
        return false;
    }
    return true;
}

function validarComentarios(comentarios) {
    if (comentarios === "") {
        alert("El campo de comentarios es obligatorio.");
        return false;
    } else if (comentarios.length > 50) {
        alert("El campo de comentarios no debe exceder los 50 caracteres.");
        return false;
    }
    return true;
}

function validarContrasena(contrasena) {
    let patronContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (contrasena === "") {
        alert("El campo de contraseña es obligatorio.");
        return false;
    } else if (!patronContrasena.test(contrasena)) {
        alert("La contraseña debe tener al menos 6 caracteres, una letra minúscula, una mayúscula y un número.");
        return false;
    }
    return true;
}

function validarAcepto(acepto) {
    if (!acepto) {
        alert("Debes aceptar los términos y condiciones.");
        return false;
    }
    return true;
}
