import { useState } from 'react';
import './styles/contador.css';


const Contador = ({stock}) => {
const [count, setCount] = useState(0);

const sumar = () => {
       if(count < stock){
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
        <div className="button_area">
            <h3>Unidades {count}</h3>
            <button className="button" onClick={()=>sumar()}> +</button>
            <button className="button" onClick={()=>eliminar()}> -</button>
        </div>
    </>
    );
};
export default Contador