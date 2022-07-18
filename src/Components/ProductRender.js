import Product from "./Product";
import { useParams,useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

export default function ProductRender(){
    const [paramSearch, setPramSearch] = useSearchParams()
    const params = useParams()
    const data = useSelector(state => state.dataProduct.newValue)
    const newData = ()=>{
        if(params.type != 'all-collection'){
            return data.filter(product => product.category == params.type)
        } 
        else {
            return data
        }
    }
    const filter = ()=>{
        if(paramSearch.get('filter')=='ON SALE'){
            return newData().filter(item => {
                if(item.status)return item.status == 'sale'
            })
        }
        if(paramSearch.get('filter')=='NEW STUFF'){
            return newData().filter(item => {
                if(item.status)return item.status == 'new'
            })
        }
        if(paramSearch.get('filter')=='LOW TO HIGH'){
            return newData().slice().sort((a,b)=>{
                return a.price-b.price
            })
        }
        if(paramSearch.get('filter')=='HIGH TO LOW'){
            return newData().slice().sort((a,b)=>{
                return b.price-a.price
            })
        }
    }
    const productAmout = 6
    const firstValue = ()=>{
        if(paramSearch.get('page')) return (paramSearch.get('page')-1)*productAmout
        else return 0
    }
    const pageNumber = ()=>{
        return Math.ceil(finalData().length/productAmout)
    }
    const finalData = ()=>{
        if(!filter()) return newData()
        else return filter()
    }
    const dataPerPage = ()=>{
        return finalData().slice(firstValue(), productAmout+firstValue())
    }
    const pageNumberRender = ()=>{
        let number = []
        for(let i=0; i<pageNumber(); i++){
            number = [...number, i]
        }
        return number
    }

    function changepage(event){
        window.scroll(0,0)
        if(!paramSearch.get('filter')) return setPramSearch({page: parseInt(event.target.id)+1})
        else return setPramSearch({filter: paramSearch.get('filter'),page: parseInt(event.target.id)+1})
    }

    const dataToRender = dataPerPage().map((product, index) => {
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
        <>
        {/* <Header/> */}
        {/* <Aside/> */}
        <div className="products">
            <div className="products-main">
                <div className="products-main-child">
                    {dataToRender.length? dataToRender: <h1>product unavailable</h1>}
                </div>
                <div className="pages-number">
                    <div className="pages-number-main">
                        {pageNumberRender().map((item, index) => (
                            !paramSearch.get('page')? 
                            index == 0?<p onClick={changepage} id={index} key={index} style={{backgroundColor:'black', color:'white'}} >{item+1}</p>: <p onClick={changepage} id={index} key={index} style={{backgroundColor:'white', color:'black'}} >{item+1}</p>
                            :<p onClick={changepage} id={index} key={index} style={paramSearch.get('page') == index+1?{backgroundColor:'black', color:'white'}: {backgroundColor:'white', color:'black'}} >{item+1}</p>
                        ))}
                    </div>
                </div>
            </div>  
        </div></>
    )
}