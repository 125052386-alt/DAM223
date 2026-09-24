import { agregar, listar,filtrar, buscar } from "./cocina.js";
import { nuevoPedido,listarPedidos} from "./cajero.js";
import { mostrarPedidosCliente } from "./cliente.js";

let op;
do
{
    let opcion=prompt("Que deseas hacer? \n1.-Listar Productos \n2.-Filtrar productos"
        +" \n3.-Hacer un nuevo pedido \n4.-Agregar productos \nElige una opción");

    switch(opcion) {
        case "1":
            listar();
            break;
        case "2":
            let filtro = prompt("¿Deseas filtrar o buscar los productos? (f/b)");
            if (filtro.toLowerCase() === "f") {
                filtrar();
            } else if (filtro.toLowerCase() === "b") {
                buscar();
            } else {
                alert("Opción no válida. Por favor, elige 'f' para filtrar o 'b' para buscar.");
            }

            break;
        case "3": 
            let seguirCliente = "s";

            while (seguirCliente.toLowerCase() === "s") {
                let cliente = prompt("Nombre del cliente:");
                let seguirPedido = "s";

                while (seguirPedido.toLowerCase() === "s") {
                    nuevoPedido(cliente);
                    seguirPedido = prompt("¿Deseas agregar otro pedido para este cliente? (s/n)");
                }

                mostrarPedidosCliente(cliente);
                listarPedidos(cliente);
               
                seguirCliente = prompt("¿Deseas agregar pedidos para otro cliente? (s/n)");
            }
            break;
        case "4":
            let productos=prompt("Agregar productos a la lista de productos disponibles (s/n):");
            while (productos.toLowerCase() === "s") {
                agregar();
                productos = prompt("¿Deseas agregar otro producto? (s/n)");
            }
            listar();
            break;
        default:
            alert("Opción no disponible");
    }       
    op=prompt("Deseas elegir otra opcion? s/n")
}while(op.toLowerCase() === "s");
