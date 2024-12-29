import PriceFilter from "./PriceFilter";
import ProductTypeFilter from "./ProductTypeFilter";
import '../Style/Filters.css'

function FiltersSection (props) {

    const priceFilterImplement = (priceFilterCheckBoxes) => {
        props.onPriceFilterDone(priceFilterCheckBoxes);
    }

    const productTypeFilterImplement = (productTypeFilterCheckBoxes) => {
        props.onProductTypeFilterDone(productTypeFilterCheckBoxes);
    }

    return (
        <div className="filters-container">
            <PriceFilter onPriceFilter={priceFilterImplement}/>
            <ProductTypeFilter onProductTypeFilter={productTypeFilterImplement}/>
        </div>
    )
}

export default FiltersSection;