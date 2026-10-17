const formulario = document.getElementById("loginForm");
const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contrasena");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (usuario.value.trim() === "" || contrasena.value.trim() === "") {
        mensaje.textContent = "Debes completar todos los campos.";
        return;
    }

    mensaje.textContent = "Formulario enviado correctamente.";
    mensaje.style.color = "green";
});