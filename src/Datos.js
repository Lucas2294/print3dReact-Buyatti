import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { DB } from './api/APIFirebase'



const colRef = collection(DB, 'productos')



export async function getData() {
  // let response = await fetch("https://fakestoreapi.com/products")
  // let result = await response.json()
  // return result



  let response = await getDocs(colRef).then((snapshot) => {

    const productosConFormato = snapshot.docs.map((rawDoc) => {
      return {
        id: rawDoc.id,
        ...rawDoc.data()
      }
    })

    return(productosConFormato)

  }, (error) => {
    console.log("Error al traer los Docs bro", error);
  })

  return response

}


export async function getDataCategory(categoria) {


  return new Promise((resolve, reject) => {

    if (categoria == "women's clothing") {
      categoria = "8sr6X38FSaZwOHzQGbe1"
    } 
    else if (categoria == "men's clothing") {
      categoria = "fhG35m7rBpeZlrbx8c3U"
    }
    else if (categoria == "jewelery") {
      categoria = "khdsqTJVDoN0fuvs3km9"
    }
    else if (categoria == "electronics") {
      categoria = "xBkmTB8g3uOlFED97k5w"
    }


    const consulta = query(collection(DB, 'productos'), where('category', '==', categoria));
    getDocs(consulta).then(snapshot => {
      // es posible usar snapshot.size para ver si se encontraron elementos
      
      const productosConFormato = snapshot.docs.map((rawDoc) => {
        return {
          id: rawDoc.id,
          ...rawDoc.data()
        }
      })

      resolve(productosConFormato)
    }, error => { /* handler en caso de error */ });


  })
}



export async function getDataProd(prod) {
  // console.log(prod);
  // let response = await fetch("https://fakestoreapi.com/products/" + prod)
  // let result = await response.json()
  // return result
  

  // return new Promise((resolve, reject) => {

  //   const consulta = query(collection(DB, 'productos'), where('id', '==', prod));
  //   getDocs(consulta).then(snapshot => {
  //     // es posible usar snapshot.size para ver si se encontraron elementos
      
  //     const productosConFormato = snapshot.docs.map((rawDoc) => {
  //       return {
  //         id: rawDoc.id,
  //         ...rawDoc.data()
  //       }
  //     })

  //     resolve(productosConFormato)
  //   }, error => { /* handler en caso de error */ });


  // })


  const itemRef = doc(DB, 'productos', prod);
  let response = await getDoc(itemRef).then(snapshot => {
  // Con snapshot.exists() verificamos que el producto existe.
  if (snapshot.exists()) {
  // Si existe el doc, podemos utilizar la info de snapshot
  // recordando siempre de usar .data()
  console.log({id: snapshot.id, ...snapshot.data()});
  const productosConFormato = {id: snapshot.id, ...snapshot.data()}
  return productosConFormato;
  }
  }, error => { /* handler en caso de error */ });

  return response


}