
import "./Item.css"
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({producto, cantCarrito, setCantCarrito, stock}) => {
  return (
<>
    <div class="tarjeta">
        <h5>{producto.title}</h5>
        <img src={producto.image} height="150" alt=""/>
        <div>{producto.price}</div>
        <ItemCount setCantCarrito={setCantCarrito} cantCarrito={cantCarrito} stock={stock}></ItemCount>
    </div>
</>
  )
}

export default Item