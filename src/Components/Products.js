import Product from "./Product";
import { useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";

function Products(props){
    const data = useSelector(state => state.dataProduct)
    console.log(data)
    const choosedCategory = useSelector(state => state.asideSlice)
    const [newData, setData] = useState(data)
    const [firstProduct, setFirstProduct] = useState(0)
    const lastProduct = 6
    const pageNumber = Math.ceil(newData.length/lastProduct)
    const dataPerPage = newData.slice(firstProduct, lastProduct+firstProduct)
    const [isChoose, setIsChoose] = useState([false, true, true])
    const pageNumberRender = ()=>{
        let number = []
        for(let i=0; i<pageNumber; i++){
            number = [...number, i]
        }
        return number
    }

    function changepage(event){
        setFirstProduct((parseInt(event.target.id)+1)*lastProduct - lastProduct)
        window.scroll(0,0)
        setIsChoose(prev => prev.map((item, index) =>{
            return parseInt(event.target.id)===index? false: true
        }))
    }

    useEffect(()=>{
        if(choosedCategory.tshirt) {
            setData(data.filter(item => item.category === 'tshirt'))
        }
        if(choosedCategory.short){
            setData(data.filter(item => item.category === 'short'))
        }
        if(choosedCategory.jean){
            setData(data.filter(item => item.category === 'jean'))
        }
        if(choosedCategory.shirt){
            setData(data.filter(item => item.category === 'shirt'))
        }
        if(choosedCategory.allproduct){
            setData(data)
        }
    }, [choosedCategory])

    const dataProductRender = dataPerPage.map((product, index) => {
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