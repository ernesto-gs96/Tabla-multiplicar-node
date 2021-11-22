const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, hasta, listar) => {

    let tabla = '';  
    let consola = '';

    let encabezado = "=====================\n";
    encabezado += `   Tabla del: ${base}\n`;
    encabezado += "=====================\n";

    consola = encabezado.green;

    for (let i = 1; i <= hasta; i++)
        tabla += `${base} X ${i} = ${base*i}\n`;

    consola += tabla.blue;

    if(listar)
        console.log(consola);

    try {
        fs.writeFileSync(`./salida/Tabla-del-${base}.txt`, (encabezado + tabla));
        return `Tabla-del-${base}.txt`;  
    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}