import { apiProductos, categories } from "./api.js";
import { categoriasControlador, productos } from "./controlador.js";
import { cargarCategorias, cargarDatos } from "./vista.js";

async function main() {
    // recibimos los datos
    const datos = await apiProductos()
    // preparamos los datos
    const divs = productos(datos)
    // mostramos los datos
    cargarDatos(divs)

    // categorias
    const categorias = await categories()
    const buttons = categoriasControlador(categorias)
    cargarCategorias(buttons)
}

main()