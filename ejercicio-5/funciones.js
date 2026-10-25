/* Ejercicio 5 — Refactorizar en funciones
 Contenidos: funciones,
parámetros, return 

1. Convierte el código de los ejercicios 1 a 4 en funciones reutilizables.*/
/* Variables */
const porcentajeIva = 21;
const gastoEnvio = 4.95;
const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock = [10, 25, 3, 0, 7];
/* Ejercicio-1 */
/* 1. Calcular el subtotal (precio × cantidad) */

function calcularImporteLinea(precio, cantidad) {
    return precio * cantidad;
}


/* 2. Calcular el IVA sobre el subtotal */

function calcularIVA(importe) {
    return importe * (porcentajeIva / 100);
}

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

// Recibe el importe YA DESCONTADO.
function calcularEnvio(importe) {
    if (importe >= 50) {
        return 0;              // Gratis
    } else {
        return gastoEnvio;
    }
}

/* Ejercicio-3 */

// Contar productos agotados (patron contador)
function contarAgotados(stock) {
    let agotados = 0;
    for (let i = 0; i < stock.length; i++) {
        if (stock[i] === 0) {
            agotados++;
        }
    }
    return agotados;
}

// Producto mas caro (patron maximo: guardamos la posicion)
function productoMasCaro(productos, precios) {
    let posicionMasCaro = 0;
    for (let i = 1; i < precios.length; i++) {
        if (precios[i] > precios[posicionMasCaro]) {
            posicionMasCaro = i;
        }
    }
    return productos[posicionMasCaro];
}

// Valor total del inventario (patron acumulador)
function valorInventario(precios, stock) {
    let valorTotal = 0;
    for (let i = 0; i < precios.length; i++) {
        valorTotal += precios[i] * stock[i];
    }
    return valorTotal;
}

/* Ejercicio-4 */
// Devuelve la posición del producto, o -1 si no existe
function buscarProducto(productos, nombre) {
    let posicion = -1;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].toLowerCase() === nombre.toLowerCase()) {
            posicion = i;
            break;
        }
    }
    return posicion;
}
//--------------------------------------------------
console.log(`El importe es: ${calcularImporteLinea(189, 2)}`);
console.log(`El importe es: ${calcularImporteLinea(63, 3)}`);
//--------------------------------------------------
console.log(`El iva es: ${calcularIVA(378).toFixed(2)}`);
console.log(`El iva es: ${calcularIVA(245).toFixed(2)}`);
//--------------------------------------------------
console.log(`El descuento es: ${calcularDescuento(120).toFixed(2)}`);
console.log(`El descuento es: ${calcularDescuento(75).toFixed(2)}`);
//--------------------------------------------------
console.log(`El costo de envio es: ${calcularEnvio(49.40).toFixed(2)}`);
console.log(`El costo de envio es: ${calcularEnvio(71.25).toFixed(2)}`);
//--------------------------------------------------
console.log(`Los productos agotados son: ${contarAgotados(stock)}`);
console.log(`Los productos agotados son: ${contarAgotados([20, 30, 58, 96, 0, 0])}`);
//--------------------------------------------------
console.log(`El producto más caro es: ${productoMasCaro(productos, precios)}`);
console.log(`El producto más caro es: ${productoMasCaro(["camisa", "pantalon", "sombrero"], [20, 15, 12.90])}`);
//--------------------------------------------------
console.log(`El valor del inventario es (suma de precio x stock): ${valorInventario(precios, stock).toFixed(2)} €`);
console.log(`El valor del inventario es (suma de precio x stock): ${valorInventario([10.1, 19.90, 21.20], [2, 5, 8]).toFixed(2)} €`);
//--------------------------------------------------
console.log(`La posicion del producto es: ${buscarProducto(productos, "Monitor")}`);
console.log(`La posicion del producto es: ${buscarProducto(productos, "Altavoz")}`);