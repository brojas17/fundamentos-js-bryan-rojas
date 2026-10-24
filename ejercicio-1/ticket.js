/* Ejercicio 1 */

const producto = "Monitor";
const precio = 189; // precio por unidad, sin IVA
const cantidad = 2;
const porcentajeIva = 21;

/* El subtotal */

let subtotal = precio * cantidad;
console.log(`El subtotal de ${precio} x ${cantidad} = ${subtotal}`);

/* el IVA y el total */
let iva = subtotal * (porcentajeIva / 100);
let total = subtotal + iva;
console.log(`Este es el IVA: ${iva}`);
console.log(`Este es el Total: ${total}`);
