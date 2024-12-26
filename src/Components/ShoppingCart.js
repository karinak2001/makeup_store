import React, { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
import database from './FirebaseDB';
import '../Style/ShoppingCart.css'

const ShoppingCart = () => {
    const [dataArray, setDataArray] = useState([]);

    // countSubTotal - function

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

    return (
        <div className="container-cart">
            <div className="title-cart">Shopping Cart({dataArray.length})</div>
            <div className="container1-cart">
                {dataArray.map((item, index) => (
                    <div className="products-container">
                        <div className="container2-cart">
                            <img className="image-cart" src={item.image_link} alt={item.name}/>
                        </div>
                        <div className="container3-cart">
                            <div className="name-cart">{item.name}</div>
                            <div className="brand-cart">{item.brand}</div>
                            <div className="color-cart">Color: {item.product_color}</div>
                            <div className="price-cart">{item.price_sign}{item.price}</div>
                        </div>
                    </div>
                ))}
                {/*<pre>{JSON.stringify(dataArray, null, 2)}</pre>*/}
            </div>
        </div>
    );
};
export default ShoppingCart;