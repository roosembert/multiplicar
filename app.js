// const { argv } = require('./config/yargs');
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // para importar y desusctrurar

// let base = '5';

// console.log(process.argv);

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(argv.base);
let comando = argv._[0];

switch (comando) {
   case 'listar':
      console.log('Listar');
      listarTabla(argv.base, argv.limite);
      break;
   case 'crear':
      console.log('Crear');
      crearArchivo(argv.base, argv.limite)
         .then(archivo => console.log(`Archivo creado: ${archivo}`))
         .catch((err) => console.log(err));
      break;
   default:
      console.log('Comando no reconocido');
}

// en consola > node app --base=3       ó > node app -b=4

// crearArchivo(comando)
//    .then(archivo => console.log(`Archivo creado: ${archivo}`))
//    .catch((err) => console.log(err));


// holas('Rooas').then(resp => console.log(resp));
