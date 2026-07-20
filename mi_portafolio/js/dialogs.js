const dialogo = document.getElementById('miDialogo');
const botonAbrir = document.getElementById('abrir');
const botonCerrar = document.getElementById('cerrar');

botonAbrir.addEventListener('click', function () {
    dialogo.showModal();
});

botonCerrar.addEventListener('click', function () {
    dialogo.close();
});