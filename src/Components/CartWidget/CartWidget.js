import Purchase from './shopping-cart (1).png';
import { Button } from 'react-bootstrap';
import './CartWidget.css';
import Badge from 'react-bootstrap/Button';




function CartWidget(props) {
    return(
        <Button variant="dark" style={{ padding: 'opx' }} className="botonCarrito">
            <img src={Purchase} alt='' width="20px" className='mx-2' />
            <Badge bg="dark" className='position-absolute badge rounded-pill insign'>{props.cantCarrito}</Badge>
        </Button>

    )
}

export default CartWidget