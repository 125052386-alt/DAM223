import { listaPedidos } from "./datos.js";


function mostrarMenu() {
  console.log(`
=============================
    MENÚ DE CLIENTE
=============================
1. Consultar Productos
2. Crear Pedido de Productos
3. Listar Pedidos
4. Salir
=============================
`);
}


function consultarProductos() {

  console.log(" Lista de productos disponibles:");

  productos.forEach((producto, indice) => {

    console.log(
      `${indice + 1}. ${producto.nombre} - $${producto.precio}`
    );

  });

}


function crearPedido(producto) {

  let indice = prompt(
    "Ingrese el número del producto:"
  ) - 1;

  if (productos[indice]) {

    let nombreCliente = prompt(
      "Ingrese el nombre del cliente:"
    );

    listaPedidos.push({

      nombreCliente: nombreCliente,

      nombreProducto: productos[indice].nombre,

      precioProducto: productos[indice].precio

    });

    console.log(
      `Pedido creado para el producto: ${productos[indice].nombre}`
    );

  } else {

    console.log("Producto no encontrado.");

  }
}


export function mostrarPedidosCliente(cliente){

  let pedidos = listaPedidos.filter(
    (pedido) =>
      pedido.nombreCliente.toLowerCase() === cliente.toLowerCase()
  );

  let texto = `Pedidos de ${cliente}:\n\n`;

  pedidos.forEach((pedido, indice) => {
    texto += `${indice + 1}. ${pedido.nombreProducto} - $${pedido.precioProducto}\n`;
  });

  alert(texto || "No hay pedidos para ese cliente");

}



function main() {
  mostrarMenu();
  consultarProductos();
  crearPedido();
  mostrarPedidosCliente();
}