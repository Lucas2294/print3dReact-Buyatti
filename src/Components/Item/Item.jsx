import "./Item.css";
import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ producto, cantCarrito, setCantCarrito, stock, setdetalles }) => {

  function mandarDetalle(){
    setdetalles(producto)
  }


  return (
    <>
      <div class="tarjeta">
        <h5>{producto.title}</h5>
        <img src={producto.image} height="150" alt="" />
        <div>{producto.price}</div>
        <ItemCount
          setCantCarrito={setCantCarrito}
          cantCarrito={cantCarrito}
          stock={stock}
        ></ItemCount>
        <Button className="btn-dark" onClick={mandarDetalle}>Details</Button>
        <Link to={`detail` + producto.id}>Detallitos</Link>
      </div>
    </>
  );
};

export default Item;