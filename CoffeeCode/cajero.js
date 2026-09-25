import { listaPedidos, bebidas, postres } from "./datos.js";
import { prepararCafe } from "./cocina.js";

let totalAcumulado = 0;

function agregarPedido(cliente, producto, precio) {
    let preciosArray = [precio];
    let subtotal = preciosArray.reduce((acumulador, actual) => acumulador + actual, 0);

    let iva = subtotal * 0.16;
    let precioConIva = subtotal + iva;

    let pedido = {
        nombreCliente: cliente,
        nombreProducto: producto,
        precioProducto: precioConIva,
        subtotalPedido: subtotal,
        ivaPedido: iva
    };

    listaPedidos.push(pedido);
    totalAcumulado += precioConIva;

    console.log("¡Pedido agregado con éxito!");
    return pedido;
}

export function nuevoPedido(cliente, callbackListo, callbackCancelado) {
    let nombreProducto = prompt("Nombre del producto:");

    if (!nombreProducto) {
        callbackCancelado("No se indicó ningún producto");
        return Promise.resolve();
    }

    let productos = [...bebidas, ...postres];
    let productoEncontrado = productos.find(producto =>
        producto.nombre.toLowerCase() === nombreProducto.trim().toLowerCase()
    );

    if (!productoEncontrado) {
        callbackCancelado("Producto no encontrado");
        return Promise.resolve();
    }

    if (productoEncontrado.stock <= 0) {
        callbackCancelado("Producto agotado");
        return Promise.resolve();
    }

    return prepararCafe()
        .then(() => {
            productoEncontrado.stock--;
            const pedido = agregarPedido(
                cliente,
                productoEncontrado.nombre,
                productoEncontrado.precio,
            );
            callbackListo(pedido);
        })
        .catch(error => {
            callbackCancelado(error);
        });
}

const mostrarPedidoListo = () => {
    alert("Estado: ¡Pedido listo para entrega!");
};

const mostrarPedidoCancelado = () => {
    alert("Estado: Pedido cancelado.");
};

export function listarPedidos(cliente) {
    let totalGeneral = 0;
    let mensaje = "Lista de Pedidos - Caja\n\n";

    for (let i = 0; i < listaPedidos.length; i++) {const { nombreCliente, nombreProducto, precioProducto, subtotalPedido, ivaPedido } = listaPedidos[i];
        totalGeneral += precioProducto;

        mensaje += "Ticket \n Cliente: " + nombreCliente + "\n" +
            "Producto: " + nombreProducto + "\n" +
            "Subtotal: $" + subtotalPedido.toFixed(2) + "\n" +
            "IVA (16%): $" + ivaPedido.toFixed(2) + "\n" +
            "Total con IVA: $" + precioProducto.toFixed(2) + "\n" +
            "--------------------------------------\n\n";
    }


    console.log("--- LISTA DE PEDIDOS ---");
    console.log(listaPedidos);

    alert(mensaje);
    console.log(`Total acumulado en caja: $${totalAcumulado.toFixed(2)}`);
}