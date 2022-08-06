import "./Item.css";
import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ producto, cantCarrito, setCantCarrito, stock }) => {
  const sendPage = useNavigate();

  const loadProductDetails = () => {
    sendPage(`detail` + producto.id);
  };

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
        <Button className="btn-dark" onClick={loadProductDetails}>
          Details
        </Button>
      </div>
    </>
  );
};

export default Item;
