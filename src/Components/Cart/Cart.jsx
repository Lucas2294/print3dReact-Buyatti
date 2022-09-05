import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import UserForm from "../userForm/userForm";
import { CartItem } from "./CartItem";

// Condicional si carrito no tiene items
function SendToHome(params) {
  return (
    <div>
      No tiene productos en su carrito, puede agregarlos desde
      <Link to={"/"}> aqui.</Link>
    </div>
  );
}

// Condicional si carrito tiene items
function CartItems(params) {
  let precioTotal = params.cantCarro
    .map((prod) => prod.cant * prod.price)
    .reduce((previousValue, currentValue) => previousValue + currentValue);

  return (
    <div style={{ display: "flex" }}>
      <div className="container-items">
        <h2> Este es el contenido de tu carrito. </h2>
        {params.cantCarro.map((producto) => (
          <CartItem
            key={producto.id}
            id={producto.id}
            title={producto.title}
            image={producto.image}
            cantidad={producto.cant}
            precio={producto.price}
          />
        ))}
        <h4> Total a pagar : {precioTotal.toFixed(2)}</h4>
      </div>

      <UserForm item={params.cantCarro} precioTotal={precioTotal} />
    </div>
  );
}

// Componente condicional

const ConditionalComponent = ({ cantCarro, removeItems }) => {
  const MiComponente = cantCarro <= 0 ? SendToHome : CartItems;

  return (
    <div>
      <MiComponente cantCarro={cantCarro} removeItems={removeItems} />
    </div>
  );
};

// Carro

const Cart = () => {
  const { carrito, removeItems } = useContext(CartContext);

  // useEffect(() => {
  //   console.log("asd");
  // }, [carrito])

  return (
    <div>
      <ConditionalComponent cantCarro={carrito} removeItems={removeItems} />
    </div>
  );
};

export default Cart;
