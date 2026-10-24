/* Ejercicio 1 */

const producto = "Monitor";
const precio = 189; // precio por unidad, sin IVA
const cantidad = 2;
const porcentajeIva = 21;

/* El subtotal. Crea una variable subtotal y muéstrala con console.log. Ejecuta node ejercicio-1/ticket.js y comprueba que sale 378. */

let subtotal = precio * cantidad;
console.log(`El subtotal de ${precio} x ${cantidad} = ${subtotal}`);

