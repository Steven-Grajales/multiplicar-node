const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('========='.green);
    console.log(`tabla de ${base}`.green);
    console.log('========='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i} `);
    }
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El dato ingresado '${base}' no es un dato válido`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${2 * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);

            resolve(`tabla-${base}.txt`);
        });
    })

}
module.exports = {
    crearArchivo,
    listarTabla
}