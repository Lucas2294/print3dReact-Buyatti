import Purchase from './shopping-cart (1).png'
import { Button } from 'react-bootstrap'




function CartWidget() {
    return(
        <Button variant="dark" style={{ padding: 'opx' }}>
            <img src={Purchase} alt='' width="20px" className='mx-2' />
        </Button>
    )
}

export default CartWidget