/* Ejercicio 4 — Buscar un producto
Contenidos: bucles,
arrays, búsqueda */

const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock = [10, 25, 3, 0, 7];
const buscado = "MONITOR";

let posicion = -1;
for (let i = 0; i < productos.length; i++) {
    if (productos[i].toLowerCase() === buscado.toLowerCase()) {
        posicion = i;
        break;
    }
}

if (posicion === -1) {
    console.log(`Posición: ${posicion}. ${buscado} no existe en el catálogo.`)
} else {
    console.log(`${productos[posicion]} está en la posición ${posicion}. Precio: ${precios[posicion].toFixed(2)}€. Stock: ${stock[posicion]}`);
}
