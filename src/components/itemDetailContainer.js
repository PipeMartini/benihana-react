// mostrar todos los productDetail mediante las cards del item.js
import { useEffect } from 'react';
import { useState } from 'react';
import { item } from './item';
import ModalDetail from './detail';

export default function ItemList(){
    const[productDetail, setProductos] = useState([]);
    
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
},[productDetail])

console.log('Console log Productos', productDetail)
    return(
        <div className="app">
            {productDetail && productDetail.map((productDet)=> {
           return( <ModalDetail key={productDet.id} title={productDet.title} price={productDet.price} img={productDet.img} stock={productDet.stock} />)
            })}
        </div>
    )}

