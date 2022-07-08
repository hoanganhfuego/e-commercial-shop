import Product from "./Product";
import { useParams, Route, Routes, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { actionCategory } from "../store/categorySlice";
import Page from "./Page";
import Footer from "./Footer";

export default function ProductRender(){
    const dispatch = useDispatch()
    const params = useParams()
    const data = useSelector(state => state.dataProduct.newValue)
    const newData = ()=>{
        if(params.type != 'all-collection') return data.filter(product => product.category == params.type)
        else return data
    }
    const [firstProduct, setFirstProduct] = useSearchParams()
    console.log(firstProduct.get('page'))
    const productAmout = 6
    const firstValue = ()=>{
        if(firstProduct.get('page')) return (firstProduct.get('page')-1)*productAmout
        else return 0
    }
    const pageNumber = Math.ceil(newData().length/productAmout)
    const dataPerPage = newData().slice(firstValue(), productAmout+firstValue())
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
        // dispatch(actionCategory.changePage(event.target.id))
        setFirstProduct({page: parseInt(event.target.id)+1})
    }

    const dataToRender = dataPerPage.map((product, index) => {
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
        }
    )

    const dataToRenderAll = data.map((product, index) => {
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
        }
    )

    return (
        <div className="products">
            <div className="products-main">
                <div className="products-main-child">
                    {dataToRender.length? dataToRender: dataToRenderAll}
                </div>
                <div className="pages-number">
                    <div className="pages-number-main">
                        {pageNumberRender().map((item, index) => (
                            <p onClick={changepage} id={index} key={index} style={firstProduct.get('page') == index+1?{backgroundColor:'black', color:'white'}: {backgroundColor:'white', color:'black'}} >{item+1}</p>
                        ))}
                    </div>
                </div>
            </div>  
            <Routes>
                <Route path=":page" element={<Page /> } exact></Route>
            </Routes>
        </div>
    )
}