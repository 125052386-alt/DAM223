console.log("Hola mundo NODE")

let edad1=20;
let edad2=25;

console.log("Edad Promedio: ")
console.log((edad1+edad2)/2);

console.log("Medidor de Procesos");

console.time('miProceso');
    for (i=0; i<100000000; i++){
        
    }

console.timeEnd('miProceso');

