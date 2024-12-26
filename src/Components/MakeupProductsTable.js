import {useState} from "react";
import MakeupProductsItemTable from "./MakeupProductsItemTable";
import '../Style/MakeupProductsTable.css'
import FilterSection from "./FilterSection";

function MakeupProductsTable (props) {

    const [currentProducts, setCurrentProducts] = useState(props.items);

    // FilterPriceHandler


    // addProductToCartHandler
    const addProductToCartHandler = (productName) => {
        console.log(productName)
    }


    // resetProductsTableHandler

    return (
        <div>
            <FilterSection/>
            <br/>
            <br/>
            <div className="makeup-products-table">
                {currentProducts.map((productData, index) => (
                    <MakeupProductsItemTable
                        key={index}
                        brand={productData.brand}
                        name={productData.name}
                        price={productData.price}
                        image_link={productData.image_link}
                        product_type={productData.product_type}
                        onAddProductToCart={addProductToCartHandler}
                    />
                ))}
            </div>
        </div>
    )
}
export default MakeupProductsTable;