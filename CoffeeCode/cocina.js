import { bebidas } from "./datos.js";
import { postres } from "./datos.js";

export function agregar() {
    let nombre = prompt("Nombre del producto:");
    let precio = prompt("Precio del producto:");
    let tipo = prompt("Tipo de producto (bebida/postre):");

    if (tipo.toLowerCase() === "bebida") {
         bebidas.push(
        {
            nombre: nombre,
            precio: precio
        }
        );
    }
    else if (tipo.toLowerCase() === "postre") {

        postres.push(
            {
                nombre: nombre,
                precio: precio
            }
        );
    } 
}

export function listar() {
    let texto = "";

    bebidas.forEach((bebida, indice) => {
        texto += `${indice + 1}. ${bebida.nombre} - $${bebida.precio}\n`;
    });

    alert(texto || "No hay bebidas");
}

function editar() {
    listar();

    let indice = prompt("Número del producto a editar:") - 1;

    bebidas[indice].nombre = prompt("Nuevo nombre:");
    bebidas[indice].precio = prompt("Nuevo precio:");
}

function eliminar() {
    listar();

    let indice = prompt("Número del producto a eliminar:") - 1;

    productos.splice(indice, 1);
}
function filtar()
{
    let baratos=productos.filter(producto => producto.precio < 30);
    let texto = "Productos baratos:\n";

    baratos.forEach((producto, indice) => {
        texto += `${indice + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });

    alert(texto || "No hay productos baratos"); 

    let caros=productos.filter(roductos=>productos.precio>50);
    let textoc="Productos caros:\n";

    caros.forEach((producto, indice) => {
        textoc += `${indice + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });
    alert(textoc || "No hay productos caros");
}
function buscar() {

    let nombre = prompt("Ingrese el nombre del producto a buscar:");
    let productoEncontrado=productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());

    if (productoEncontrado) {
        alert(`Producto encontrado: ${productoEncontrado.nombre} - $${productoEncontrado.precio}`);
    } else {
        alert("Producto no encontrado");
    }

}                                         
function mostrarMenu() {
    let opcion;

    do {
            opcion = prompt(
                "COCINA\n" +
                "1. Agregar\n" +
                "2. Editar\n" +
                "3. Eliminar\n" +
                "4. Listar\n" +
                "5. Salir"
            );

        if (opcion == "1") agregar();
        if (opcion == "2") editar();
        if (opcion == "3") eliminar();
        if (opcion == "4") listar();

    } while (opcion != "5");
}

