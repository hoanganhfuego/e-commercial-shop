import Product from "./Product";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

export default function ProductRender(){
    // const data = useSelector(state => state.dataProduct.value)
    // const params = useParams()
    // const firstProduct = params.type - 1
    // const lastProduct = 6
    // const dataPerPage = data.slice(firstProduct, lastProduct+firstProduct)

    // const dataProductRender = data.map((product, index) => {
    //     const {id, name, price, img, status, category} = product
    //     if(params.type == category){
    //         return (
    //             <Product
    //                 key = {index}
    //                 id = {id}
    //                 name = {name}
    //                 img = {img}
    //                 price = {price}
    //                 status = {status}
    //                 category = {category}
    //             />
    //         )
    //     }
    // })
    return (
        <h1>xin chao</h1>
    )
}