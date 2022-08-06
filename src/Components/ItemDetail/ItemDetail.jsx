import React from "react";
import "./ItemDetail.css";

const ItemDetail = (props) => {
  return (
    <>
      <img src={props.detalles.image} alt="" className="image"></img>
      <div className="detalles">
        <div className="descripcion">
          <h2 style={{textAlign: "center"}}>{props.detalles.title}</h2>
          <div>{props.detalles.description}</div>
        </div>
        <div className="precio">$ {props.detalles.price}</div>
      </div>
    </>
  );
};

export default ItemDetail;
