var inputTarea = document.getElementById("tarea");
var selectPrioridad = document.getElementById("prioridad");
var btn = document.getElementById("guardar");
var listado = document.getElementById("listado");

function agregarBotones(li) {
    var btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar");
    li.appendChild(btnEliminar);

    btnEliminar.onclick = function () {
        var confirmar = confirm("¿Estás seguro de eliminar esta tarea?");
        if (confirmar) {
            li.remove();
        }
    }

    var btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("editar");
    li.appendChild(btnEditar);

    btnEditar.onclick = function () {
        var nuevoTexto = prompt("Edita la tarea:", li.textContent.split(" Prioridad")[0]);
        if (nuevoTexto !== null) {
            li.textContent = nuevoTexto + " Prioridad: " + selectPrioridad.value;
            agregarBotones(li); 
        }
    }
}

btn.onclick = function () {
    if (inputTarea.value === "") {
        return;
    }

    var elemento = inputTarea.value + " Prioridad: " + selectPrioridad.value;
    var li = document.createElement("li");
    li.textContent = elemento;

    listado.appendChild(li);
    agregarBotones(li);

    inputTarea.value = "";
}
