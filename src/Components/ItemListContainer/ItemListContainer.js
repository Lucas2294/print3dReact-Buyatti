import React from "react";
import ItemList from "../ItemList/ItemList";
import { getData, getDataCategory } from "../../Datos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export const ItemListContainer = ({setCantCarrito, cantCarrito}) => {

    const [data, setData] = useState([])

    const { catname } = useParams();

    async function llamarDatos() {
        try {
            if (catname) {
                let productos = await getDataCategory(catname)
                setData(productos)
            } else{
                let productos = await getData()
                setData(productos)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setTimeout(() => {   
            llamarDatos()
        },500);
//eslint-disable-next-line
    }, [catname])
    



    return (<>
        <ItemList productos={data} setCantCarrito={setCantCarrito} cantCarrito={cantCarrito}/>
    </>
    )
}