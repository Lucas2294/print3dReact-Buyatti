import React from "react";
import ItemList from "../ItemList/ItemList";
import { getData } from "../../Datos";
import { useEffect, useState } from "react";


export const ItemListContainer = ({setCantCarrito, cantCarrito}) => {

    const [data, setData] = useState([])

    async function llamarDatos() {
        try {
            let productos = await getData()
            setData(productos)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setTimeout(() => {   
            llamarDatos()
        },1500);

    }, [])
    



    return (<>
        <ItemList productos={data} setCantCarrito={setCantCarrito} cantCarrito={cantCarrito}/>
    </>
    )
}