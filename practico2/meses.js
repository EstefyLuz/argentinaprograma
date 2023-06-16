const readlineSync = require('readline-sync');

let meses = ["enero", "febrero","marzo", "abril","mayo", "junio", "julio", "agosto","septiembre", "octubre","noviembre", "diciembre"];

let dias30 = 30
let dias31 = 31
let dias28 = 28
const mes = readlineSync.questionInt('Ingrese un numero de mes: ');

switch (mes) {
    case 1:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , dias31);
        break;

    case 2:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , dias28);
        break;

    case 3:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , dias31);
        break;
        
    case 4:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , dias30);
        break;

    case 5:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , dias31);
        break;

    case 6:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , dias30);
        break;
            
    case 7:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , dias31);
        break;
    
    case 8:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , dias31);
        break;

    case 9:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , dias30);
        break;
        
    case 10:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , dias31);
        break;

    case 11:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , dias30);
        break;
        
    case 12:
        console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1] , dias31);
        break;
}