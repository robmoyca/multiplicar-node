const fs = require('fs');
var colors = require('colors/safe');


let listarTabla = (base, limite) => {
    console.log(colors.green('===================='));
    console.log(colors.yellow(`Tabla de ${base}`));
    console.log(colors.red('===================='));
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`, );
    }
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let content = '';
        for (let i = 1; i <= limite; i++) {
            content += `${base} * ${i} = ${base * i}\n`;
        }
        const data = new Uint8Array(Buffer.from(content));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(colors.red(`tabla-${base}-al-${limite}.txt`));
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}