// mostrar todos los productos mediante las cards del item.js
import { productos } from './item.js';
import { useState } from 'react/cjs/react.development';
import {productos} from './components/item.js';


const productos = [productos]

const Producto =({title,price,img}) => {
    return(
        <>
        <img>{img}</img>
        <h1>{title}</h1>
        <h2>Precio: {price}</h2>
        </>
    );
};

export default function app(){
    const[productos, setProductos] = useState([producto]);
    const task = new Promise ((resolve)=> {
        setTimeout(() => {
            resolve (productos);
        }, 2000),
        
        task.then (
            (result)=>{
                console.log(result);
            },
            (error)=>{
                console.log(error)
            },
        )
        .catch((err)=>{
            console.log("soy el catch: ", err)
        })
        .finally(()=> {
            console.log("me ejecuto siempre")
        });
    return(
        <div className="app">
            {productos.map((producto)=> {
            <Producto name={producto.title} price={producto.price} />
            }
        </div>
    );
};