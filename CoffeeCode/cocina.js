import { bebidas, postres, promociones } from "./datos.js";

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

    alert("Lista de productos disponibles:");
    alert("Bebidas:");

    bebidas.forEach((bebidas, indice) => {
        texto += `${indice + 1}. ${bebidas.nombre} - $${bebidas.precio}\n`;
    });

    alert(texto || "No hay bebidas");
    texto = "";

    alert("Postres:");

    postres.forEach((postres, indice) => {
        texto += `${indice + 1}. ${postres.nombre} - $${postres.precio}\n`;
    });

    alert(texto || "No hay postres");
}

function editar() {
    listar();
    let tipo = prompt("Tipo de producto a editar (bebida/postre):");
    if (tipo.toLowerCase() === "bebida") {
        let indice = prompt("Número del producto a editar:") - 1;

        bebidas[indice].nombre = prompt("Nuevo nombre:");
        bebidas[indice].precio = prompt("Nuevo precio:");
    }
    else if (tipo.toLowerCase()==="postre");
    {
        let indice = prompt("Número del producto a editar:") - 1;
        postres[indice].nombre = prompt("Nuevo nombre:");
        postres[indice].precio = prompt("Nuevo precio:");

    }


}

function eliminar() {
    listar();
    
    let tipo = prompt("Tipo de producto a eliminar (bebida/postre):");
    if (tipo.toLowerCase() === "bebida") {
        let indice = prompt("Número del producto a eliminar:") - 1;

        bebidas.splice(indice, 1);
    }
    else if (tipo.toLowerCase()==="postre");
    {
        let indice = prompt("Número del producto a eliminar:") - 1;
        postres.splice(indice, 1);

    }

}
export function filtrar()
{
    let texto = "";
    const producto=[...bebidas,...postres];

    do
    {
        let op=prompt("1.-Baratos \n 2.-Caros \n 3.-Bebidad \n"
            +" 4.-Postres \n Elige una opción")
        switch(op)
        {
            case "1":
                let baratos=producto.filter(producto => producto.precio < 30);
                let texto = "Productos baratos:\n";

                baratos.forEach((producto, indice) => {
                    texto += `${indice + 1}. ${producto.nombre} - $${producto.precio}\n`;
                });

                 alert(texto || "No hay productos baratos"); 
                break
            case "2": 
                let caros=producto.filter(producto => producto.precio > 50);
                let textoc="Productos caros:\n";

                caros.forEach((producto, indice) => {
                 textoc += `${indice + 1}. ${producto.nombre} - $${producto.precio}\n`;
                });

                 alert(textoc || "No hay productos caros");
                break
            case "3":
                alert("Bebidas:");

                bebidas.forEach((bebidas, indice) => {
                    texto += `${indice + 1}. ${bebidas.nombre} - $${bebidas.precio}\n`;
                });

                alert(texto || "No hay bebidas");
                break
            case "4": 
                texto = "";

                alert("Postres:");

                postres.forEach((postres, indice) => {
                texto += `${indice + 1}. ${postres.nombre} - $${postres.precio}\n`;
                });

                alert(texto || "No hay postres");
                break
            default:
                alert("Opcion no disponible");
        }

    }while(op<0 && op>4);


    
}
export function buscar() {

    let nombre = prompt("Ingrese el nombre del producto a buscar:");
    let productoEncontradob=bebidas.find(bebida => bebida.nombre.toLowerCase() === nombre.toLowerCase());
    let productoEncontradop=postres.find(postre => postre.nombre.toLowerCase() === nombre.toLowerCase());

    if (productoEncontradob) {
        alert(`Producto encontrado: ${productoEncontradob.nombre} - $${productoEncontradob.precio}`);
    } else if (productoEncontradop) {
        alert(`Producto encontrado: ${productoEncontradop.nombre} - $${productoEncontradop.precio}`);
    } else {
        alert("Producto no encontrado");
    }

}

export function agregarPromocion() {
    let descripcion = prompt("Escribe la nueva promoción:");

    if (descripcion && descripcion.trim() !== "") {
        promociones.push(descripcion.trim());
        alert("Promoción agregada correctamente.");
    } else {
        alert("No se pudo agregar una promoción vacía.");
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
/* filtrar();
/* listar();

buscar(); */

