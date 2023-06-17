const readlineSync = require('readline-sync');

let meses = ["enero", "febrero","marzo", "abril","mayo", "junio", "julio", "agosto","septiembre", "octubre","noviembre", "diciembre"];

let cantidadDias = [28,30,31];

const mes = readlineSync.questionInt('Ingrese un numero de mes: ');

switch (mes) {
    case 1:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , cantidadDias[2]);
        break;

    case 2:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , cantidadDias[0]);
        break;

    case 3:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , cantidadDias[2]);
        break;
        
    case 4:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , cantidadDias[1]);
        break;

    case 5:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , cantidadDias[2]);
        break;

    case 6:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , cantidadDias[1]);
        break;
            
    case 7:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , cantidadDias[2]);
        break;
    
    case 8:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , cantidadDias[2]);
        break;

    case 9:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , cantidadDias[1]);
        break;
        
    case 10:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , cantidadDias[2]);
        break;

    case 11:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , cantidadDias[1]);
        break;
        
    case 12:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , cantidadDias[2]);
        break;

    default:
        console.log("El numero que ingresaste no corresponde a un mes");
}