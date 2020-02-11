// Contiene elementos

// Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea averiguar si existe. El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no. Ejemplo:

// // Ingrese valores: 5 7 99 34 54 2 12
// // Ingrese valor a buscar: 54
    
// // El valor 54 se encuentra entre los valores originales


const numeros = prompt("Ingrese varios números separados por espacio");

const valor = Number(prompt("¿Qué valor desea averiguar si existe?"));

let numerosArray = numeros.split(" ");

let coincidencia = false;

for (i = 0; i < numerosArray.length; i++) {
    const numeroDelArray = Number(numerosArray[i]);

    if (numeroDelArray === valor) {
        coincidencia = true;
    }


};

if (coincidencia) {
    alert(`El valor ${valor} se encuentra entre los valores originales.`)
}
else {
    alert(`El valor ${valor} NO se encuentra entre los valores originales.`);
}