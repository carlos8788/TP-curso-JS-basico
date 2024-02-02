const section = document.getElementById('productos')
const divButtons = document.getElementById('categorias')

export const cargarDatos = (datos) => {
    section.innerHTML = datos
}


export const cargarCategorias = (datos) => {
    divButtons.innerHTML = datos
}