import { useState } from 'react';
const Counter = () => {
const [count, setCount] = useState(0);

const sumar = () => {
       if(count < 10){
    setCount(count +1);
}else{
    alert ("no hay mas stock");
}};

const eliminar = () => {
    if (count > 0){
        setCount(count -1);
    }};

return(
    <>
        <h1>clicks: {count}</h1>
        <button onClick={()=>sumar()}> click</button>
        <button onClick={()=>eliminar()}> Eliminar</button>
    </>
    );
};

export default function app() {
    return(
        <>
        <Counter/>
        </>
    );
}