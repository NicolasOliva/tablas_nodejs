const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log(' ');
    console.log(`TABLA DE : ${base} * ${limite}`.green);
    console.log(' ');

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

    console.log(' ');

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {

            reject("la base ingresada no es un num")
            return;

        } else {

            for (let i = 0; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i}\n`;
            }

            fs.writeFile(`./tablas/tabla-de-${base}-al-${limite}.txt`, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`tabla-de-${base}-al-${limite}.txt`);
                }
            })

        }
    })
}

module.exports = {
    crearArchivo,
    listarTabla
};