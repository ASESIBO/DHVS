let archivoTareas = require('./funcionesDeTareas');

//console.log(archivoTareas.numerodetareas)

let accion = process.argv[2]


switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('-----###########-----------#########--');
        let tareas = archivoTareas.leerArchivo();
        for (let index = 0; index < tareas.length; index++) {
            titulo  = tareas[index].titulo,
            estado  = tareas[index].estado,
            console.log(index+1,titulo,estado)    
        }
        
      
        console.log()
        break;

    case undefined:
        console.log();    
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


