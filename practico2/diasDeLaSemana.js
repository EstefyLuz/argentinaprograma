const readlineSync = require('readline-sync');
let numDeDia = readlineSync.questionInt("ingresar un número del 1 al 7 representando un día de la semana:");

let diasDeLaSem = [];
diasDeLaSem.push("lunes" , "martes" , "miercoles" , "jueves" , "viernes" , "sabado" , "domingo");

switch (numDeDia) {
    case 1:
        console.log("Hoy es %s" , diasDeLaSem[numDeDia-1])
        break;

    case 2:
        console.log("Hoy es %s", diasDeLaSem[numDeDia-1])
        break;

    case 3:
        console.log("Hoy es %s", diasDeLaSem[numDeDia-1])
        break;

    case 4:
        console.log("Hoy es %s", diasDeLaSem[numDeDia-1])
        break;

    case 5:
        console.log("Hoy es %s", diasDeLaSem[numDeDia-1])
        break;

    case 6:
        console.log("Hoy es %s", diasDeLaSem[numDeDia-1])
        break;

    case 7:
        console.log("Hoy es %s", diasDeLaSem[numDeDia-1])
        break;

    default:
        console.log("Número inválido");
}
