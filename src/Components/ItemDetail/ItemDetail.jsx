import React, { useState } from "react";
import { Button, NavLink } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";





function InfoAfter(params) {

  return <Link to={'/Cart'} className="btn btn-dark"> Finalizar compra</Link>
}

function ButtonCount(params) {
  return <ItemCount estado={params.estado} setEstado={params.setEstado} stock={params.stock} setCantCarrito={params.setCantCarrito} cantCarrito={params.cantCarrito} />
}






const ComponenteCambiante = ({estado, setEstado, setCantCarrito, cantCarrito, cambiarContador, setCambiarContador, productoDetallado}) =>{
  const MiComponente = estado === "" ? ButtonCount : InfoAfter;
  
  function addToCart(params) {
    console.log("Aca estan los" + params);
    setEstado("Cambia")
  }

  return (
    <div>
    <MiComponente onConfirm={addToCart} setCantCarrito={setCantCarrito} cantCarrito={cantCarrito}stock={Math.floor(Math.random() * 15)} estado={estado} setEstado={setEstado} productoDetallado={productoDetallado}> </MiComponente>
  </div>
  )
  
}








const ItemDetail = (props) => {
  const [cambiarContador, setCambiarContador] = useState("")
  console.log(props.detalles);
  return (
    <>
      <img src={props.detalles.image} alt="" className="image"></img>
      <div className="detalles">
        <div className="descripcion">
          <h2 style={{ textAlign: "center" }}>{props.detalles.title}</h2>
          <div>{props.detalles.description}</div>
        </div>

        <ComponenteCambiante estado={cambiarContador} setEstado={setCambiarContador} setCantCarrito={props.setCantCarrito} cantCarrito={props.cantCarrito} productoDetallado={props.detalles} />
        
        <div className="lastCont">
          <div className="precio">$ {props.detalles.price}</div>
          <Button className="btn-dark btnBuy">Comprar ahora</Button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
