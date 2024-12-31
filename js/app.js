function agregarTarea(){
    let agrega = document.getElementById("nuevaTarea").value; 

    if (agrega === ""){
        alert("Ingrese una Tarea");
        return;
    }
    
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = agrega + " ";


    //Creae boton Eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() { nuevaTarea.remove();}
    //agregar el boton al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //agregar el elemento a la lista 
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    // limpiar cuadro de texto
    document.getElementById("nuevaTarea").value = "";


}