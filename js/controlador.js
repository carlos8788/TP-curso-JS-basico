export const productos = (datos) => {

    let contenedor = '';

    datos.forEach(dato => {
        contenedor += `
                        <div class="card" style="width: 18rem;">
                            <div class="card-header card-header-custom">
                                <h5 class="card-title">
                                    ${dato.name}
                                </h5>
                            </div>
                            <div class="card-body-custom">
                                <img src="${dato.img_url}" class="img-custom " alt="${dato.name}">
                            </div>
                            <div class="card-footer card-footer-custom">
                                <p class="card-text">
                                    ${dato.description}
                                </p>
                            </div>
                        </div>
                        `
    })

    return contenedor
}

export const categoriasControlador = (datos) => {

    let contenedor = '';

    datos.forEach(dato => {
        contenedor += `
                        <input type="radio" class="btn-check" name="btnradio" id="${dato.name}" autocomplete="off" checked="">
                        <label class="btn btn-outline-primary" for="${dato.name}">${dato.name}</label>
                        `
    })

    return contenedor
}