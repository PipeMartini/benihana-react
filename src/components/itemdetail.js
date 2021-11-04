import './styles/itemDetail.css';

const ItemDetail = ({title, price, img, description}) => {
    return(
        <>
        <div className="itemDetail">
            <div className="itemDetailContent">
                <div className="itemOpen">
                    <h2 className="itemDetail_title"> {title} </h2>
                    <h2 className="itemDetail_price">Precio: {price}$</h2>
                    <img className="itemDetail_img" src={img}/> 
                    <p className="itemDetail_desc">{description}</p>
                </div>            
            </div>
        </div>
        </>
    );
};

export default ItemDetail;