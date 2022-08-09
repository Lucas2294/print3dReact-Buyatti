import React from 'react'
import { ItemListContainer } from '../Components/ItemListContainer/ItemListContainer'


const Home = ({setCantCarrito, cantCarrito}) => {
  return (
    <ItemListContainer setCantCarrito={setCantCarrito} cantCarrito={cantCarrito} />
  )
}

export default Home