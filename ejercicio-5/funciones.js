/* Ejercicio 5 — Refactorizar en funciones
 Contenidos: funciones,
parámetros, return 

1. Convierte el código de los ejercicios 1 a 4 en funciones reutilizables.*/

/* 1. Calcular el subtotal (precio × cantidad) */

function calcularImporteLinea(precio, cantidad) {
    return precio * cantidad;
}

console.log(`El importe es: ${calcularImporteLinea(189, 2)}`);
console.log(`El importe es: ${calcularImporteLinea(63, 3)}`);