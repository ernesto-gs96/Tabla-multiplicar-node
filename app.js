const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

// ***********************************
// const [ , , arg3] = process.argv;
// const [ , base] = arg3.split('=');
// console.log(base);
// ***********************************

crearArchivo(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log("\n", nombreArchivo.rainbow, 'CREADO'.green))
    .catch(err => console.log(err));