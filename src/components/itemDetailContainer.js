// mostrar todos los productDetail mediante las cards del item.js
import React,{ useEffect, useState } from 'react';
import { item } from './item';
import ItemDetail from './itemDetail';
import { useParams } from 'react-router';
import AddToCart from './addToCart';


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
        <>
       <ItemDetail id={producto.id} title={producto.title} price={producto.price} img={producto.img} description={producto.description} stock={producto.stock}/>
       {producto.map((producto) => (
        <AddToCart id={producto.id} title={producto.title} onAdd={producto.onAdd}></AddToCart>
    ))}
    </>
    )
    
}
export default ItemDetailContainer