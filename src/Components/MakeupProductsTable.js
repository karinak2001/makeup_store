import {useState} from "react";
import MakeupProductsItemTable from "./MakeupProductsItemTable";
import '../Style/MakeupProductsTable.css'
import FilterSection from "./FilterSection";

function MakeupProductsTable (props) {

    const [currentProducts, setCurrentProducts] = useState(props.items);

    // FilterPriceHandler


    // randomColor


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
                        price_sign={productData.price_sign}
                        image_link={productData.image_link}
                        onAddProductToCart={addProductToCartHandler}
                    />
                ))}
            </div>
        </div>
    )
}
export default MakeupProductsTable;