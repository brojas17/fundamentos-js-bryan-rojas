/* Ejercicio 3 — Explorar el catalogo
 Contenidos: bucles, arrays,
patrones acumulador, contador y maximo */

const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock = [10, 25, 3, 0, 7];

// 1. Mostrar el catalogo
for (let i = 0; i < productos.length; i++) {
    let unidades;
    if (stock[i] === 0) {
        unidades = "AGOTADO";
    } else {
        unidades = stock[i] + " uds";
    }
    console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (${unidades})`);
}