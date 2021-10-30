import Contador from "./contador";
import './styles/card.css';

const Producto =({title, price, img}) => {
    return(
        <>
        <div className="product_position">
            <div className="product_card">
                <h2 className="product_title"> {title} </h2>
                <h2 className="product_price">Precio: {price}$</h2>
                <img className="product_img" src={img}/>
                <Contador/>
            </div>
        </div>
        </>
    );
};
export default Producto;