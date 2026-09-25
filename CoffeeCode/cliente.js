import { listaPedidos, bebidas, postres, promociones } from "./datos.js";

let productos = [...bebidas, ...postres];
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
  const lista = productos.map((producto, indice) => {
    return `${indice + 1}. ${producto.nombre} - $${producto.precio}`;
  });

  console.log("Lista de productos disponibles:\n" + lista.join("\n"));
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
    (pedido) => pedido.nombreCliente.toLowerCase() === cliente.toLowerCase()
  );

  let total = pedidos.reduce((acumulado, pedido) => acumulado + Number(pedido.precioProducto || 0), 0);

  let texto = `Estos son los Pedidos de ${cliente}:\n\n`;

  pedidos.forEach((pedido, indice) => {
    texto += `${indice + 1}. ${pedido.nombreProducto} - $${pedido.precioProducto}\n`;
  });

  texto += `\nTotal de pedidos: $${total.toFixed(2)}`;

  alert(texto || "No hay pedidos para ese cliente");

}
export function mostrarPromocionesCliente() {
  const promocionesTexto = promociones.map((promo, indice) => {
    return `${indice + 1}. ${promo}`;
  });

  alert("Promociones disponibles:\n\n" + (promocionesTexto.join("\n") || "No hay promociones disponibles en este momento."));
}
export function mostrarEstadosPedido(pedido) {
  return new Promise(resolve => {
    alert(`Pedido recibido: ${pedido.nombreProducto}`);

    setTimeout(() => {
      alert("Preparando...");

      setTimeout(() => {
        alert("Empacando...");

        setTimeout(() => {
          alert("Pedido entregado");
          resolve();
        }, 2000);
      }, 2000);
    }, 2000);
  });
}

function main() {
  mostrarMenu();
  consultarProductos();
  crearPedido();
  mostrarPedidosCliente();
}



