import { createContext, useEffect, useState } from "react";
////////////////////////CONTEXT /////////////////////////////
export const CartContext = createContext();
// PROVIDER

const CartProvider = ({ defaultValue = [], children }) => {
  const [carrito, setCarrito] = useState(defaultValue);

  const addItem = (obj, cant) => {
    const newArray = [...carrito]
    const isIn = newArray.find(producto => producto.id === obj.id)
    if (isIn) {
        isIn.cant = isIn.cant + cant
        setCarrito(newArray)
    }else{ 
      obj.cant = cant
      setCarrito([...carrito, obj])
    }
  }





    // isInCart(obj.id) ?
    //   newCarrito(obj, cant) :
    //   setCarrito([...carrito, { ...obj, cant: cant }]);


    // setCarrito([...carrito,{...obj, cant: cant}]);
    // newCarrito(obj, cant)
    // isInCart(obj.id)


  useEffect(() => {
    console.log(carrito);
  }, [carrito])



  // const newCarrito = (obj, cant) => {
  //     const newCart = carrito.map(function (prod) {
  //     if (prod.id === obj.id) {
  //       prod.cant = prod.cant + cant
  //     } 
  //     return prod
  //   })
  //   console.log("EL NEW CART", newCart);
  //   setCarrito(newCart)
  // }



  // const addItem = () =>{
  //   console.log(carrito);
  // }

  // const isInCart = (newProd, cantidad) => {
  //   const isIn = carrito.find(producto => producto.id === newProd.id)
  //   if (isIn) {
  //       isIn.cant = isIn.cant + cantidad
  //       setCarrito([...carrito])
  //   }else{ 
  //     newProd.cant = cantidad
  //     setCarrito([...carrito, newProd])
  //   }
    
  // } 


  return (
    <CartContext.Provider value={{ carrito, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;