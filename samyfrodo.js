// Sam y Frodo

// Crear un programa que permita saber si Sam y Frodo están juntos. El programa debe permitir ingresar nombres separados por espacios, y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después. Ejemplo:

// // Ingresar nombres: Sam Frodo Legolas
// // Sam y Frodo están juntos, ¡Frodo está a salvo!

// // Ingresar nombres: Sam Orco Frodo
// // Sam y Frodo están separados, ¡Frodo está en peligro!


const nombres = prompt("Ingrese varios nombres separados por espacio");

let arrayDeNombres = nombres.split(" ");
let indice1;
let indice2;

for (let i = 0; i < arrayDeNombres.length; i++) {
    indice1 = arrayDeNombres.indexOf("Frodo");
    indice2 = arrayDeNombres.indexOf("Sam");
};

if (indice1 === indice2++ || indice1 === indice2--) {
    alert("Sam y Frodo están juntos, ¡Frodo está a salvo!");
}
else {
    alert("Sam y Frodo están separados, ¡Frodo está en peligro!");
};

