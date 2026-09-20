import { listar } from "./cocina.js";
import { nuevoPedido } from "./cajero.js";
import { mostrarPedidosCliente } from "./cliente.js";

listar();

let cliente = prompt("Nombre del cliente:");
let continuar = "s";

while (continuar.toLowerCase() === "s") {
    nuevoPedido(cliente);
    continuar = prompt("¿Deseas agregar otro pedido? (s/n)");
}

mostrarPedidosCliente(cliente);
