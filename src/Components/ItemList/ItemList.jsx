import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = (props) => {
  return (
    <>
    <div class="grilla">
     {props.productos.map(producto => <Item producto={producto} key={producto.id} stock={Math.floor(Math.random() * 15)} setCantCarrito={props.setCantCarrito} cantCarrito={props.cantCarrito}/>)}

    </div>
    </>
  )
}

export default ItemList