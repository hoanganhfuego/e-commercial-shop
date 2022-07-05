import Product from "./Product";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { actionCategory } from "../store/categorySlice";
import { useParams } from "react-router-dom";

function Products(){
    const data = useSelector(state => state.dataProduct.newValue)
    const dispatch = useDispatch()
    const firstProduct = useSelector(state => state.categorySlice.value)
    const lastProduct = 6
    const pageNumber = Math.ceil(data.length/lastProduct)
    const dataPerPage = data.slice(firstProduct, lastProduct+firstProduct)
    const isChoose = useSelector(state => state.categorySlice.isChoose)
    const pageNumberRender = ()=>{
        let number = []
        for(let i=0; i<pageNumber; i++){
            number = [...number, i]
        }
        return number
    }

    function changepage(event){
        window.scroll(0,0)
        dispatch(actionCategory.changePageNumber(event.target.id))
        dispatch(actionCategory.changePage(event.target.id))
    }

    console.log(data)

    const dataProductRender = dataPerPage.map((product, index) => {
        const {id, name, price, img, status, category} = product
        return (
            <Product
                key = {index}
                id = {id}
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
            <div className="products-main">
                <div className="products-main-child">
                    {dataProductRender}
                </div>
                <div className="pages-number">
                    <div className="pages-number-main">
                        {pageNumberRender().map((item, index) => (
                            <p onClick={changepage} id={index} key={index} style={!isChoose[index]?{backgroundColor:'black', color:'white'}: {backgroundColor:'white', color:'black'}} >{item+1}</p>
                        ))}
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default Products;