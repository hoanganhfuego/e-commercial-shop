import Product from "./Product";
import { useSelector } from "react-redux/es/exports";

function Products(props){

    const data = useSelector(state => state.dataProduct)

    const dataProduct = data.map((product, index) => {
        const {id, name, price, img, status, category} = product
        if(product.category === props.categoryType) return (
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
        else if(!props.categoryType) return (
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