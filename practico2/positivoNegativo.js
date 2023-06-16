const readlineSync = require('readline-sync');
let numero = readlineSync.question('Ingresar un numero: ');

if (numero >= 1) {
    console.log("El numero es positivo");
} else if (numero == 0) {
    console.log("El numero es cero");
} else {
    console.log("El numero es negativo");
}
