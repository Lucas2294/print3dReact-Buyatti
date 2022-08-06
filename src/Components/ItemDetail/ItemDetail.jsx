import React from "react";
import { Button } from "react-bootstrap";
import "./ItemDetail.css";

const ItemDetail = (props) => {
  return (
    <>
      <img src={props.detalles.image} alt="" className="image"></img>
      <div className="detalles">
        <div className="descripcion">
          <h2 style={{ textAlign: "center" }}>{props.detalles.title}</h2>
          <div>{props.detalles.description}</div>
        </div>
        <div className="lastCont">
          <div className="precio">$ {props.detalles.price}</div>
          <Button className="btn-dark btnBuy">Comprar ahora</Button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
