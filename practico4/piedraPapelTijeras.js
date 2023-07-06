const readlineSync = require('readline-sync');

const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERAS = "tijeras";
const GANA_COMPUTADORA = "Gana la Computadora";
const GANA_USUARIO = "Gana el Usuario";
const EMPATE = "Hay un empate!";
const ERROR = "No elegiste una opcion valida, volve a intentarlo.\n";

let listaEleccion = [PIEDRA , PAPEL , TIJERAS];

function obtenerJugadaComputadora(){
    let numAleatorio = Math.floor(Math.random()*3);
    return listaEleccion[numAleatorio];
}

function obtenerJugadaUsuario(){
    let eleccionUsuario = readlineSync.question("Elegi Piedra, Papel o Tijeras: \n");
    if (eleccionUsuario.toLowerCase() != PIEDRA && eleccionUsuario.toLowerCase() != PAPEL && eleccionUsuario.toLowerCase() != TIJERAS){
        console.log(ERROR);
        return obtenerJugadaUsuario();
    } else {
        return eleccionUsuario.toLowerCase();
    }
}

function determinarGanador(compu,usuario){
    if ((compu === PIEDRA && usuario === TIJERAS) || (compu === PAPEL && usuario === PIEDRA) || (compu === TIJERAS && usuario === PAPEL)){
        return GANA_COMPUTADORA;
    } else if ((usuario === PIEDRA && compu === TIJERAS) || (usuario === PAPEL && compu === PIEDRA) || (usuario === TIJERAS && compu === PAPEL)){
        return GANA_USUARIO;
    } else if ((usuario === PIEDRA && compu === PIEDRA) || (usuario === PAPEL && compu === PAPEL) || (usuario === TIJERAS && compu === TIJERAS)){
        return EMPATE;
    } 
}

let resutadoComputadora = obtenerJugadaComputadora();
let resultadoJugador = obtenerJugadaUsuario();

function resultadoDelJuego(){
    let resultadoFinal = determinarGanador(resutadoComputadora,resultadoJugador);
    return resultadoFinal;
}

console.log("La computadora eligio:", resutadoComputadora);
console.log("El usuario eligio:", resultadoJugador);
console.log("El resultado fue:", resultadoDelJuego());

