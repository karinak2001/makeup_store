import {useState} from "react";
import MakeupProductsItemTable from "./MakeupProductsItemTable";
import '../Style/MakeupProductsTable.css'
import FilterSection from "./FilterSection";
import { ref, set } from 'firebase/database';
import database from './FirebaseDB';

function MakeupProductsTable (props) {

    const [currentProducts, setCurrentProducts] = useState(props.items);

    // FilterPriceHandler

    const randomColorFunction = (colors) => {
        const colorNames = colors.map((color) => color.colour_name);
        const randomIndex = Math.floor(Math.random() * colorNames.length);
        return colorNames[randomIndex];
    }

    const addProductToCartHandler = (productName) => {
        const newProductInitial = currentProducts.find((product) => product.name === productName);

        const newProductFinal = {
            brand: newProductInitial.brand,
            name: newProductInitial.name,
            price: newProductInitial.price,
            price_sign: newProductInitial.price_sign,
            image_link: newProductInitial.image_link,
            product_color: randomColorFunction(newProductInitial.product_colors)
        }

        const uniqueKey = Date.now();

        // שליחת הנתונים
        set(ref(database, 'objects/' + uniqueKey), newProductFinal)
            .then(() => {
                console.log("Data sent successfully!");
            })
            .catch((error) => {
                console.error("Error sending data:", error);
            });
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