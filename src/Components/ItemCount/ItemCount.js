import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import './ItemCount.css';


function ItemCount(props){
    const [addOn, setAddOn] = useState(1)
    // const [clase, setClase] = useState("")
    const { addItem } = useContext(CartContext)


    useEffect(() => {
      }, [props]);



    function agregarAlcontador() {
        if (addOn < props.stock) {
            setAddOn(addOn + 1)
        }
        else return
    }
    function restarAlcontador() {
        if (addOn <1) {
            return
        } else{
            setAddOn(addOn - 1)
        }
    }
   function agregarAlCarrito(){
        props.setCantCarrito(props.cantCarrito + addOn)
        addItem(props.producto, addOn)
        setAddOn(1)
        if (props.estado === "") {
            props.setEstado("cambio de estado")            
        }
    }

    // function setearClase(cant){
    //     if (cant <= 0) {
    //         setClase("disabled")
    //     } else setClase("")
    // }



    
    return(
        <div className="d-flex flex-column agregarCarrito gap-3 divTotal">
            <div className="d-flex justify-content-between">
                <Button className="btn-dark" onClick={()=>{
                    restarAlcontador();
                    // setearClase(addOn - 1);
                }}
                >-</Button>
                <div>{addOn}</div>
                <Button className="btn-dark" onClick={()=>{
                agregarAlcontador()
                // setearClase()
            }}>+</Button>
            </div>
            <Button onClick={agregarAlCarrito} className={addOn===0 || addOn > props.stock ? "disabled btn-dark" : "btn-dark"}>Agregar al carrito</Button>
            <div>Stock: {props.stock}</div>
        </div>
    )
};

export default ItemCount