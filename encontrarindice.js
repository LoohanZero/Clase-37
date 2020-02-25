// Encontrar índice

// Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea encontrar el índice. El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, o indicar si no se ha encontrado. Ejemplo:

// // Ingrese valores: 5 7 12 34 54 2 12
// // Ingrese valor a buscar: 12
    
// // El valor 12 se encuentra en el índice 12
// Una vez hecho este ejercicio, investigar el método indexOf.

const numeros = prompt("Ingrese varios números separados por espacio");

const valor = Number(prompt("¿Qué valor desea encontrar en el índice?"));

let numerosArray = numeros.split(" ");
let indice = 0;
let coincidencia = false;

for (i = 0; i < numerosArray.length; i++) {
    numeroDelArray = Number(numerosArray[i]);

    if (numeroDelArray === valor) {
        coincidencia = true;
        indice = i;
    }


};

if (coincidencia) {
    alert(`El valor ${valor} se encuentra en el índice ${indice}.`)
}
else {
    alert(`El valor ${valor} NO se encuentra en el índice.`);
}