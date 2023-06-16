const readlineSync = require('readline-sync');
let numEntero = readlineSync.questionInt("ingresar un numero entero: ");

if (numEntero > 0 && numEntero %2 === 0) {
    console.log("El numero es positivo y par");
} else if (numEntero > 0 && numEntero %2 !== 0) {
    console.log("El numero es positivo e impar");
} else if (numEntero < 0) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es cero");
}