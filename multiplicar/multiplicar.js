const fs = require('fs'); //Nativo de node
const colors = require('colors/safe');

// module.export =  crearArchivo = (base) => {      OR
let crearArchivo = (base, limite = 10) => {
   return new Promise((resolve, reject)=>{
      if (!Number(base)) {
         return reject(`${base} No es un número`);
      }
      let data = '';

      for (let i = 1; i <= limite; i++) {
         data  += `${base} * ${i} = ${base*i} \n`;
      }
      fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
         if (err) reject(err)
         else
            resolve(colors.rainbow(`tabla-${base}.txt`));
      });
   });
}

let listarTabla = (base, limite = 10) => {
   console.log('======================'.green);
   console.log(`tabla del ${base}`);
   console.log('======================'.red);
   for (let i = 1; i <= limite; i++) {
      console.log(`${base} * ${i} = ${base*i} \n`);
   }
}
module.exports = {
   crearArchivo, listarTabla
}
