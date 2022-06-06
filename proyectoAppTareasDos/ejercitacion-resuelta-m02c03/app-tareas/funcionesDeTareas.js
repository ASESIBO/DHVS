const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    numerodetareas : 22
}

// let guardar = fs.readFileSync('tareas.json','utf-8')
// let guardarenotroformato = JSON.parse(guardar)
// console.log(guardarenotroformato)
// //console.log(guardar)


module.exports = archivoTareas;