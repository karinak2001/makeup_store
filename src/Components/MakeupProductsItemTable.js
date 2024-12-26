import '../Style/MakeupProductsItemTable.css'

function MakeupProductsTable(props) {

    return (
        <div className="product-items">
            <img className="image" src={props.image_link} alt={props.name}/>
            <div className="name">{props.name}</div>
            <div className="brand">{props.brand}</div>
            <div className="price">${props.price}</div>
        </div>
    )
}
export default MakeupProductsTable;