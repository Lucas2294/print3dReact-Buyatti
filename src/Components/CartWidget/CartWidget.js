import Purchase from './shopping-cart (1).png';
import './CartWidget.css';
import Badge from 'react-bootstrap/Button';




function CartWidget(props) {
    return(
        <div variant="dark" style={{ padding: 'opx' }} className="btn botonCarrito">
            <img src={Purchase} alt='' width="20px" className='mx-2' />
            <Badge bg="dark" className='position-absolute badge rounded-pill insign'>{props.cantCarrito}</Badge>
        </div>

    )
}

export default CartWidget