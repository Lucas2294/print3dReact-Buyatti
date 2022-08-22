import Purchase from './shopping-cart (1).png';
import './CartWidget.css';
import Badge from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Context/CartContext';




function CartWidget(props) {

    const { carrito } = useContext(CartContext)
    const [cantidadDeCarrito, setcantidadDeCarrito] = useState(0)


    const lacantidad = ()=>{
        return carrito.map(product => product.cant).reduce((prev, curr) => prev + curr, 0);
    }

    useEffect(() => {
        setcantidadDeCarrito(lacantidad)//eslint-disable-next-line
    }, [carrito])
    


    return(
        <div variant="dark" style={{ padding: 'opx' }} className="btn botonCarrito">
            <img src={Purchase} alt='' width="20px" className='mx-2' />
            <Badge bg="dark" className='position-absolute badge rounded-pill insign'>{cantidadDeCarrito}</Badge>
        </div>

    )
}

export default CartWidget