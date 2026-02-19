// Write custom JavaScript here.

// You may ignore this file and delete if if JavaScript is not required for your challenge.
// para empezar declase tres variables que me traen el ide de todo el formulario, input y lista
const formulario = document.getElementById("todo-form");
const inputTarea = document.getElementById("todo-input");
const listaTareas = document.getElementById("todo-list");

// . llame la variable del formulario en la cual le estoy diciendo que es de tipi submit y que tiene un evento y a el formulario le vamos a eliminar el evento que trae por defecto
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // cree una nueva constante que es para la creacion de las nuevas tareas que se van a ingresar mediante el inputTarea y va a eliminar los espacios que el usuairo agregue a el inicio por defecto
    const textoTarea = inputTarea.value.trim();

    // cree un condicional donde si el infut esta vacio muestre una alerta de que no se puede enviar la lista vacia, si la lista no esta vacia se
    if (textoTarea === "") {
        alert("no puedes enviar la lista vacia ");
        // se va generar una nueva tarea con un boton de eliminar y cuando el usuairo haga click se elimine lo que quiero eliminar de la lista
    } else {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = textoTarea;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "eliminar";

        botonEliminar.addEventListener("click", function () {
            nuevaTarea.remove(botonEliminar);
        });

        listaTareas.appendChild(nuevaTarea);
        nuevaTarea.appendChild(botonEliminar);
        // y por ultimo vuelvo a dejar el input vacio
        inputTarea.value = "";
    }
});
