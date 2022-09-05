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

  function removeItem(id) {
    const newArray = carrito.filter(product => product.id !== id);
    setCarrito(newArray)
  }


  function removeItems() {
    const newArray = [];
    setCarrito(newArray)
  }


  useEffect(() => {
  }, [carrito])


  return (
    <CartContext.Provider value={{ carrito, addItem, removeItem, removeItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;