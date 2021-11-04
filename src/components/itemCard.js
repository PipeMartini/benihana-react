import Contador from "./contador";
import './styles/card.css';
import { Link } from "react-router-dom";
const ItemCard =({title, price, img, stock, id}) => {
    return(
        <>
        <div className="product_position">
            <div className="product_card">
                <h2 className="product_title"> {title} </h2>
                <h2 className="product_price">Precio: {price}$</h2>
                <img className="product_img" src={img}/> 
                <Contador stock={stock}></Contador> 
                <Link to={`/detail/${id}`}>
                <button>Mas informacion</button> 
                </Link>
            </div>
        </div>
        </>
    );
};

export default ItemCard;