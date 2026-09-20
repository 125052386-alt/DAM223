import { listaPedidos } from "./datos.js";

let totalAcumulado = 0;

function agregarPedido(cliente, producto, precio) {
    let pedido = {
        nombreCliente: cliente,
        nombreProducto: producto,
        precioProducto: precio
    };

    listaPedidos.push(pedido);
    totalAcumulado = totalAcumulado + precio;

    console.log("¡Pedido agregado con éxito!");
}

export function nuevoPedido(cliente) {
    let producto = prompt("Nombre del producto:");
    let precio = parseFloat(prompt("Precio del producto:"));

    listaPedidos.push({
        nombreCliente: cliente,
        nombreProducto: producto,
        precioProducto: precio
    });

    alert("Pedido guardado");
}



function listarPedidos() {
    nuevoPedido();

    document.write("<h2>Lista de Pedidos</h2>");

    for (let i = 0; i < listaPedidos.length; i++) {
        document.write(
            "<p>Cliente: " + listaPedidos[i].nombreCliente + "</p>" +
            "<p>Producto: " + listaPedidos[i].nombreProducto + "</p>" +
            "<p>Precio: $" + listaPedidos[i].precioProducto.toFixed(2) + "</p>" +
            "<hr>"
        );
    }

    //mostrarPedidosCliente();

    console.log("--- LISTA DE PEDIDOS ---");
    console.log(listaPedidos);

    console.log(
        "Total acumulado en caja: $" + totalAcumulado.toFixed(2)
    );
}