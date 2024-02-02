export const apiProductos = async () => {
    return fetch('http://localhost:8000/products')
        .then(response => response.json())
        .then(data => data.results)    
}

export const categories = async () => {
    return fetch('http://localhost:8000/categories')
        .then(response => response.json())
        .then(data => data.results)    
}