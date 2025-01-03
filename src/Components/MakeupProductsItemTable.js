import '../Style/MakeupProductsItemTable.css';

function MakeupProductsTable(props) {

    const handleImageClick = (event) => {
        props.onAddProductToCart(props.name)
    };

    return (
        <div className="product-items">
            <img className="shadow p-3 mb-5 bg-body-tertiary rounded image" src={props.image_link} onClick={handleImageClick} alt={props.name}/>
            <div className="product-info-container">
                <div className="name">{props.name}</div>
                <div className="brand">{props.brand}</div>
                <div className="price">{props.price_sign}{props.price}</div>
            </div>
        </div>
    );
}

export default MakeupProductsTable;