// mostrar todos los productos mediante las cards del item.js

import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import {item} from './item.js';
import ItemCard from './itemCard.js';



export default function ItemList(){
    const[productos, setProductos] = useState([]);
    
   useEffect (() => {
    const task = new Promise ((resolve)=> {
        setTimeout(() => {
            resolve (item);
        }, 2000);
    });
        task.then (
            (result)=>{
                setProductos(result);
                return "retorno1"
            },
            (error)=>{
                console.log(error)
                return "error"
            },
        )
        .catch((err)=>{
            console.log("soy el catch: ", err)
        })
        .finally(()=> {
            console.log("me ejecuto siempre")
        });
   }, []);
useEffect(() => {
},[productos])

console.log('Console log Productos', productos)
    return(
        <div className="app">
            {productos && productos.map((producto)=> {
           return( <ItemCard key={producto.id} title={producto.title} price={producto.price} img={producto.img} stock={producto.stock} id={producto.id} />)
            })}
        </div>
    )}
