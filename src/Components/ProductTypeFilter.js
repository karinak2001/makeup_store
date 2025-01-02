import '../Style/Filters.css';
import {useState} from "react";

function ProductTypeFilter (props) {

    const [productTypeFilterCheckboxes, setProductTypeFilterCheckboxes] = useState([]);

    const checkBoxProductTypeFilterHandler = (event) => {
        if (productTypeFilterCheckboxes.includes(event.target.value)) {
            const newArray = productTypeFilterCheckboxes.filter((item) => item !== event.target.value);
            setProductTypeFilterCheckboxes(newArray);
        } else {
            setProductTypeFilterCheckboxes([...productTypeFilterCheckboxes, event.target.value]);
        }
    };

    const doneButtonProductTypeFilterHandler = () => {
        props.onProductTypeFilter(productTypeFilterCheckboxes)
    };

    return (
        <div>
            <div className="container mt-5">
                <div className="productType-dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button"
                            id="dropdownMenuButtonProductType" data-bs-toggle="dropdown" aria-expanded="false">
                        Product Type
                    </button>
                    <ul className="dropdown-menu p-3" aria-labelledby="dropdownMenuButtonProductType">
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="lipstick"
                                       id="option1" onClick={checkBoxProductTypeFilterHandler}/>
                                <label className="form-check-label" htmlFor="option1">
                                    Lipstick
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="foundation"
                                       id="option2" onClick={checkBoxProductTypeFilterHandler}/>
                                <label className="form-check-label" htmlFor="option2">
                                    Foundation
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="eyeshadow"
                                       id="option3" onClick={checkBoxProductTypeFilterHandler}/>
                                <label className="form-check-label" htmlFor="option3">
                                    Eyeshadow
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="eyeliner"
                                       id="option4" onClick={checkBoxProductTypeFilterHandler}/>
                                <label className="form-check-label" htmlFor="option4">
                                    Eyeliner
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="eyebrow"
                                       id="option5" onClick={checkBoxProductTypeFilterHandler}/>
                                <label className="form-check-label" htmlFor="option5">
                                    Eyebrows
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="bronzer"
                                       id="option6" onClick={checkBoxProductTypeFilterHandler}/>
                                <label className="form-check-label" htmlFor="option6">
                                    Bronzer
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="blush"
                                       id="option7" onClick={checkBoxProductTypeFilterHandler}/>
                                <label className="form-check-label" htmlFor="option7">
                                    Blush
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="lip_liner"
                                       id="option8" onClick={checkBoxProductTypeFilterHandler}/>
                                <label className="form-check-label" htmlFor="option8">
                                    Lip liner
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="mascara"
                                       id="option9" onClick={checkBoxProductTypeFilterHandler}/>
                                <label className="form-check-label" htmlFor="option9">
                                    Mascara
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="nail_polish"
                                       id="option10" onClick={checkBoxProductTypeFilterHandler}/>
                                <label className="form-check-label" htmlFor="option10">
                                    Nail Polish
                                </label>
                            </div>
                        </li>
                        <button type="button" className="btn btn-outline-dark"
                                onClick={doneButtonProductTypeFilterHandler}>Done
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ProductTypeFilter;