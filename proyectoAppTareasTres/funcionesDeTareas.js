const fs= require('fs');
let archivosTareas={
    archivo: 'tareas.json',
    leerArchivo: function(){
        let tareas = fs.readFileSync(this.archivo, 'utf-8')
        return JSON.parse(tareas)
    },
    escribirJSON: function(array){
        let actividades= array
        fs.writeFileSync(this.archivo,JSON.stringify(actividades)) 
    },
    guardarTarea: function(tarea){
        let tareas2= this.leerArchivo()
        tareas2.push(tarea)
        console.log(tareas2)
        this.escribirJSON(tareas2)
    },
    leerPorEstado(estado){
        let tareas= this.leerArchivo()
        let tareasfiltradas=tareas.filter(tarea=> tarea.estado==estado)
        return tareasfiltradas
    }
} 
module.exports = archivosTareas