// Menor número

// Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:

// // Ingrese números: 5 7 99 34 54 2 12

// // El menor número es: 2


const numeros = prompt("Ingrese varios números separados por espacio");

const numerosArray = numeros.split(" ");
let numeroMenor = 9999999999999999999999999;

for (i = 0; i < numerosArray.length; i++) {
    let numeroDelArray = Number(numerosArray[i]);

    if (numeroDelArray < numeroMenor) {
        numeroMenor = numeroDelArray; 
    }
}

alert(`El número menor ingresado es ${numeroMenor}.`)