/* Ejercicio 5 — Refactorizar en funciones
 Contenidos: funciones,
parámetros, return 

1. Convierte el código de los ejercicios 1 a 4 en funciones reutilizables.*/
/* Variables */
const porcentajeIva = 21;
const gastoEnvio = 4.95;
/* Ejercicio-1 */
/* 1. Calcular el subtotal (precio × cantidad) */

function calcularImporteLinea(precio, cantidad) {
    return precio * cantidad;
}

console.log(`El importe es: ${calcularImporteLinea(189, 2)}`);
console.log(`El importe es: ${calcularImporteLinea(63, 3)}`);

/* 2. Calcular el IVA sobre el subtotal */

function calcularIVA(importe) {
    return importe * (porcentajeIva / 100);
}
console.log(`El iva es: ${calcularIVA(378).toFixed(2)}`);
console.log(`El iva es: ${calcularIVA(245).toFixed(2)}`);

/* Ejercicio-2 */

// Devuelve el descuento según las reglas de la tienda
function calcularDescuento(importe) {
    if (importe > 100) {
        return importe * 0.10;   // Más de 100 €: 10 %
    } else if (importe > 50) {
        return importe * 0.05;   // Más de 50 € (hasta 100 €): 5 %
    } else {
        return 0;                           // 50 € o menos: sin descuento
    }
}
console.log(`El descuento es: ${calcularDescuento(120).toFixed(2)}`);
console.log(`El descuento es: ${calcularDescuento(75).toFixed(2)}`);

// Recibe el importe YA DESCONTADO.
function calcularEnvio(importe) {
    if (importe >= 50) {
        return 0;              // Gratis
    } else {
        return gastoEnvio;
    }
}
console.log(`El costo de envio es: ${calcularEnvio(49.40).toFixed(2)}`);
console.log(`El costo de envio es: ${calcularEnvio(71.25).toFixed(2)}`);
