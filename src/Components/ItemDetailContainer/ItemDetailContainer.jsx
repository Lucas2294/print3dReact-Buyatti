import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";
import { getDataProd } from '../../Datos';

const ItemDetailContainer = (props) => {

  const [producto, setproducto] = useState({})
  const { prod } = useParams();


  async function llamarDatos() {
    try {
        let productos = await getDataProd(prod)
        setproducto(productos)
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
  llamarDatos(prod) //eslint-disable-next-line
}, [prod])



  return (
    <div className='container'>
      <ItemDetail setCantCarrito={props.setCantCarrito} cantCarrito={props.cantCarrito} detalles={producto}/>
    </div>
  )
}

export default ItemDetailContainer