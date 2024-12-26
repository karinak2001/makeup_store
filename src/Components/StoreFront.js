import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MakeupProductsTable from "./MakeupProductsTable";
import '../Style/StoreFront.css'

function StoreFront() {

    const navigate = useNavigate();
    const [makeupProducts, setMakeupProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const checkImageExists = async (url) => {
        try {
            const response = await fetch(url, {method: 'HEAD'});
            return response.ok;
        } catch (error) {
            return false;
        }
    };

    const isProductValid = (makeupProduct) => {
        return makeupProduct.brand && makeupProduct.name && makeupProduct.price && makeupProduct.product_type;
    };

    useEffect(() => {
        const fetchMakeupProducts = async () => {
            try {
                const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
                const data = await response.json();
                const filteredMakeupProducts = await Promise.all(data.map(async (makeupProduct) => {
                    const imgExists = await checkImageExists(makeupProduct.image_link);

                    if (imgExists && isProductValid(makeupProduct)) {
                        return {
                            brand: makeupProduct.brand,
                            name: makeupProduct.name,
                            price: makeupProduct.price,
                            price_sign: '$',
                            image_link: makeupProduct.image_link,
                            product_type: makeupProduct.product_type,
                            product_colors: makeupProduct.product_colors
                        };
                    }
                    return null;
                }));

                const validMakeupProducts = filteredMakeupProducts.filter(product => product !== null);

                setMakeupProducts(validMakeupProducts);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching countries:", error);
                setLoading(false);
            }
        };
        fetchMakeupProducts();
    }, []);

    return (
        <div>
            {
                loading
                    ?
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="title">GlowUp</div>
                        <div className="cart-button">
                            <button type="button" class="btn btn-outline-secondary" onClick={() => navigate('/new')}>Shopping Cart</button>
                        </div>
                        <MakeupProductsTable items={makeupProducts}/>
                    </div>
            }
        </div>
    );
}
export default StoreFront;