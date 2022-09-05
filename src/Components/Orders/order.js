import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getDataProd } from '../../Datos'


function Order(params) {

  const { ordernum } = useParams();
  const [orden, setOrden] = useState({})



  async function llamarDatos() {
    try {
      console.log(params);
        let orderGen = await getDataProd("orders", ordernum)
        setOrden(orderGen)
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
  llamarDatos() //eslint-disable-next-line
}, [])
  
  return(
    <>
      <div>Hola {orden.buyer.name}, se realizó correctamente tu compra con el código {ordernum}</div>
    </>
  )
}

export default Order