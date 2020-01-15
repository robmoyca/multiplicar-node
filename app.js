//Esta libreria permite una facilidad al desarrollar comandos para llamar nuestras aplicaciones
const argv = require('./config/yargs').argv;
var colors = require('colors');
//requireds

//esta siguiente linea con las llaves es una destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//Esta linea es referente a un paquete de node
//const fs = require('express');

//Esta linea es referente a un archivo dentro de la solucion, posicion relativa
//const fs = require('./fs');



//Process.argv es una variable que tenemos en la ejecucion de nuestras aplicaciones nodejs, asi podriamos sacar parametros de la linea de comando
//console.log(process.argv);

//let base = '7';
console.log(argv);


//INICIO:Esto es el primer ejercicio para escribir en un archivo la tabla de multiplicar del valor dado en un txt
//let parametro = process.argv[2];
//let base = parametro.split('=')[1];
//console.log(base);

//console.log(multiplicar);
//console.log(multiplicar);
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(e => console.log(e));
//INICIO:

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
        break;
}