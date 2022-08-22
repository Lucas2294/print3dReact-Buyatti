import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { CartItem } from "./CartItem";

function SendToHome(params) {
  return (
    <div>
      No tiene productos en su carrito, puede agregarlos desde 
      <Link to={"/"}>
        {" "}
        aqui.
      </Link>
    </div>
  );
}

function CartItems(params) {
  let precioTotal = params.cantCarro
    .map((prod) => prod.cant * prod.price)
    .reduce((previousValue, currentValue) => previousValue + currentValue);

  return (
    // <ItemCount
    //   estado={params.estado}
    //   setEstado={params.setEstado}
    //   stock={params.stock}
    //   setCantCarrito={params.setCantCarrito}
    //   cantCarrito={params.cantCarrito}
    //   producto={params.producto}
    // />
    <>
      <h2> Este es el contenido de tu carrito. </h2>
      <div className="container-items">
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
      </div>
      <h4> Total a pagar : {precioTotal}</h4>
    </>
  );
}

const ConditionalComponent = ({ cantCarro }) => {
  const MiComponente = cantCarro <= 0 ? SendToHome : CartItems;

  return (
    <div>
      <MiComponente cantCarro={cantCarro} />
    </div>
  );
};

const Cart = () => {
  const { carrito } = useContext(CartContext);

  // useEffect(() => {
  //   console.log("asd");
  // }, [carrito])

  return (
    <div>
      <ConditionalComponent cantCarro={carrito} />
    </div>
  );
};

export default Cart;
