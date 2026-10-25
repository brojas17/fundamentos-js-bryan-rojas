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