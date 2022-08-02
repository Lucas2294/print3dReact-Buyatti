// let Data = [
//     {
//       id: 101,
//       title: "Remera",
//       description: "Descripcion de la remera",
//       price: 1500,
//       pictureUrl: "http:pictureRemera",
//     },
//     {
//       id: 102,
//       title: "Pantalon",
//       description: "Descripcion del pantalon",
//       price: 3500,
//       pictureUrl: "http:picturePantalon",
//     },
//     {
//       id: 103,
//       title: "Bufanda",
//       description: "Descripcion de la bufanda",
//       price: 1200,
//       pictureUrl: "http:pictureBufanda",
//     },
//     {
//       id: 104,
//       title: "Campera",
//       description: "Descripcion de la campera",
//       price: 8000,
//       pictureUrl: "http:pictureCampera",
//     },
//     {
//       id: 105,
//       title: "Short",
//       description: "Descripcion del Short",
//       price: 2700,
//       pictureUrl: "http:pictureShort",
//     },
//   ];
  
  export async function getData() {
    let response = await fetch("https://fakestoreapi.com/products")
    let result = await response.json()
    return result
}



