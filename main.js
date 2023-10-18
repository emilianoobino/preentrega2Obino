let cdDeMusica = {
    artista: "",
    canciones: []
};

function agregarCancion() {
    let titulo = prompt("Ingrese el título de la canción:");
    let duracion = prompt("Ingrese la duración de la canción:");
    cdDeMusica.canciones.push({ titulo, duracion });
    alert(`Canción "${titulo}" agregada al CD.`);
}

function mostrarCanciones() {
    if (cdDeMusica.canciones.length === 0) {
        alert("El CD no contiene canciones.");
    } else {
        let listaCanciones = "Lista de Canciones:\n";
        cdDeMusica.canciones.forEach((cancion, index) => {
            listaCanciones += `${index + 1}. ${cancion.titulo} - Duración: ${cancion.duracion}\n`;
        });
        alert(listaCanciones);
    }
}

function modificarCancion() {
    let index = parseInt(prompt("Ingrese el número de la canción que desea modificar:")) - 1;

    if (index >= 0 && index < cdDeMusica.canciones.length) {
        let nuevoTitulo = prompt("Ingrese el nuevo título de la canción:");
        let nuevaDuracion = prompt("Ingrese la nueva duración de la canción:");
        cdDeMusica.canciones[index] = { titulo: nuevoTitulo, duracion: nuevaDuracion };
        alert("Canción modificada con éxito.");
    } else {
        alert("Número de canción no válido. Introduzca un número válido.");
    }
}

function buscarCancion() {
    let titulo = prompt("Ingrese el título de la canción que desea buscar:");

    let cancionEncontrada = cdDeMusica.canciones.find((cancion) => cancion.titulo === titulo);

    if (cancionEncontrada) {
        alert(`Canción encontrada: ${cancionEncontrada.titulo} - Duración: ${cancionEncontrada.duracion}`);
    } else {
        alert(`Canción con título "${titulo}" no encontrada.`);
    }
}

function main() {
    cdDeMusica.artista = prompt("Ingrese el nombre del artista del CD de música:");

    while (true) {
        let opcion = prompt(
            "Menú:\n1. Agregar Canción\n2. Mostrar Canciones\n3. Modificar Canción\n4. Buscar Canción\n5. Salir"
        );

        switch (opcion) {
            case "1":
                agregarCancion();
                break;
            case "2":
                mostrarCanciones();
                break;
            case "3":
                modificarCancion();
                break;
            case "4":
                buscarCancion();
                break;
            case "5":
                return;
            default:
                alert("Opción no válida. Introduzca una opción válida.");
        }
    }
}
main();











