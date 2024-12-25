import {useState} from "react";
import MakeupProductsItemTable from "./MakeupProductsItemTable";
import '../Style/MakeupProductsTable.css'

function MakeupProductsTable (props) {

    const [currentProducts, setCurrentProducts] = useState(props.items);

    // FilterPriceHandler

    // addProductToCardHandler

    // resetProductsTableHandler

    return (
        <div>
            // FilterSection

            <div className="makeup-products-table">
                {currentProducts.map((productData, index) => (
                    <MakeupProductsItemTable
                        key={index}
                        brand={productData.brand}
                        name={productData.name}
                        price={productData.price}
                        image_link={productData.image_link}
                        product_type={productData.product_type}
                        tag_list={productData.tag_list}
                    />
                ))}
            </div>
        </div>
    )
}

export default MakeupProductsTable;