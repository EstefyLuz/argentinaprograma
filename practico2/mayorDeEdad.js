const readlineSync = require('readline-sync');
let edad = readlineSync.question('Por favor ingresar tu edad: ');

if (edad >= 21) {
    console.log('Eres mayor de edad.');
} else {
    console.log('Eres menor de edad.');
};
