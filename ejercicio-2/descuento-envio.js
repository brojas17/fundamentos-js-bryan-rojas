/* Ejercicio 2 — Descuento y envío
 */

const importe = 100.01;

/* el descuento. Calcular cuánto se descuenta según el importe.*/
let porcentajeDescuento = 0;
if (importe > 100) {
    porcentajeDescuento = 10 / 100;
    // Más de 100 €: 10 %
} else if (importe > 50) {
    porcentajeDescuento = 5 / 100;   // Más de 50 € (hasta 100 €): 5 %
}
const descuento = importe * porcentajeDescuento;

console.log(`Porcentaje Descuento: ${porcentajeDescuento} | Descuento: ${descuento.toFixed(2)}`);
/* el envío. Decidir si se cobran 4.95 € o es gratis. */
let importeConDescuento = importe - descuento;
let envio = 0;
const gastoEnvio = 4.95;
if (importeConDescuento >= 50) {
    envio = 0;              // Gratis
} else {
    envio = gastoEnvio;
}
console.log(`Costo de envio: ${envio === 0 ? "Gratis" : envio + " €"}`);
/* el total y el formato. Mostrar todo con 2 decimales y comprobar los casos límite. */

const total = importeConDescuento + envio;

// Mostrar resultados
console.log(`Importe: ${importe.toFixed(2)} €`);
console.log(`Descuento: ${descuento.toFixed(2)} €`);
console.log(`Importe con descuento: ${importeConDescuento.toFixed(2)} €`);
console.log(`Envío: ${envio === 0 ? "Gratis" : envio.toFixed(2)} €`);
console.log(`Total: ${total.toFixed(2)} €`);