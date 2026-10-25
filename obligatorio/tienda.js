// Catálogo
// Constantes de la tienda
const porcentajeIva = 21;
const gastoEnvio = 4.95;
const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50]; // sin IVA
const stock = [10, 25, 3, 0, 7];
// Pedido del cliente (también arrays paralelos)
const pedidoProductos = ["Ratón", "Monitor", "Auriculares", "Teclado", "Altavoz"];
const pedidoCantidades = [2, 4, 1, 1, 1];

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
/* Calcular el subtotal (precio × cantidad) */
function calcularImporteLinea(precio, cantidad) {
    return precio * cantidad;
}

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

// Devuelve el IVA de un importe

function calcularIVA(importe) {
    return importe * (porcentajeIva / 100);
}

// Recibe el importe YA DESCONTADO.
function calcularEnvio(importe) {
    if (importe >= 50) {
        return 0;              // Gratis
    } else {
        return gastoEnvio;
    }
}

// Mostrar el catálogo
for (let i = 0; i < productos.length; i++) {
    let unidades;
    if (stock[i] === 0) {
        unidades = "AGOTADO";
    } else {
        unidades = stock[i] + " uds";
    }
    console.log("=== CATÁLOGO ===")
    console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (${unidades})`);
}

console.log("=== PROCESANDO PEDIDO ===");

// 1. Nuevos arrays para almacenar los datos del ticket (se declaran ANTES del bucle)
const ticketProductos = [];
const ticketCantidades = [];
const ticketPrecios = [];

for (let i = 0; i < pedidoProductos.length; i++) {
    const nombre = pedidoProductos[i];
    const cantidad = pedidoCantidades[i];
    const posicion = buscarProducto(productos, nombre);

    if (posicion === -1) {
        console.log(`AVISO: ${nombre} no existe en el catálogo.`);
    } else {
        let unidadesServidas = 0;

        if (stock[posicion] === 0) {
            console.log(`AVISO: ${nombre} está agotado`);
            unidadesServidas = 0;
        } else if (cantidad > stock[posicion]) {
            unidadesServidas = stock[posicion];
            console.log(`AVISO: solo hay ${unidadesServidas} uds de ${nombre}, se sirven ${unidadesServidas}`);
        } else {
            unidadesServidas = cantidad;
            console.log(`OK: ${unidadesServidas} x ${nombre}`);
        }

        // Guardar la línea en el ticket SÓLO si se ha servido alguna unidad (> 0)
        if (unidadesServidas > 0) {
            ticketProductos.push(nombre);
            ticketCantidades.push(unidadesServidas);
            ticketPrecios.push(precios[posicion]); // ¡Usamos precios[posicion] del catálogo!

            // Restar las unidades del stock del catálogo
            stock[posicion] -= unidadesServidas;
        }
    }
}

// Comprobación provisional posterior para verificar el resultado
console.log("ticketProductos: ", ticketProductos);
console.log("ticketCantidades: ", ticketCantidades);
console.log("ticketPrecios:    ", ticketPrecios);
console.log("stock:            ", stock);

// === TICKET ===
console.log("=== TICKET ===");

let subtotal = 0;

// Usamos la longitud de los arrays del ticket
for (let i = 0; i < ticketProductos.length; i++) {
    const cantidad = ticketCantidades[i];
    const nombre = ticketProductos[i];
    const precio = ticketPrecios[i];

    // Calculamos el importe de la línea usando la función existente
    const importeLinea = calcularImporteLinea(precio, cantidad);

    // Acumulamos el subtotal sumando los importes de cada línea
    subtotal += importeLinea;

    // Mostramos la línea formateada
    console.log(`${cantidad} x ${nombre} (${precio.toFixed(2)} €) = ${importeLinea.toFixed(2)} €`);
}

// Calcular descuento sobre el subtotal usando la función existente
const descuento = calcularDescuento(subtotal);

// Base imponible (subtotal - descuento)
const baseImponible = subtotal - descuento;

// IVA calculado sobre la base imponible usando la función existente
const iva = calcularIVA(baseImponible);

// Gastos de envío calculados sobre la base imponible usando la función existente
const envio = calcularEnvio(baseImponible); // (mantén tu calcularEnvio(baseImponible))

// Total final (base imponible + IVA + envío)
const total = baseImponible + iva + envio;

// Mostrar resultados con los formatos requeridos
console.log(`Subtotal: ${subtotal.toFixed(2)} €`);

if (descuento > 0) {
    console.log(`Descuento: -${descuento.toFixed(2)} €`);
} else {
    console.log(`Descuento: 0.00 €`);
}

console.log(`Base imponible: ${baseImponible.toFixed(2)} €`);
console.log(`IVA (${porcentajeIva}%): ${iva.toFixed(2)} €`);

if (envio === 0) {
    console.log(`Envío: Gratis`);
} else {
    console.log(`Envío: ${envio.toFixed(2)} €`);
}

console.log(`TOTAL: ${total.toFixed(2)} €`);