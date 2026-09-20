import { productos } from "./datos.js";

function agregar() {
    let nombre = prompt("Nombre del producto:");
    let precio = prompt("Precio del producto:");

    productos.push(
        {
            nombre: nombre,
            precio: precio
        }
    );
}

export function listar() {
    let texto = "";

    productos.forEach((producto, indice) => {
        texto += `${indice + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });

    alert(texto || "No hay productos");
}

function editar() {
    listar();

    let indice = prompt("Número del producto a editar:") - 1;

    productos[indice].nombre = prompt("Nuevo nombre:");
    productos[indice].precio = prompt("Nuevo precio:");
}

function eliminar() {
    listar();

    let indice = prompt("Número del producto a eliminar:") - 1;

    productos.splice(indice, 1);
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

