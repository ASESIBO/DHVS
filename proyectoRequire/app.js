let alumno = require ('./bautista_cozzani.js')
let alumno1 = require ('./juan_jose.js')

let alumnos = [alumno, alumno1]

for (let i=0 ; i < alumnos.length ; i++){
console.log('hola soy ' + alumnos[i][0] + ' me gusta ' + alumnos[i][1] + ' vivo en ' + alumnos[i][2])

}

const zodiac = require('zodiac-signs')('en');
console.log(zodiac.getSignByDate({ day: 02, month: 12 }));
console.log(zodiac.getSignByDate({ day: 01, month: 04 }));
