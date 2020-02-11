// Saludos

// Crear un programa que pida ingresar nombres separados por espacios y devuelva un mensaje que contenga un saludo a cada persona. Ejemplo:

// // Ingrese nombres: Ada Greta Grace

// // ¡Hola Ada!
// // ¡Hola Greta!
// ¡Hola Grace!

const nombres = prompt("Ingrese varios nombres separados por espacios");

const arrayNombres = nombres.split(" ");

for (i = 0; i < arrayNombres.length; i++) {
    alert(`¡Hola, ${arrayNombres[i]}!`);
}