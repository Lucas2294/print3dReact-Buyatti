import { useState } from "react";
import { Button } from "react-bootstrap";
import './ItemCount.css';


function ItemCount(props){
    const [addOn, setAddOn] = useState(1)
    const [clase, setClase] = useState("")

    function agregarAlcontador() {
        setAddOn(addOn + 1)
    }
    function restarAlcontador() {
        if (addOn <1) {
            return
        } else{
            setAddOn(addOn - 1)
        }
        console.log(addOn + "restar");
    }

   function agregarAlCarrito(){
        props.setCantCarrito(addOn)
    }

    function setearClase(cant){
        console.log(cant);
        if (cant <= 0) {
            setClase("disabled")
        } else setClase("")
    }
    
    return(
        <div className="d-flex flex-column agregarCarrito gap-3">
            <div className="d-flex justify-content-between">
                <Button onClick={()=>{
                    restarAlcontador();
                    setearClase(addOn - 1);
                }}
                >-</Button>
                <div>{addOn}</div>
                <Button onClick={()=>{
                agregarAlcontador()
                setearClase()
            }}>+</Button>
            </div>
            <Button onClick={agregarAlCarrito} className={clase}>Agregar al carrito</Button>
        </div>
    )
};

export default ItemCount