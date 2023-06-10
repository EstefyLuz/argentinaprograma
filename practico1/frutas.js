let frutas = []; 

let fruta1 = "Manzana";
let fruta2 = "Pera";
let fruta3 = "Frutilla";
let fruta4 = "Melon";
let fruta5 = "Kiwi"; 

frutas.push(fruta1,fruta2,fruta3,fruta4,fruta5);

let ultima = frutas[frutas.length-1];
console.log("La ultima fruta agregada fue: %s", ultima);

let primera = frutas[frutas.length-(frutas.length)];
console.log("La primera fruta agregada fue: %s" , primera);