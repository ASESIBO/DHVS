let tareas = [
    {
        "titulo": "Repasar JS",
        "estado": "terminada"
    },
    {
        "titulo": "Armar aplicación de Tareas",
        "estado": "en progreso"
    },
    {
        "titulo": "Break",
        "estado": "pendiente"
    }
]

// console.log("1", tareas[0].titulo, tareas[0].estado)
// console.log("2", tareas[1].titulo, tareas[1].estado)
// console.log("3", tareas[2].titulo, tareas[2].estado)

// 0 1 2 


// 1 2 3 4 5 
// 0 1 2 3 4 

for (let index = 0; index < tareas.length; index++) {
    titulo  = tareas[index].titulo,
    estado  = tareas[index].estado,
    console.log(index+1,titulo,estado)    
}



