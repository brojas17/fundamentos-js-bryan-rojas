/* Ejercicio 5 — Refactorizar en funciones
 Contenidos: funciones,
parámetros, return 

1. Convierte el código de los ejercicios 1 a 4 en funciones reutilizables.*/
/* Variables */
const porcentajeIva = 21;
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