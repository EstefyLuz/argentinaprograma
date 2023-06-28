let personas = ["Jose" , "Maria" , "Juan" , "Andres" , "Lionel" , "Sofia" , "Leandro" , "Emilia"];
let rechazados = [];
let admitidos = [];

for (i = 0 ; i <= personas.length-1 ; i++){
    if (personas[i] === "Sofia" || personas[i] === "Jose"){
        rechazados.push(personas[i]); 
    } else {
        admitidos.push(personas[i]);
    }
}


for (i = 0 ; i <= admitidos.length-1 ; i++){
    if (i == 0){
        console.log("La lista de invitados admitidos es:");
    } 
    console.log(admitidos[i]);
} 
console.log("\n");


for (i = 0 ; i <= rechazados.length-1 ; i++){
    if (i == 0){
        console.log("La lista de invitados rechazados es:");
    }
    console.log(rechazados[i]);
}
console.log("\n");


admitidos.sort();
rechazados.sort();
console.log("La lista ordenada de invitados admitidos es:\n" + admitidos.join("\n"));
console.log("\n");
console.log("La lista ordenada de invitados rechazados es:\n" + rechazados.join("\n"));