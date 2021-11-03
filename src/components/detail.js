import './styles/modal.css';

const ModalDetail = ({title, price, img, description}) => {
    return(
        <>
        <div className="modal_detail">
            <div className="modal_content">
                <div className="modal_close">X</div>
                <div className="modal_open">
                    <h2 className="modal_detail_title"> {title} </h2>
                    <h2 className="modal_detail_price">Precio: {price}$</h2>
                    <img className="modal_detail_img" src={img}/> 
                    <p className="modal_detail_desc">{description}</p>
                </div>            
            </div>
        </div>
        </>
    );
};

export default ModalDetail;