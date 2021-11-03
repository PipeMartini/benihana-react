import Contador from "./contador";
import './styles/card.css';
import productModal from "./itemDetailContainer";
const Producto =({title, price, img, stock}) => {
    return(
        <>
        <div className="product_position">
            <div className="product_card">
                <h2 className="product_title"> {title} </h2>
                <h2 className="product_price">Precio: {price}$</h2>
                <img className="product_img" src={img}/> 
                <Contador stock={stock}></Contador> 
                <button onClick={productModal}>Mas informacion</button>       
            </div>
        </div>
        </>
    );
};

export default Producto;