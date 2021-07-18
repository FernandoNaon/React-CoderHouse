export async function getData() {
    const response = await fetch(process.env.PUBLIC_URL + '/json/products.json')
    const data = await response.json();
    return data;
}

/*::::::::::::::::::::::::::::::::::: API ML ::::::::::::::::::::::::::::::::::::: */

// export async function getDataML(categorias) {
//     const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categorias}`)
//     const data = await response.json();
//     return data.results;
// }