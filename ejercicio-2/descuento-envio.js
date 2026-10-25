/* Ejercicio 2 — Descuento y envío
 */

const importe = 120;

/* el descuento. Calcular cuánto se descuenta según el importe.*/
let porcentajeDescuento = 0;
if (importe > 100) {
    porcentajeDescuento = 10 / 100;
    // Más de 100 €: 10 %
} else if (importe > 50) {
    porcentajeDescuento = 5 / 100;   // Más de 50 € (hasta 100 €): 5 %
}
const descuento = importe * porcentajeDescuento;

console.log(`Porcentaje Descuento: ${porcentajeDescuento} | Descuento: ${descuento}`);
/* el envío. Decidir si se cobran 4.95 € o es gratis. */

/* el total y el formato. Mostrar todo con 2 decimales y comprobar los casos límite. */