
  export async function getData() {
    let response = await fetch("https://fakestoreapi.com/products")
    let result = await response.json()
    return result
}


export async function getDataCategory(categoria) {
  let response = await fetch("https://fakestoreapi.com/products/category/" + categoria)
  let result = await response.json()
  return result
}



export async function getDataProd(prod) {
  let response = await fetch("https://fakestoreapi.com/products/" + prod)
  let result = await response.json()
  return result
}