// mostrar todos los productDetail mediante las cards del item.js
import React,{ useEffect, useState } from 'react';
import { item } from './item';
import ItemDetail from './itemdetail';
import { useParams } from 'react-router';

const ItemDetailContainer=()=>{
    const{id}= useParams()
    const[producto, setProducto] = useState([]);
    console.log(id)
    useEffect(()=>item.filter((e)=>{
        if(e.id===id){
            return setProducto(e)
        } 
        return null
    }),[])
    console.log(producto)
    return(
       <ItemDetail title={producto.title} price={producto.price} img={producto.img} description={producto.description}/>

    )
}
export default ItemDetailContainer