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
            console.log(setData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setTimeout(() => {   
            llamarDatos()
        }, 3000);

    }, [])
    



    return (<>
        <ItemList productos={data} setCantCarrito={setCantCarrito} cantCarrito={cantCarrito} />    

    </>
    )
}