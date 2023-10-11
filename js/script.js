function alerta() {
    alert("Actualizado")
}

$eliminar = document.getElementById('eliminar');
$actualizar = document.getElementById('actualizar');
$contenedor = document.getElementById('main');


//  Evento click

$eliminar.addEventListener('click', function() {
    let aviso = document.createElement('div');
    aviso.textContent = 'Registro eliminado';
    setTimeout(() => {
        $contenedor.parentNode.removeChild(aviso)

        $contenedor.appendChild(aviso);
    }, 1000);

    
});

