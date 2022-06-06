const { argv } = require('process');

let archivoTareas = require('./funcionesDeTareas');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach((element, index) => {
        console.log((index + 1 + ' ' + element.titulo + ' ' + element.estado))
        })
        console.log()
        break;

    case 'crear': 
        let titulo = process.argv [3]
        let tarea = 
        {
            titulo: titulo,
            estado: 'pendiente'
        }
        archivoTareas.guardarTarea(tarea)
        console.log(tarea.titulo + ' ' + tarea.estado);
        break;

    case "filtrar":
        let datos = archivoTareas.leerPorEstado(process.argv[3])
        console.log(datos);
        break;
    
    case undefined:
        console.log('----------------------------------------');
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}



