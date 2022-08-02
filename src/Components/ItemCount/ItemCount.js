import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import './ItemCount.css';


function ItemCount(props){
    const [addOn, setAddOn] = useState(1)
    const [clase, setClase] = useState("")

    useEffect(() => {
        console.log("En el update");

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
        console.log(addOn + "restar");
    }

   function agregarAlCarrito(){
        props.setCantCarrito(props.cantCarrito + addOn)
        setAddOn(1)
        console.log("agregarCarrito");
    }

    function setearClase(cant){
        console.log("setear clase");
        if (cant <= 0) {
            setClase("disabled")
        } else setClase("")
    }


    
    console.log("render");
    return(
        <div className="d-flex flex-column agregarCarrito gap-3 divTotal">
            <div className="d-flex justify-content-between">
                <Button className="btn-dark" onClick={()=>{
                    restarAlcontador();
                    setearClase(addOn - 1);
                }}
                >-</Button>
                <div>{addOn}</div>
                <Button className="btn-dark" onClick={()=>{
                agregarAlcontador()
                // setearClase()
            }}>+</Button>
            </div>
            <Button onClick={agregarAlCarrito} className={addOn===0 ? "disabled btn-dark" : "btn-dark"}>Agregar al carrito</Button>
            <div>Stock: {props.stock}</div>
        </div>
    )
};

export default ItemCount