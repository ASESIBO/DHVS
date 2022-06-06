const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    numerodetareas : 22, 
    
    guardarTarea(tarea){
        let tareas = this.leerArchivo()
        tareas.push(tarea)
        fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' '))
    },

    leerPorEstado(estado){
        let tareas= this.leerArchivo()
        let tareasfiltradas=tareas.filter(tarea=> tarea.estado==estado)
        return tareasfiltradas
    }
}

module.exports = archivoTareas;