function copiarCorreo() {

    const correo = "luisgabrielhernandezresendiz@gmail.com";

    navigator.clipboard.writeText(correo)
        .then(() => {
            alert("Correo copiado al portapapeles");
        })
        .catch(() => {
            alert("No se pudo copiar el correo");
        });

}



function enviarCorreo() {

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    const correoDestino = "luisgabrielhernandezresendiz@gmail.com";

    const cuerpo = `
Nombre: ${nombre}
Correo: ${correo}

${mensaje}
`;

    const url =
        "https://mail.google.com/mail/?view=cm&fs=1" +
        "&to=" + encodeURIComponent(correoDestino) +
        "&su=" + encodeURIComponent(asunto) +
        "&body=" + encodeURIComponent(cuerpo);

    window.open(url, "_blank");

}