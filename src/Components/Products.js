import Product from "./Product";
import data from "../data"

function Products(props){

    const dataProduct = data.map((product, index) => {
        const {id, name, price, img, status, category} = product
        if(product.category === props.categoryType)
        return (
            <Product 
                key = {id}
                id = {index}
                name = {name}
                img = {img}
                price = {price}
                status = {status}
                category = {category}
            />
        )
        if(!props.categoryType) return (
            <Product 
                key = {id}
                id = {index}
                name = {name}
                img = {img}
                price = {price}
                status = {status}
                category = {category}
            />
        )
    })

    return(
        <div className="products">
            {dataProduct}
        </div>
    )
}

export default Products;