import {useState} from "react";
import MakeupProductsItemTable from "./MakeupProductsItemTable";
import '../Style/MakeupProductsTable.css';
import FiltersSection from "./FiltersSection";
import { ref, set } from 'firebase/database';
import database from './FirebaseDB';

function MakeupProductsTable (props) {

    const [currentProducts, setCurrentProducts] = useState(props.items);
    const [priceCheckBoxes, setPriceCheckBoxes] = useState([]);
    const [productTypeCheckBoxes, setProductTypeCheckBoxes] = useState([]);

    const priceFilterHandler = (checkBoxes) => {
        setPriceCheckBoxes(checkBoxes);
        updateFilteredProducts(checkBoxes, productTypeCheckBoxes);
    };

    const productTypeFilterHandler = (checkBoxes) => {
        setProductTypeCheckBoxes(checkBoxes);
        updateFilteredProducts(priceCheckBoxes, checkBoxes);
    };

    const updateFilteredProducts = (priceFilters, typeFilters) => {
        let filteredProducts = [...props.items]; // העתקה של props

        if (typeFilters.length !== 0 && typeFilters.length !== 10) {
            filteredProducts = filteredProducts.filter((product) =>
                typeFilters.includes(product.product_type)
            );
        }

        if (priceFilters.length !== 0 && priceFilters.length !== 6) {
            const priceFilteredProducts = [];
            priceFilters.forEach((item) => {
                const price = parseInt(item);
                if (price % 10 === 0) {
                    priceFilteredProducts.push(
                        ...filteredProducts.filter( //השימוש ב-... מאפשר להוסיף את כל האלמנטים מהמיון ישירות כפריטים בודדים למערך.
                            (product) => parseFloat(product.price) >= price - 10 && parseFloat(product.price) < price
                        )
                    );
                } else {
                    priceFilteredProducts.push(
                        ...filteredProducts.filter((product) => parseFloat(product.price) >= price - 5)
                    );
                }
            });
            filteredProducts = priceFilteredProducts;
        }
        setCurrentProducts(filteredProducts);
    };

    const randomColorFunction = (colors) => {
        if (colors.length !== 0) {
            const colorNames = colors.map((color) => color.colour_name);
            const randomIndex = Math.floor(Math.random() * colorNames.length);
            return colorNames[randomIndex];
        }
        return "";
    };

    const addProductToCartHandler = (productName) => {
        const newProductInitial = currentProducts.find((product) => product.name === productName);

        const newProductFinal = {
            brand: newProductInitial.brand,
            name: newProductInitial.name,
            price: newProductInitial.price,
            price_sign: newProductInitial.price_sign,
            image_link: newProductInitial.image_link,
            product_color: randomColorFunction(newProductInitial.product_colors),
            Quantity: 0
        };

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

    return (
        <div>
            <FiltersSection onPriceFilterDone={priceFilterHandler} onProductTypeFilterDone={productTypeFilterHandler}/>
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
    );
}
export default MakeupProductsTable;