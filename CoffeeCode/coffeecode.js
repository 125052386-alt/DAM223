import { agregar, listar } from "./cocina.js";
import { nuevoPedido } from "./cajero.js";
import { mostrarPedidosCliente } from "./cliente.js";

let productos=prompt("Agregar productos a la lista de productos disponibles (s/n):");
while (productos.toLowerCase() === "s") {
    agregar();
    productos = prompt("¿Deseas agregar otro producto? (s/n)");
}

listar();

let cliente = prompt("Nombre del cliente:");
let continuar = "s";

while (continuar.toLowerCase() === "s") {
    nuevoPedido(cliente);
    continuar = prompt("¿Deseas agregar otro pedido? (s/n)");
}

mostrarPedidosCliente(cliente);
