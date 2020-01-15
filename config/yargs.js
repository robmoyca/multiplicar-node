const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

//Esta libreria permite una facilidad al desarrollar comandos para llamar nuestras aplicaciones
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea el archivo de texto con la tabla de multiplicar con los parametros dados', opts)
    .help()
    .argv;


module.exports = {
    argv
}