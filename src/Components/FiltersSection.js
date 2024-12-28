import '../Style/FilterSection.css'
import {useState} from "react";

function FiltersSection (props) {

    const [priceFilterCheckboxes, setPriceFilterCheckboxes] = useState([])

    const checkBoxPriceFilterHandler = (event) => {
        if (priceFilterCheckboxes.includes(event.target.value)) {
            const newArray = priceFilterCheckboxes.filter((item) => item !== event.target.value);
            setPriceFilterCheckboxes(newArray);
        } else {
            setPriceFilterCheckboxes([...priceFilterCheckboxes, event.target.value]);
        }
    }

    const doneButtonPriceFilterHandler = () => {
        props.onPriceFilter(priceFilterCheckboxes)
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button"
                            id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Price
                    </button>
                    <ul className="dropdown-menu p-3" aria-labelledby="dropdownMenuButton">
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="10"
                                       id="option1" onClick={checkBoxPriceFilterHandler}/>
                                <label className="form-check-label" htmlFor="option1">
                                    $0-$10
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="20"
                                       id="option2" onClick={checkBoxPriceFilterHandler}/>
                                <label className="form-check-label" htmlFor="option2">
                                    $10-$20
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="30"
                                       id="option3" onClick={checkBoxPriceFilterHandler}/>
                                <label className="form-check-label" htmlFor="option3">
                                    $20-$30
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="40"
                                       id="option4" onClick={checkBoxPriceFilterHandler}/>
                                <label className="form-check-label" htmlFor="option4">
                                    $30-$40
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="50"
                                       id="option5" onClick={checkBoxPriceFilterHandler}/>
                                <label className="form-check-label" htmlFor="option5">
                                    $40-$50
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="55"
                                       id="option6" onClick={checkBoxPriceFilterHandler}/>
                                <label className="form-check-label" htmlFor="option6">
                                    $50+
                                </label>
                            </div>
                        </li>
                        <button type="button" className="btn btn-outline-secondary" onClick={doneButtonPriceFilterHandler}>Done</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FiltersSection;