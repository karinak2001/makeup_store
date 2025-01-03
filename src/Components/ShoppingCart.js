import React, {useEffect, useState} from 'react';
import {get, ref} from 'firebase/database';
import database from './FirebaseDB';
import '../Style/ShoppingCart.css';

const ShoppingCart = () => {
    const [dataArray, setDataArray] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const PRICE_SIGN = '$';

    const subTotalCount = () => {
        const prices = currentPricesArray();
        return prices.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
    }

    const currentPricesArray = () => {
        const prices = [];
        dataArray.forEach((item) => {
            prices.push(parseFloat(item.price))
        })
        return prices;
    }

    const fetchDataFromFirebase = async () => {
        try {
            // הפניה לשורש מסוים ב-Database
            const dbRef = ref(database, 'objects');
            const snapshot = await get(dbRef);

            if (snapshot.exists()) {
                // המרת הנתונים למערך
                const data = snapshot.val();
                const dataArray = Object.values(data);
                setDataArray(dataArray);
                console.log("Data fetched successfully:", dataArray);
            } else {
                console.log("No data available.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // קריאה לנתונים עם הטעינה הראשונית
    useEffect(() => {
        fetchDataFromFirebase();
    }, []); // [] מבטיח שהפונקציה תרוץ רק פעם אחת עם טעינת הרכיב

    useEffect(() => {
        setSubTotal(subTotalCount());
    }, [dataArray]);

    return (
        <div>
            {
                dataArray.length !==0 &&
                <div className="container-cart">
                    <div className="title-cart">Shopping Cart({dataArray.length})</div>
                    <div className="container_1-cart">
                        {dataArray.map((item, index) => (
                            <div className="product-container">
                                <div className="container_2-cart">
                                    <img className="shadow p-3 mb-5 bg-body-tertiary rounded image-cart" src={item.image_link} alt={item.name}/>
                                </div>
                                <div className="container_3-cart">
                                    <div className="name-cart">{item.name}</div>
                                    <div className="brand-cart">{item.brand}</div>
                                    <div className="color-cart">Color: {item.product_color}</div>
                                    <div className="price-cart">{item.price_sign}{item.price}</div>
                                </div>
                                <div class="shadow p-3 mb-5 bg-body-tertiary rounded subtotal-container">
                                    <div className="subtotal-title">SubTotal: {PRICE_SIGN}{subTotal}</div>
                                    <div className="checkout-button">
                                        <button type="button" className="btn btn-light">CHECKOUT</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
};
export default ShoppingCart;