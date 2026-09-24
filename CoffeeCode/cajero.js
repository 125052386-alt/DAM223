import { listaPedidos } from "./datos.js";

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
    totalAcumulado = totalAcumulado + precioConIva;

    console.log("¡Pedido agregado con éxito!");
}

export function nuevoPedido(cliente) {
    let producto = prompt("Nombre del producto:");
    let precio = parseFloat(prompt("Precio del producto:"));

    agregarPedido(cliente, producto, precio);

    alert("Pedido guardado");
}

export function listarPedidos(cliente) {
    let totalGeneral = 0;
    let mensaje = "Lista de Pedidos - Caja\n\n";

    for (let i = 0; i < listaPedidos.length; i++) {
        const { nombreCliente, nombreProducto, precioProducto, subtotalPedido, ivaPedido } = listaPedidos[i];
        totalGeneral += precioProducto;

        mensaje += "Ticket \n Cliente: " + nombreCliente + "\n" +
            "Producto: " + nombreProducto + "\n" +
            "Subtotal: $" + subtotalPedido.toFixed(2) + "\n" +
            "IVA (16%): $" + ivaPedido.toFixed(2) + "\n" +
            "Total con IVA: $" + precioProducto.toFixed(2) + "\n" +
            "--------------------------------------\n\n";
    }

    mensaje += "TOTAL DE TODOS LOS PRODUCTOS: $" + totalGeneral.toFixed(2);

    alert(mensaje);

    console.log("--- LISTA DE PEDIDOS ---");
    console.log(listaPedidos);
    console.log("Total acumulado en caja: $" + totalGeneral.toFixed(2));
}