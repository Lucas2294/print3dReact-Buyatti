import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = (props) => {
  return (
    <>
    <div className="grilla">
     {props.productos.map(producto => <Item producto={producto} key={producto.id} stock={producto.stock} setCantCarrito={props.setCantCarrito} cantCarrito={props.cantCarrito} />)}

    </div>
    </>
  )
}

export default ItemList