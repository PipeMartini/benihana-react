import React,{ useEffect, useState } from 'react';
import { item } from './item';
import { useParams } from 'react-router';

//export default function Basket(props) {
//    const{cartItems}= props;
    
const Basket=()=>{
    const{idBasket}= useParams()
    const[productBasket, setProductBasket] = useState([]);
    console.log(idBasket)
    useEffect(()=>item.filter((e)=>{
        if(e.id===idBasket){
            return setProductBasket(e)
        } 
        return null
    }),[])
    console.log(productBasket)


return (
    <div>
             {productBasket.length === 0 && <div>No hay productos en el carro.</div>}
             {productBasket.map((productBasket)=> (
                 <div>
                 <div key={productBasket.id}/>
                 <p>{productBasket.title}</p>
                 <div>{productBasket.price}</div>
                 </div>
             ))}
             {productBasket !== 0 && (
                 <>
                 <h1>{productBasket.title}</h1>
                 <h3>{productBasket.price}</h3>
                 </>
     
     )}
             
         </div>
     );
    
    }
    export default Basket;