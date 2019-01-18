const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

switch (argv._[0]) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('No se reconoce ningun comando');
}

//let argv2 = process.argv;
//console.log(argv.limite);

/*
let parametro = argv[2];
let base = parametro.split('=')[1];


    */