import './styles/itemDetail.css';
import Contador from './contador';
import Basket from './basket';


const ItemDetail = ({title, price, img, description, stock, id, onAdd}) => {
   
   
    return(
        <>
        <div className="Basket"><Basket props={id}/></div>
                        
        <div className="itemDetail">
            <div className="itemDetailContent">
                <div className="itemOpen">
                    <h2 className="itemDetail_title"> {title} </h2>
                    <img className="itemDetail_img" src={img}/> 
                    <h2 className="itemDetail_price">Precio: {price}$</h2>
                    <p className="itemDetail_desc">{description}</p>
                    <div className="ItemDetail_buttons">
                        <Contador stock={stock}/>
                    </div>
                </div>            
            </div>
        </div>
        </>
    );
}

export default ItemDetail