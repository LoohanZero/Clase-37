// Frutas

// Crear un programa que pida ingresar 🍎, 🍐y 🍑 y devuelva un mensaje con la cantidad que hay de cada una. Ejemplo:

// // Ingrese frutas: 🍎🍎🍐🍑🍎🍑

// // Hay 3 🍎, 1 🍐 y 2 🍑

const frutas = prompt("Ingrese manzana, pera y durazno. Puede repetir todas las veces que quiera.");

let arrayDeFrutas = frutas.split(" ");
let manzana = 0;
let pera = 0;
let durazno = 0;

for (i = 0; i<arrayDeFrutas.length; i++) {
    let ultimoValor = arrayDeFrutas.pop();
    
    if (ultimoValor === "manzana") {
        manzana += 1;
    } 
    else if(ultimoValor === "pera") {
        pera += 1;
    }
    else if (ultimoValor === "durazno") {
        durazno += 1;
    }   

}

alert(`La lista ingresada tiene ${manzana} 🍎, ${pera} 🍐 y ${durazno} 🍑`);