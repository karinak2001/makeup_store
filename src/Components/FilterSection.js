import '../Style/FilterSection.css'

function FilterSection (props) {



    return (
        <div>
            <div className="container mt-5">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button"
                            id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Price Filter
                    </button>
                    <ul className="dropdown-menu p-3" aria-labelledby="dropdownMenuButton">
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="option1"
                                       id="option1"/>
                                <label className="form-check-label" htmlFor="option1">
                                    $0-$10
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="option2"
                                       id="option2"/>
                                <label className="form-check-label" htmlFor="option2">
                                    $10-$20
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="option3"
                                       id="option3"/>
                                <label className="form-check-label" htmlFor="option3">
                                    $20-$30
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="option4"
                                       id="option4"/>
                                <label className="form-check-label" htmlFor="option4">
                                    $30-$40
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="option5"
                                       id="option5"/>
                                <label className="form-check-label" htmlFor="option5">
                                    $40-$50
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default FilterSection;