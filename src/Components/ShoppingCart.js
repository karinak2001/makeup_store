import React, { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
import database from './FirebaseDB';

const ShoppingCart = () => {
    const [dataArray, setDataArray] = useState([]);

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
        <div>
            <h1>Shopping Cart</h1>
            <div>
                <h2>items:</h2>
                <pre>{JSON.stringify(dataArray, null, 2)}</pre>
            </div>
        </div>
    );
};

export default ShoppingCart;