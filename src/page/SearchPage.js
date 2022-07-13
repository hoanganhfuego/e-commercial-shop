import { useSelector } from "react-redux"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Product from "../Components/Product"
import Footer from "../Components/Footer"
import './searchPage.css'
import ProductRender from "../Components/ProductRender"

export default function SearchPage(){
    const mainData = useSelector(state => state.dataProduct.value)
    const [params, setParams] = useSearchParams()
    const data = mainData.filter(item=>{
        return item.name.toLowerCase().includes(params.get('search'))
    })
    const productPerPage= 6
    const pageNumber = Math.ceil(data.length/productPerPage)
    const pageNumberRender = ()=>{
        let number = []
        for(let i=0; i<pageNumber; i++){
            number = [...number, i]
        }
        return number
    }
    const page = params.get('page') || 1;
    const search = params.get('search')
    const dataRender = data.slice((page-1)*productPerPage, (page-1)*productPerPage+productPerPage)

    function handleChangePage(event){
        setParams({search: search, page: event.target.innerHTML})
    }

    return(
        <div className="search-page">
        <Navbar />
        <h2>results</h2>
        <div className="search-page-main-cover">
            <div className="search-page-main">
                {params.get('search')?
                    dataRender.map((product, index)=>{
                        const {id, name, price, img, status, category} = product
                        return (
                            <>
                                <Product
                                    key = {index}
                                    id = {id}
                                    name = {name}
                                    img = {img}
                                    price = {price}
                                    status = {status}
                                    category = {category}
                                />
                                <p className="break"></p>
                            </>
                        )
                    })
                    :<h3>please try again</h3>}
            </div>
            <div className="search-page-number">
                {
                    pageNumberRender().map((item, index) => {
                        return (!params.get('page')? 
                        index == 0?
                        <p onClick={handleChangePage} key={index} style={{backgroundColor:'black', color:'white'}}>{item+1}</p>
                        :<p onClick={handleChangePage} key={index} style={{backgroundColor:'white', color:'black'}}>{item+1}</p>
                        :<p onClick={handleChangePage} key={index} style={params.get('page')==index+1?{backgroundColor:'black', color:'white'}:{}}>{item+1}</p>)
                    })
                }
            </div>
        </div>
        <Footer />
        </div>
    )
}