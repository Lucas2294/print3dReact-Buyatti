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
        props.setCantCarrito(props.cantCarrito + addOn)
        setAddOn(1)
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
                <Button className="btn-dark" onClick={()=>{
                    restarAlcontador();
                    setearClase(addOn - 1);
                }}
                >-</Button>
                <div>{addOn}</div>
                <Button className="btn-dark" onClick={()=>{
                agregarAlcontador()
                setearClase()
            }}>+</Button>
            </div>
            <Button onClick={agregarAlCarrito} className={clase, "btn-dark"}>Agregar al carrito</Button>
        </div>
    )
};

export default ItemCount