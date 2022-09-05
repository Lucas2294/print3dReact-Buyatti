import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import "./Cart.css";

export const CartItem = (props) => {

    const { removeItem } = useContext(CartContext)

    function remove() {
        removeItem(props.id)
    }

  return (
    <div className='container-item'>
        <div className='item-title'>{props.title}</div>
        <div>{props.cantidad} u.</div>
        <div> $ {props.precio}</div>
        <img src={props.image} className='img-item' alt="" />
        <button className='btn btn-danger' onClick={remove}>Eliminar</button>
    </div>
  )
}
