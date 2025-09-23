// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista donde se almacenarán los nombres ingresados
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre antes de añadir.");
        return;
    }

    // Agregar el nombre a la lista y al HTML
    listaDeAmigos.push(nombre);
    actualizarListaHTML();
    
    // Limpiar el campo de texto
    input.value = "";
    input.focus();
}

// Función para actualizar la lista en la interfaz
function actualizarListaHTML() {
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";

    listaDeAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        listaHTML.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("La lista está vacía. Por favor, añade al menos un amigo antes de sortear.");
        return;
    }

    const indiceGanador = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreGanador = listaDeAmigos[indiceGanador];

    // Mostrar resultado
    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li> El amigo secreto es: <strong>${nombreGanador}</strong> </li>`;

    // Limpiar lista y vista
    listaDeAmigos = [];
    actualizarListaHTML();
}
